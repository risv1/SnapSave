package middlewares

import "github.com/gofiber/fiber/v2/middleware/cors"

var CorsConfig = cors.Config{
	AllowOrigins: "http://localhost:3000",
	AllowMethods: "GET, POST, PUT. DELETE",
	AllowHeaders: "Origin, Content-Type, Accept",
}