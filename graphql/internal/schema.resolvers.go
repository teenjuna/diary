package internal

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/ohgodwynona/diary/core"
	"github.com/ohgodwynona/diary/graphql/internal/generated"
)

func (r *mutationResolver) SaveRecord(ctx context.Context, text string) (*core.Record, error) {
	return r.Diary.SaveRecord(text)
}

func (r *mutationResolver) DeleteRecord(ctx context.Context, id core.RecordID) (*bool, error) {
	return nil, r.Diary.DeleteRecord(id)
}

func (r *queryResolver) GetRecord(ctx context.Context, id core.RecordID) (*core.Record, error) {
	return r.Diary.GetRecord(id)
}

func (r *queryResolver) GetRecords(ctx context.Context) ([]*core.Record, error) {
	return r.Diary.GetRecords()
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
