package db

import (
	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"log"
	"os"
	"snap_save/src/models"
)

var (
	DB        *gorm.DB
	dbUser    string
	dbPassword string
	database  string
)

func init() {
	loadenv := godotenv.Load()
	if loadenv != nil {
		log.Println("Error loading env")
	}

	database = os.Getenv("DATABASE_URL")
	dbUser = os.Getenv("USER")
	dbPassword = os.Getenv("PASSWORD")
}

func Connect() {
	connection, err := gorm.Open(mysql.Open(dbUser + ":" + dbPassword + "@/" + database), &gorm.Config{})

	if err != nil {
		panic("Couldn't connect to the database")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})

	connection.AutoMigrate(&models.Movie{})
}
