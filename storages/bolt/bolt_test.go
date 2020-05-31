package bolt_test

import (
	"io/ioutil"
	"os"

	"github.com/ohgodwynona/diary/storages/bolt"
)

type Storage struct {
	dbPath string
	*bolt.Storage
}

func New() *Storage {
	// Create temporary file for the test database.
	f, err := ioutil.TempFile("", "*_bolt.db")
	if err != nil {
		panic(err)
	}
	if err := f.Close(); err != nil {
		panic(err)
	}

	// Create new bolt instance associated with the file.
	s, err := bolt.New(f.Name())
	if err != nil {
		panic(err)
	}

	return &Storage{
		dbPath: f.Name(),	
		Storage: s,
	}
}

func (s *Storage) Destroy() {
	if err := os.Remove(s.dbPath); err != nil {
		panic(err)
	}
}