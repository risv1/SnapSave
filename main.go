package main

import (
	"snap_save/src/db"
	"snap_save/src/middlewares"
	"snap_save/src/routes"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {

    db.Connect();

    app := fiber.New();

    app.Use(cors.New(middlewares.CorsConfig))

    routes.Setup(app)
    routes.AdminSetup(app)

    app.Listen(":8000")
}