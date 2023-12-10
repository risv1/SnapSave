package routes

import (
	"snap_save/src/controllers"
	"snap_save/src/middlewares"
	"github.com/gofiber/fiber/v2"
)

func AdminSetup(app *fiber.App) {

	adminGroup := app.Group("/api/admin").Use(middlewares.IsAdmin)

    adminGroup.Post("/movies", controllers.AddMovie)
    adminGroup.Post("/sports", controllers.AddSport)
    adminGroup.Get("/users", controllers.ViewUsers)
	adminGroup.Get("/users/:id", controllers.ViewUserByID)
	adminGroup.Put("/users/:id", controllers.UpdateUser)
	adminGroup.Put("/movies/:id", controllers.UpdateMovie)
	adminGroup.Put("/sports/:id", controllers.UpdateSport)
	adminGroup.Delete("/user/:id", controllers.DeleteUser)
	adminGroup.Delete("/movies/:id", controllers.DeleteMovie)
	adminGroup.Delete("/sports/:id", controllers.DeleteSport)

}