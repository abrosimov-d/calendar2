export default function Settings(settings) {
	let result = {
		'smena': 0,
		'odd': 0,
		'hide': 0
	};

	if (settings === null) {
		result.smena = parseInt(localStorage.getItem('smena'));
		result.odd = parseInt(localStorage.getItem('odd'));
	} else {
		localStorage.setItem('smena', settings.smena);
		localStorage.setItem('odd', settings.odd);
	}

	return result;
}