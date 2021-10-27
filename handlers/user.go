package handlers

import (
	"github.com/dgrijalva/jwt-go"
	"github.com/galifornia/go-fiber-authentication/database"
	"github.com/galifornia/go-fiber-authentication/models"
	"github.com/gofiber/fiber/v2"
)

func GetUserCookie(c *fiber.Ctx) error {
	cookie := c.Cookies("jwt")

	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(SecretKey), nil
	})

	if err != nil {
		c.Status(fiber.StatusUnauthorized)
		return c.JSON(fiber.Map{
			"message": "No user has been authenticated",
		})
	}

	claims := token.Claims.(*jwt.StandardClaims)

	var user models.User
	database.DB.Where("id = ?", claims.Issuer).First(&user)

	return c.JSON(user)
}
