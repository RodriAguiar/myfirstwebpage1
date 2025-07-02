const regionSelect = document.getElementById("region-select");
const searchBtn = document.getElementById("search-btn");

const tempEl = document.getElementById("temp");
const descEl = document.getElementById("desc");
const locationEl = document.getElementById("location");
const weatherIconEl = document.getElementById("weather-icon");

const forecastDays = [
  document.getElementById("day1"),
  document.getElementById("day2"),
  document.getElementById("day3"),
];

// Função para carregar as regiões da API
async function loadRegions() {
  try {
    const res = await fetch("https://api.ipma.pt/open-data/distrits-islands.json");
    const data = await res.json();

    data.data.forEach((region) => {
      const option = document.createElement("option");
      option.value = region.globalIdLocal;
      option.textContent = region.local;
      regionSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Erro ao carregar regiões:", error);
  }
}

// Mapeamento do código de tempo para emoji (baseado no IPMA)
function weatherCodeToEmoji(code) {
  if (code >= 1 && code <= 5) return "☀️"; // Sol
  if (code >= 6 && code <= 9) return "⛅"; // Parcialmente nublado
  if (code >= 10 && code <= 15) return "☁️"; // Nublado
  if (code >= 16 && code <= 17) return "🌧️"; // Chuva
  if (code >= 18 && code <= 21) return "⛈️"; // Trovoada
  if (code >= 22 && code <= 26) return "❄️"; // Neve
  return "❓";
}

// Função para obter a previsão meteorológica da região selecionada
async function getWeather(globalIdLocal) {
  try {
    const res = await fetch(
      `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`
    );
    const data = await res.json();

    // Atualizar a previsão principal (dia 0)
    const today = data.data[0];
    tempEl.textContent = `${today.tMax}°`;
    descEl.textContent = today.predWindDir || "Ensolarado";
    locationEl.textContent = regionSelect.options[regionSelect.selectedIndex].text;
    weatherIconEl.textContent = weatherCodeToEmoji(today.idWeatherType);

    // Atualizar os próximos 3 dias
    for (let i = 0; i < 3; i++) {
      if (data.data[i]) {
        const day = data.data[i];
        const dayName = getDayNameFromDate(day.forecastDate);
        forecastDays[i].querySelector(".day-name").textContent = dayName;
        forecastDays[i].querySelector(".icon").textContent = weatherCodeToEmoji(day.idWeatherType);
        forecastDays[i].querySelector(".temp").textContent = `${day.tMax}°`;
      }
    }
  } catch (error) {
    alert("Erro ao obter dados meteorológicos");
    console.error(error);
  }
}

// Função para obter o nome do dia da semana a partir da data
function getDayNameFromDate(dateStr) {
  const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const date = new Date(dateStr);
  return days[date.getDay()];
}

searchBtn.addEventListener("click", () => {
  const selectedRegion = regionSelect.value;
  if (selectedRegion) {
    getWeather(selectedRegion);
  } else {
    alert("Por favor, escolha uma região.");
  }
});

// Carregar regiões ao iniciar
loadRegions();
