package memory

import "github.com/ohgodwynona/diary/core"

type recordStorage struct {
	m map[core.RecordID]core.Record
}

// Get returns a record from the memory storage.
func (rs recordStorage) Get(id core.RecordID) (*core.Record, error) {
	if rec, ok := rs.m[id]; ok {
		return recordCopy(rec), nil
	}
	return nil, core.ErrRecordNotFound
}

// GetAll returns all records from the memory storage.
func (rs recordStorage) GetAll() ([]*core.Record, error) {
	recs := make([]*core.Record, 0, len(rs.m))
	for _, rec := range rs.m {
		recs = append(recs, recordCopy(rec))
	}
	return recs, nil
}

// Create creates a record in the memory storage.
func (rs recordStorage) Create(rec *core.Record) (*core.Record, error) {
	rs.m[rec.ID] = *rec
	return rec, nil
}

// Update updates a record in the memory storage.
func (rs recordStorage) Update(rec *core.Record) (*core.Record, error) {
	if _, ok := rs.m[rec.ID]; !ok {
		return nil, core.ErrRecordNotFound
	}
	rs.m[rec.ID] = *rec
	return rec, nil
}

// Delete delets a record from the memory storage.
func (rs recordStorage) Delete(id core.RecordID) error {
	delete(rs.m, id)
	return nil
}

func recordCopy(rec core.Record) *core.Record {
	return &rec
}
