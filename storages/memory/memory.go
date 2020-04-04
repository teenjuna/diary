package memory

import "github.com/ohgodwynona/diary/core"

// New returns new Storage.
func New() *Storage {
	return &Storage{
		RecordStorage: &recordStorage{make(map[core.RecordID]core.Record)},
	}
}

// Storage provides access to the memory storage.
type Storage struct {
	RecordStorage core.RecordStorage
}
