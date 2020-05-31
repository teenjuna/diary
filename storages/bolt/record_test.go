package bolt_test

import (
	"testing"
	"time"

	"github.com/ohgodwynona/diary/core"
	"github.com/stretchr/testify/require"
)

func TestRecordStorage(t *testing.T) {
	storage := New()
	defer storage.Destroy()
	rs := storage.RecordStorage

	r1 := core.NewRecord("record 1", core.Today().Add(-time.Hour*24))
	r2 := core.NewRecord("record 2", core.Today())

	// Create records.
	r1_, err := rs.Create(r1)
	require.Equal(t, r1, r1_)
	require.Nil(t, err)

	r2_, err := rs.Create(r2)
	require.Equal(t, r2, r2_)
	require.Nil(t, err)

	// Ensure the records are saved.
	r1_, err = rs.Get(r1.ID)
	require.Equal(t, r1, r1_)
	require.Nil(t, err)

	r2_, err = rs.Get(r2.ID)
	require.Equal(t, r2, r2_)
	require.Nil(t, err)

	// Update one record.
	r1.Text = "record 1 (updated)"
	r1_, err = rs.Update(r1)
	require.Equal(t, r1, r1_)
	require.Nil(t, err)

	// Try to update non-existent record.
	ner := core.NewRecord("text", core.Today().Add(-24*2*time.Hour))
	ner_, err := rs.Update(ner)
	require.Nil(t, ner_)
	require.Equal(t, core.ErrRecordNotFound, err)

	// Ensure the record is updated.
	r1_, err = rs.Get(r1.ID)
	require.Equal(t, r1, r1_)
	require.Nil(t, err)

	// Get all records.
	recs, err := rs.GetAll()
	require.Equal(t, []*core.Record{r1, r2}, recs)
	require.Nil(t, err)

	// Delete second record.
	err = rs.Delete(r2.ID)
	require.Nil(t, err)

	// Ensure the record is deleted.
	r2_, err = rs.Get(r2.ID)
	require.Nil(t, r2_)
	require.Equal(t, core.ErrRecordNotFound, err)
}
