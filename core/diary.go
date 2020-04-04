package core

import "sort"

// Diary represents the diary.
type Diary struct {
	RecordStorage RecordStorage
}

// SaveRecord saves a record.
func (d *Diary) SaveRecord(text string) (*Record, error) {
	var err error
	var rec *Record

	rec, err = d.RecordStorage.Get(RecordIDFromDate(Today()))
	if err == nil {
		rec.Text = text
		return d.RecordStorage.Update(rec)
	}

	rec = NewRecord(text, Today())
	return d.RecordStorage.Create(rec)
}

// DeleteRecord deletes a record.
func (d *Diary) DeleteRecord(id RecordID) error {
	return d.RecordStorage.Delete(id)
}

// GetRecord returns a record by id.
func (d *Diary) GetRecord(id RecordID) (*Record, error) {
	return d.RecordStorage.Get(id)
}

// GetRecords returns all records.
func (d *Diary) GetRecords() ([]*Record, error) {
	recs, err := d.RecordStorage.GetAll()
	if err != nil {
		return nil, err
	}

	// Sort records by date (most recent first).
	sort.Slice(recs, func(i, j int) bool {
		return recs[i].Date.After(recs[j].Date)
	})

	return recs, nil
}
