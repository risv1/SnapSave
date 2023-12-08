package routes

import (
	"snap_save/src/controllers"
	"snap_save/src/middlewares"
	"github.com/gofiber/fiber/v2"
)

func AdminSetup(app *fiber.App) {

	adminGroup := app.Group("/api/admin").Use(middlewares.IsAdmin)

    adminGroup.Post("/add_movie", controllers.AddMovie)
    adminGroup.Post("/add_sport", controllers.AddSport)
    adminGroup.Get("/view_users", controllers.ViewUsers)

}