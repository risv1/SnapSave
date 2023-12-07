package models

type Movie struct {
    Id          int    `json:"id"`
    Name        string `json:"name"`
    Src         string `json:"src"`
    Alt         string `json:"alt"`
    Description string `json:"description"`
}
