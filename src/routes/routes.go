package routes

import (
	"snap_save/src/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Post("/api/register", controllers.Register)

	app.Post("/api/login", controllers.Login)

	app.Get("/api/user", controllers.User)

	app.Post("/api/logout", controllers.Logout)

	//Admin Endpoints
	app.Post("/api/admin/add-movie", controllers.AddMovie)

	app.Get("/api/admin/movies", controllers.ViewMovies)

	app.Get("/api/admin/users", controllers.ViewUsers)
}

