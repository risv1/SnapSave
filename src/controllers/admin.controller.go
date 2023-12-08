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

// func EditUser(c *fiber.Ctx) error {
// 	var user models.User

// 	db.DB.Find(&user)
// }

// func EditMovie(c *fiber.Ctx) error {
// 	var movie models.Movie

// 	db.DB.Find(&movie)
// }

// func EditSport(c *fiber.Ctx) error {
// 	var movie models.Sport

// 	db.DB.Find(&sport)
// }

