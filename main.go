package main

import (
	"snap_save/src/db"
	"snap_save/src/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {

    db.Connect();

    app := fiber.New();

    routes.Setup(app);

    app.Listen(":8000")
}