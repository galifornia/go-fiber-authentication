package models

// !FIXME: use google uuid package
type User struct {
	Id       uint   `json:"id"`
	Name     string `json:"name"`
	Password []byte `json:"-"`
	Email    string `json:"email" gorm:"unique"`
}
