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

	app.Get("/api/movies", controllers.ViewMovies)

	app.Get("/api/movies/:id", controllers.ViewMovieByID)

	app.Get("api/sports", controllers.ViewSports)

	app.Get("/api/sports/:id", controllers.ViewSportByID)

	//Admin Endpoints
	app.Post("/api/admin/add-movie", controllers.AddMovie)

	app.Post("/api/admin/add-sport", controllers.AddSport)

	app.Get("/api/admin/users", controllers.ViewUsers)
}

