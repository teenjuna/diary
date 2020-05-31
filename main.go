package main

import (
	"flag"
	"log"

	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/ohgodwynona/diary/core"
	"github.com/ohgodwynona/diary/graphql"
	"github.com/ohgodwynona/diary/storages/bolt"
	"github.com/ohgodwynona/diary/storages/memory"
)

var (
	port       string
	boltPath   string
	staticPath string
)

func init() {
	flag.StringVar(&port, "port", "4000", "the port of the server")
	flag.StringVar(&boltPath, "bolt", "", "the path to the BoltDB file")
	flag.StringVar(&staticPath, "static", "", "the path to the static to serve")
	flag.Parse()
}

func main() {
	var recordStorage core.RecordStorage

	// Create record storage.
	if boltPath != "" {
		bolt, err := bolt.New(boltPath)
		if err != nil {
			log.Fatal(err)
		}

		recordStorage = bolt.RecordStorage
	} else {
		recordStorage = memory.New().RecordStorage
	}

	// Create diary instance.
	diary := core.Diary{RecordStorage: recordStorage}

	e := echo.New()
	e.HidePort = true
	e.HideBanner = true
	if staticPath != "" {
		e.Use(middleware.StaticWithConfig(middleware.StaticConfig{
			Root:  staticPath,
			HTML5: true,
		}))
	}
	e.Use(middleware.CORS())
	e.Any("/graphql", echo.WrapHandler(graphql.NewHandler(diary)))
	e.GET("/playground", echo.WrapHandler(graphql.NewPlaygroundHandler("/graphql")))

	log.Printf("Starting server on http://localhost:%s/", port)
	log.Fatal(e.Start(":" + port))
}
