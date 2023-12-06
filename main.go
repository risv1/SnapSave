package main

import (
	"snap_save/src/db"
	"snap_save/src/routes"
	"github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {

    db.Connect();

    app := fiber.New();

    app.Use(cors.New(cors.Config{
        AllowOrigins: "https://localhost/*",
        AllowMethods: "GET, POST, PUT. DELETE",
        AllowHeaders: "Origin, Content-Type, Accept",
    }))

    routes.Setup(app);

    app.Listen(":8000")
}