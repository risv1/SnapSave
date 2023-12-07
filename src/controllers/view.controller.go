package controllers

import (
	"snap_save/src/db"
	"snap_save/src/models"
	"github.com/gofiber/fiber/v2"
)

func ViewMovies(c *fiber.Ctx) error {
	var movies []models.Movie

	db.DB.Find(&movies)

	return c.JSON(movies)
}

func ViewMovieByID(c *fiber.Ctx) error {
	movieID := c.Params("id")
	var movie models.Movie

	if err := db.DB.First(&movie, movieID).Error; err != nil {
		response := fiber.Map{"error": "Movie not found"}
		return c.Status(fiber.StatusNotFound).JSON(response)
	}

	return c.JSON(movie)
}

func ViewSports(c *fiber.Ctx) error {
	var sports []models.Sport

	db.DB.Find(&sports)

	return c.JSON(sports)
}

func ViewSportByID(c *fiber.Ctx) error {
	sportID := c.Params("id")
	var sport models.Sport

	if err := db.DB.First(&sport, sportID).Error; err != nil {
		response := fiber.Map{"error": "Sport not found"}
		return c.Status(fiber.StatusNotFound).JSON(response)
	}

	return c.JSON(sport)
}
