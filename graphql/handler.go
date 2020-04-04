package graphql

import (
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/ohgodwynona/diary/core"
	"github.com/ohgodwynona/diary/graphql/internal"
	"github.com/ohgodwynona/diary/graphql/internal/generated"
)

func NewHandler(d core.Diary) http.Handler {
	return handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{
		Resolvers: &internal.Resolver{
			Diary: d,
		},
	}))
}

func NewPlaygroundHandler(endpoint string) http.Handler {
	return playground.Handler("GraphQL playground", endpoint)
}
