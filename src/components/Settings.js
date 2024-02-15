export default function Settings(settings) {
	let result = {
		'smena': 0,
		'odd': 0,
		'currentWeek': 1
	};

	if (settings === null) {
		result.smena = parseInt(localStorage.getItem('smena'));
		result.odd = parseInt(localStorage.getItem('odd'));
		result.currentWeek = parseInt(localStorage.getItem('currentWeek'));
	} else {
		localStorage.setItem('smena', settings.smena);
		localStorage.setItem('odd', settings.odd);
		localStorage.setItem('currentWeek', settings.currentWeek);
	}

	return result;
}