package routes

import (
	"github.com/galifornia/go-fiber-authentication/handlers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App) {
	app.Get("/", handlers.Home)
}
