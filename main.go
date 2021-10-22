package main

import (
	"github.com/galifornia/go-fiber-authentication/database"
	"github.com/galifornia/go-fiber-authentication/routes"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	database.Connect()

	routes.Setup(app)

	app.Listen("localhost:8000")
}
