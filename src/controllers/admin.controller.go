package controllers

import (
	"snap_save/src/db"
	"snap_save/src/models"
	"strconv"
	"github.com/gofiber/fiber/v2"
)

func AddMovie(c *fiber.Ctx) error{
	var data map[string]string

	err := c.BodyParser(&data)

	if err!=nil{
		return err
	}

	id, err := strconv.Atoi(data["id"])
	if err != nil {
		return err
	}

	movie := models.Movie{
		Id: id,
		Name: data["name"],
		Src: data["src"],
		Alt: data["alt"],
		Description: data["description"],
	}

	db.DB.Create(&movie)

	return c.JSON(movie)
}

func AddSport(c *fiber.Ctx) error{
	var data map[string]string

	err := c.BodyParser(&data)

	if err!=nil{
		return err
	}

	id, err := strconv.Atoi(data["id"])
	if err != nil {
		return err
	}

	movie := models.Sport{
		Id: id,
		Name: data["name"],
		Src: data["src"],
		Alt: data["alt"],
		Description: data["description"],
	}

	db.DB.Create(&movie)

	return c.JSON(movie)
}

func ViewUsers(c *fiber.Ctx) error {
	var users []models.User

	db.DB.Find(&users)

	return c.JSON(users)
}

func ViewUserByID(c *fiber.Ctx) error {
	userID := c.Params("id")
	var user models.User
	
	if err := db.DB.First(&user, userID).Error; err!=nil{
		response := fiber.Map{"error": "User not found"}
		return c.Status(fiber.StatusNotFound).JSON(response)
	}

	return c.JSON(user)
}

func UpdateUser(c *fiber.Ctx) error {
    userID := c.Params("id")
    var user models.User

    if err := db.DB.First(&user, userID).Error; err != nil {
        response := fiber.Map{"error": "User not found"}
        return c.Status(fiber.StatusNotFound).JSON(response)
    }

    var updateUser models.User
    if err := c.BodyParser(&updateUser); err != nil {
        response := fiber.Map{"error": "Invalid request payload"}
        return c.Status(fiber.StatusBadRequest).JSON(response)
    }

    user.Name = updateUser.Name
    user.Email = updateUser.Email
	user.Role = updateUser.Role

    if err := db.DB.Save(&user).Error; err != nil {
        response := fiber.Map{"error": "Failed to update user"}
        return c.Status(fiber.StatusInternalServerError).JSON(response)
    }

    return c.JSON(user)
}

func UpdateMovie(c *fiber.Ctx) error {
    movieID := c.Params("id")
    var movie models.Movie

    if err := db.DB.First(&movie, movieID).Error; err != nil {
        response := fiber.Map{"error": "Movie not found"}
        return c.Status(fiber.StatusNotFound).JSON(response)
    }

    var updateMovie models.Movie
    if err := c.BodyParser(&updateMovie); err != nil {
        response := fiber.Map{"error": "Invalid request payload"}
        return c.Status(fiber.StatusBadRequest).JSON(response)
    }

    movie.Name = updateMovie.Name
    movie.Src = updateMovie.Src
	movie.Alt = updateMovie.Alt
	movie.Description = updateMovie.Description

    if err := db.DB.Save(&movie).Error; err != nil {
        response := fiber.Map{"error": "Failed to update movie"}
        return c.Status(fiber.StatusInternalServerError).JSON(response)
    }

    return c.JSON(movie)
}

func UpdateSport(c *fiber.Ctx) error {
    sportID := c.Params("id")
    var sport models.Sport

    if err := db.DB.First(&sport, sportID).Error; err != nil {
        response := fiber.Map{"error": "Sport not found"}
        return c.Status(fiber.StatusNotFound).JSON(response)
    }

    var updateSport models.Sport
    if err := c.BodyParser(&updateSport); err != nil {
        response := fiber.Map{"error": "Invalid request payload"}
        return c.Status(fiber.StatusBadRequest).JSON(response)
    }

    sport.Name = updateSport.Name
    sport.Src = updateSport.Src
	sport.Alt = updateSport.Alt
	sport.Description = updateSport.Description

    if err := db.DB.Save(&sport).Error; err != nil {
        response := fiber.Map{"error": "Failed to update sport"}
        return c.Status(fiber.StatusInternalServerError).JSON(response)
    }

    return c.JSON(sport)
}

func DeleteMovie(c *fiber.Ctx) error {
    movieID := c.Params("id")
    var movie models.Movie

    if err := db.DB.First(&movie, movieID).Error; err != nil {
        response := fiber.Map{"error": "Movie not found"}
        return c.Status(fiber.StatusNotFound).JSON(response)
    }

    if err := db.DB.Delete(&movie).Error; err != nil {
        response := fiber.Map{"error": "Failed to delete movie"}
        return c.Status(fiber.StatusInternalServerError).JSON(response)
    }

    response := fiber.Map{"message": "Movie deleted successfully"}
    return c.JSON(response)
}

func DeleteSport(c *fiber.Ctx) error {
    sportID := c.Params("id")
    var sport models.Sport

    if err := db.DB.First(&sport, sportID).Error; err != nil {
        response := fiber.Map{"error": "Sport not found"}
        return c.Status(fiber.StatusNotFound).JSON(response)
    }

    if err := db.DB.Delete(&sport).Error; err != nil {
        response := fiber.Map{"error": "Failed to delete sport"}
        return c.Status(fiber.StatusInternalServerError).JSON(response)
    }

    response := fiber.Map{"message": "Movie deleted successfully"}
    return c.JSON(response)
}

func DeleteUser(c *fiber.Ctx) error {
    userID := c.Params("id")
    var user models.User
    if err := db.DB.First(&user, userID).Error; err != nil {
        response := fiber.Map{"error": "User not found"}
        return c.Status(fiber.StatusNotFound).JSON(response)
    }

    if err := db.DB.Delete(&user).Error; err != nil {
        response := fiber.Map{"error": "Failed to delete user"}
        return c.Status(fiber.StatusInternalServerError).JSON(response)
    }

    response := fiber.Map{"message": "User deleted successfully"}
    return c.JSON(response)
}