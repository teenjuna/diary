package bolt

import (
	"encoding/json"

	"github.com/boltdb/bolt"
	"github.com/ohgodwynona/diary/core"
)

type recordStorage struct {
	s *Storage
}

func (rs recordStorage) Get(id core.RecordID) (*core.Record, error) {
	rec := &core.Record{}
	err := rs.s.db.View(func (tx *bolt.Tx) error {
		b := tx.Bucket(recordBucket)

		d := b.Get([]byte(id))
		if d == nil {
			return core.ErrRecordNotFound
		}

		if err := json.Unmarshal(d, rec); err != nil {
			return err
		}

		return nil
	})
	if err != nil {
		return nil, err
	}

	return rec, nil
}

func (rs recordStorage) GetAll() ([]*core.Record, error) {
	recs := make([]*core.Record, 0)
	err := rs.s.db.View(func (tx *bolt.Tx) error {
		c := tx.Bucket(recordBucket).Cursor()

		for _, d := c.First(); d != nil; _, d = c.Next() {
			rec := &core.Record{}
			if err := json.Unmarshal(d, rec); err != nil {
				return err
			}

			recs = append(recs, rec)
		}

		return nil
	})
	if err != nil {
		return nil, err
	}

	return recs, nil
}

func (rs recordStorage) Create(rec *core.Record) (*core.Record, error) {
	err := rs.s.db.Update(func (tx *bolt.Tx) error {
		b := tx.Bucket(recordBucket)

		d, err := json.Marshal(rec)
		if err != nil {
			return  err
		}

		return b.Put([]byte(rec.ID), d)
	})
	if err != nil {
		return nil, err
	}

	return rec, nil
}

func (rs recordStorage) Update(rec *core.Record) (*core.Record, error) {
	err := rs.s.db.Update(func (tx *bolt.Tx) error {
		b := tx.Bucket(recordBucket)

		if b.Get([]byte(rec.ID)) == nil {
			return core.ErrRecordNotFound
		}

		d, err := json.Marshal(rec)
		if err != nil {
			return  err
		}

		return b.Put([]byte(rec.ID), d)
	})
	if err != nil {
		return nil, err
	}

	return rec, nil
}

func (rs recordStorage) Delete(id core.RecordID) error {
	err := rs.s.db.Update(func (tx *bolt.Tx) error {
		b := tx.Bucket(recordBucket)
		return b.Delete([]byte(id))
	})
	if err != nil {
		return err
	}

	return nil
}

