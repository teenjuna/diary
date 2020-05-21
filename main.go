package main

import (
	"flag"
	"log"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/ohgodwynona/diary/core"
	"github.com/ohgodwynona/diary/graphql"
	"github.com/ohgodwynona/diary/storages/memory"
)

var (
	port string
	staticPath string
)

func init() {
	flag.StringVar(&port, "port", "4000", "the port of the server")
	flag.StringVar(&staticPath, "spa", "", "the path to the SPA to serve")
	flag.Parse()
}

func main() {
	diary := core.Diary{RecordStorage: memory.New().RecordStorage}

	e := echo.New()
	e.HideBanner = true
	e.HidePort = true
	if staticPath != "" {
		e.Use(middleware.StaticWithConfig(middleware.StaticConfig{
			Root: staticPath,
			HTML5: true,
		}))
	}
	e.Use(middleware.CORS())
	e.Any("/graphql", echo.WrapHandler(graphql.NewHandler(diary)))
	e.GET("/playground", echo.WrapHandler(graphql.NewPlaygroundHandler("/graphql")))

	log.Printf("Starting server on http://localhost:%s/", port)
	log.Fatal(e.Start(":" + port))
}
