package bolt

import (
	"time"

	"github.com/boltdb/bolt"
	"github.com/ohgodwynona/diary/core"
)

var (
	recordBucket = []byte("records")
)

// New returns new Storage.
func New(dbPath string) (*Storage, error) {
	db, err := bolt.Open(dbPath, 0600, &bolt.Options{Timeout: 1 * time.Second})
	if err != nil {
		return nil, err
	}

	if err := createRequiredBuckets(db); err != nil {
		return nil, err
	}

	s := &Storage{db: db}
	s.RecordStorage = &recordStorage{s}

	return s, nil
}

// Storage provides access to the BoltDB storage.
type Storage struct {
	db *bolt.DB
	RecordStorage core.RecordStorage
}

func createRequiredBuckets(db *bolt.DB) error {
	return db.Update(func(tx *bolt.Tx) error {
		_, err := tx.CreateBucketIfNotExists(recordBucket)
		return err
	})
}