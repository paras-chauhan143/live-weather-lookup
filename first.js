function updateData(data) {
  const out = document.getElementById("output");
  const weather = data.current;
  const location = data.location;
  out.innerHTML = `
    <h2>📍 ${location.name}, ${location.region}, ${location.country}</h2>
    <p><strong>🌡️ Temperature:</strong> ${weather.temp_c}°C</p>
    <p><strong>🧊 Feels Like:</strong> ${weather.feelslike_c}°C</p>
    <p><strong>🌥️ Condition:</strong> ${weather.condition.text}</p>
    <p><strong>💧 Humidity:</strong> ${weather.humidity}%</p>
    <p><strong>🌬️ Wind:</strong> ${weather.wind_kph} km/h (${weather.wind_dir})</p>
    <p><strong>📈 Pressure:</strong> ${weather.pressure_mb} mb</p>
    <p><strong>🕒 Last Updated:</strong> ${weather.last_updated}</p>
  `;
  out.style.background = "rgba(255, 255, 255, 0.08)";
}

document.querySelector('button').addEventListener('click', () => {
  const place = document.getElementById("city-input").value;

  const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=15d5c2c1bc8d4f49a51113011252806&q=${place}&aqi=yes`);

  prom
    .then(response => response.json())
    .then(data => updateData(data))
    .catch(err => {
      const out = document.getElementById("output");
      out.innerHTML = "City not found or API error.";
      out.style.background = "rgba(255, 0, 0, 0.2)";
    });
});
