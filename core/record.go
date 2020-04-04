package core

//go:generate moq -pkg mock -out mock/record.go . RecordStorage

import (
	"time"

	"github.com/pkg/errors"
)

var (
	ErrRecordNotFound = errors.New("record is not found")
)

// RecordID represents record's id.
type RecordID string

// RecordIDFromDate returns RecordID for provided date.
func RecordIDFromDate(date time.Time) RecordID {
	return RecordID(date.Format("02.01.06"))
}

// Record represents a record in the diary.
type Record struct {
	ID   RecordID
	Text string
	Date time.Time
}

// NewRecord returns new Record.
func NewRecord(text string, date time.Time) *Record {
	return &Record{
		ID:   RecordIDFromDate(date),
		Text: text,
		Date: date,
	}
}

// RecordStorage provides access to the record's storage.
type RecordStorage interface {
	Get(id RecordID) (*Record, error)
	GetAll() ([]*Record, error)
	Create(rec *Record) (*Record, error)
	Update(rec *Record) (*Record, error)
	Delete(id RecordID) error
}
