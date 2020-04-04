package core

import "time"

// Today returns today's date.
func Today() time.Time {
	return time.Now().Truncate(time.Hour * 24)
}
