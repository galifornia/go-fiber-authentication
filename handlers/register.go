package handlers

import (
	"github.com/galifornia/go-fiber-authentication/database"
	"github.com/galifornia/go-fiber-authentication/models"
	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func Register(c *fiber.Ctx) error {
	var data map[string]string

	err := c.BodyParser(&data)
	if err != nil {
		return err
	}

	pwd, err := bcrypt.GenerateFromPassword([]byte(data["password"]), 14)
	if err != nil {
		return err
	}

	// !FIXME: throw error if user is already registered
	user := models.User{
		Name:     data["name"],
		Email:    data["email"],
		Password: pwd,
	}

	database.DB.Create(&user)

	return c.JSON(user)
}
