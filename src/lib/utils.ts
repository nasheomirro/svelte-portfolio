export function formatDate(date: Date): string {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	const month = monthNames[date.getMonth()];
	const day = date.getDate();
	const year = date.getFullYear();
	return `${month} ${day}, ${year}`;
}
