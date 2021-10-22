package models

// !FIXME: use google uuid package
type User struct {
	Id       uint
	Name     string
	Password string
	Email    string
}
