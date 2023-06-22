// ini ubah Celsius ke Fahrenheit
function celsiusToFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

// ubah Fahrenheit ke Celsius
function fahrenheitToCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

// untuk tampilkan hasil konversi dan penjelasan
function displayResult(result, unit) {
	const resultElement = document.getElementById('result');
	const explanationElement = document.getElementById('explanation');

	resultElement.textContent = result.toFixed(2) + ' ' + unit;

	if (unit === 'celsius') {
		explanationElement.textContent = 'Suhu dalam Celsius dikonversi dari Fahrenheit.';
	} else {
		explanationElement.textContent = 'Suhu dalam Fahrenheit dikonversi dari Celsius.';
	}

	const resultContainer = document.getElementById('result-container');
	resultContainer.style.display = 'block';
}

// bagian tangani pengiriman formulir (submit)
function handleFormSubmit(event) {
	event.preventDefault();

	const temperatureInput = document.getElementById('temperature');
	const unitSelect = document.getElementById('unit');

	// Mendapatkan nilai dari formulir
	const temperature = parseFloat(temperatureInput.value);
	const unit = unitSelect.value;

	// Meriksa apakah suhu merupakan angka yang valid
	if (isNaN(temperature)) {
		alert('Input suhu tidak valid. Harap masukkan angka yang valid.');
		return;
	}

	// Melakukan konversi suhu berdasarkan unit yang dipilih
	let convertedTemperature;
	if (unit === 'celsius') {
		convertedTemperature = fahrenheitToCelsius(temperature);
	} else {
		convertedTemperature = celsiusToFahrenheit(temperature);
	}

	// tampilkan hasil konversi
	displayResult(convertedTemperature, unit);
}

// Menambahkan pendengar peristiwa untuk pengiriman formulir (submit)
const form = document.getElementById('temperature-form');
form.addEventListener('submit', handleFormSubmit);
