package controllers

import (
	"snap_save/src/db"
	"snap_save/src/models"

	"github.com/gofiber/fiber/v2"
)

func AddMovie(c *fiber.Ctx) error{
	var data map[string]string

	err := c.BodyParser(&data)

	if err!=nil{
		return err
	}

	movie := models.Movie{
		Name: data["name"],
		Src: data["src"],
		Alt: data["alt"],
		Description: data["description"],
	}

	db.DB.Create(&movie)

	return c.JSON(movie)
}

func ViewMovies(c *fiber.Ctx) error {
	var movies []models.Movie

	db.DB.Find(&movies)

	return c.JSON(movies)
}

func ViewUsers(c *fiber.Ctx) error {
	var users []models.User

	db.DB.Find(&users)

	return c.JSON(users)
}