package middlewares

import (
	"os"
	"snap_save/src/db"
	"snap_save/src/models"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
)

var SecretKey = os.Getenv("JWT_SECRET_KEY")

func IsAdmin(c *fiber.Ctx) error {

    cookie := c.Cookies("jwt")
	
    token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
        return []byte(SecretKey), nil
    })

    if err != nil {
        return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
            "message": "Unauthorized",
        })
    }

    if claims, ok := token.Claims.(*jwt.StandardClaims); ok && token.Valid {

        var user models.User
        db.DB.Where("id = ?", claims.Issuer).First(&user)

        if user.Role != "admin" {
            return c.Status(fiber.StatusForbidden).JSON(fiber.Map{
                "message": "Permission denied",
            })
        }

        c.Locals("user", user)

        return c.Next()
    }

    return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
        "message": "Unauthorized",
    })
}
