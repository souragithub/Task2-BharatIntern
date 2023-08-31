function convertTemperature() {
    const celsiusInput = document.getElementById("celsius");
    const resultFahrenheit = document.getElementById("resultFahrenheit");
    const resultKelvin = document.getElementById("resultKelvin");
  
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
  
    resultFahrenheit.textContent = fahrenheit.toFixed(2);
    resultKelvin.textContent = kelvin.toFixed(2);
  }  