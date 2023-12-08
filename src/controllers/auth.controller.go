package controllers

import (
	"os"
	"snap_save/src/db"
	"snap_save/src/models"
	"strconv"
	"time"
	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

var SecretKey = os.Getenv("JWT_SECRET_KEY")
var AdminEmail = os.Getenv("ADMIN_EMAIL")

func Register(c *fiber.Ctx) error {
	var data map[string]string

	err := c.BodyParser(&data)

	if err!=nil{
		return err
	}

	password, _ := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)

	role := "user"
	if data["email"] == AdminEmail {
		role = "admin"
	}

	user := models.User{
		Name: 		data["name"],
		Email: 		data["email"],
		Password: 	password,
		Role: role,
	}

	db.DB.Create(&user)

	return c.JSON(user)
}

func Login(c *fiber.Ctx) error {
	var data map[string]string

	err := c.BodyParser(&data)

	if err!=nil{
		return err
	}

	var user models.User

	db.DB.Where("email = ?", data["email"]).First(&user)

	if user.Id == 0{
		c.Status(fiber.StatusNotFound)
		return c.JSON(fiber.Map{
			"message": "user not found",
		})
	}

	if err := bcrypt.CompareHashAndPassword(user.Password, []byte(data["password"])); err!=nil {
		c.Status(fiber.StatusBadRequest)
		return c.JSON(fiber.Map{
			"message": "Incorrect password",
		})
	}

	expirationTime := time.Now().Add(24 * time.Hour).Unix()

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer: strconv.Itoa(int(user.Id)),
		ExpiresAt: expirationTime,
	})

	token, err := claims.SignedString([]byte(SecretKey))

	if err!=nil{
		c.Status(fiber.StatusInternalServerError)
		return c.JSON(fiber.Map{
			"message": "could not login",
		})
	}

	cookie := fiber.Cookie{
		Name: "jwt",
		Value: token,
		Expires: time.Now().Add(24*time.Hour),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message": "success",
	})
}

func User(c *fiber.Ctx) error{
	cookie := c.Cookies("jwt")

	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func (token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err!=nil{
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "unauthenticated",
		})
	}

	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User
	db.DB.Where("id = ?", claims.Issuer).First(&user)

	return c.JSON(user)
}

func Logout(c *fiber.Ctx) error {
	cookie := fiber.Cookie{
		Name: "jwt",
		Value: "",
		Expires: time.Now().Add(-time.Hour),
		HTTPOnly: true,
	}

	c.Cookie(&cookie)

	return c.JSON(fiber.Map{
		"message": "success",
	})
}