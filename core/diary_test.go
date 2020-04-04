package core_test

import (
	"testing"
	"time"

	"github.com/ohgodwynona/diary/core"
	"github.com/ohgodwynona/diary/core/mock"
	"github.com/stretchr/testify/require"
)

func NewDiary(rs core.RecordStorage) *core.Diary {
	return &core.Diary{RecordStorage: rs}
}

func TestDiary(t *testing.T) {
	t.Run("Save record", func(t *testing.T) {
		t.Run("Create record", func(t *testing.T) {
			s := &mock.RecordStorageMock{
				GetFunc: func(id core.RecordID) (*core.Record, error) {
					return nil, core.ErrRecordNotFound
				},
				CreateFunc: func(rec *core.Record) (*core.Record, error) {
					return rec, nil
				},
			}
			d := NewDiary(s)
			rec, err := d.SaveRecord("text")
			require.Nil(t, err)
			require.Equal(t, "text", rec.Text)
			require.Equal(t, core.Today(), rec.Date)
			require.Equal(t, core.RecordIDFromDate(core.Today()), rec.ID)
			require.Equal(t, 1, len(s.CreateCalls()))
		})
		t.Run("Update record", func(t *testing.T) {
			s := &mock.RecordStorageMock{
				GetFunc: func(id core.RecordID) (*core.Record, error) {
					rec := core.NewRecord("previous text", core.Today())
					return rec, nil
				},
				UpdateFunc: func(rec *core.Record) (*core.Record, error) {
					return rec, nil
				},
			}
			d := NewDiary(s)
			rec, err := d.SaveRecord("new text")
			require.Nil(t, err)
			require.Equal(t, "new text", rec.Text)
			require.Equal(t, core.Today(), rec.Date)
			require.Equal(t, core.RecordIDFromDate(core.Today()), rec.ID)
			require.Equal(t, 1, len(s.UpdateCalls()))
		})
	})
	t.Run("Delete record", func(t *testing.T) {
		s := &mock.RecordStorageMock{
			DeleteFunc: func(id core.RecordID) error {
				return nil
			},
		}
		d := NewDiary(s)
		require.Nil(t, d.DeleteRecord("existent"))
		require.Nil(t, d.DeleteRecord("non-existent"))
		require.Equal(t, 2, len(s.DeleteCalls()))
	})
	t.Run("Get record", func(t *testing.T) {
		r := core.NewRecord("text", core.Today())
		s := &mock.RecordStorageMock{
			GetFunc: func(id core.RecordID) (*core.Record, error) {
				if id == r.ID {
					return r, nil
				}
				return nil, core.ErrRecordNotFound
			},
		}
		d := NewDiary(s)

		rec, err := d.GetRecord(r.ID)
		require.Equal(t, r.ID, rec.ID)
		require.Equal(t, r.Text, rec.Text)
		require.Equal(t, r.Date, rec.Date)
		require.Nil(t, err)

		rec, err = d.GetRecord("non-existent")
		require.Nil(t, rec)
		require.Equal(t, core.ErrRecordNotFound, err)

		require.Equal(t, 2, len(s.GetCalls()))
	})
	t.Run("Get records", func(t *testing.T) {
		r1 := core.NewRecord("yesterday's", core.Today().Add(-time.Hour*24))
		r2 := core.NewRecord("today's", core.Today())
		s := &mock.RecordStorageMock{
			GetAllFunc: func() ([]*core.Record, error) {
				return []*core.Record{r1, r2}, nil
			},
		}
		d := NewDiary(s)
		recs, err := d.GetRecords()
		require.Equal(t, []*core.Record{r2, r1}, recs)
		require.Nil(t, err)
	})
}
