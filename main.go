package main

import (
	"github.com/galifornia/go-fiber-authentication/database"
	"github.com/galifornia/go-fiber-authentication/routes"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))

	database.Connect()

	routes.Setup(app)

	app.Listen("localhost:8000")
}
