// humanizeDate returns date in the human readable format.
export const humanizeDate = (date: Date) => {
	const year = date.getFullYear()
	const month = date.toLocaleString("en", { month: "long" })
	const monthDay = date.getDate()
	return `${month} ${monthDay}, ${year}`
}

// dateToRecordID returns date in the format of record ID.
export const dateToRecordID = (date: Date) => {
	const year = date.getFullYear() - 2000
	const month = String(date.getMonth() + 1).padStart(2, "0")
	const monthDay = String(date.getDate()).padStart(2, "0")
	return `${monthDay}.${month}.${year}`
}
