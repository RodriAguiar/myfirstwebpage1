async function carregarOpcoes() {
    try {
      const response = await fetch('https://api.ipma.pt/open-data/distrits-islands.json');
      const data = await response.json();
      const dropdown = document.getElementById('minhadropdown');
  
      dropdown.innerHTML = '<option value="">-- Escolha uma opção --</option>';
  
      data.data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.globalIdLocal;
        option.text = item.local;
        dropdown.add(option);
      });
    } catch (error) {
      console.error('Erro ao carregar opções:', error);
    }
  }
  
  async function buscarprevisao(idlocal) {
    try {
      // 1. Buscar previsão
      const urlPrevisao = `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${idlocal}.json`;
      const responsePrevisao = await fetch(urlPrevisao);
      const dataPrevisao = await responsePrevisao.json();
      const previsoes = dataPrevisao.data;
  
      // 2. Buscar tipo de tempo
      const urlTipos = 'https://api.ipma.pt/open-data/weather-type-classe.json';
      const responseTipos = await fetch(urlTipos);
      const dataTipos = await responseTipos.json();
  
      // 3. Buscar nome do distrito
      const urlLocais = 'https://api.ipma.pt/open-data/distrits-islands.json';
      const responseLocais = await fetch(urlLocais);
      const dataLocais = await responseLocais.json();
      const localEncontrado = dataLocais.data.find(loc => loc.globalIdLocal == idlocal);
  
      // 4. Mostrar hoje no MAIN
      const hoje = previsoes[0];
      const tipoHoje = dataTipos.data.find(tipo => tipo.idWeatherType === hoje.idWeatherType);
  
      document.getElementById('temp').textContent = `Temperatura máxima: ${hoje.tMax} °C`;
      document.getElementById('defenicao').textContent = tipoHoje
        ? `Descrição: ${tipoHoje.descWeatherTypePT}`
        : 'Descrição: Não disponível';
      document.getElementById('local').textContent = localEncontrado
        ? `Distrito: ${localEncontrado.local}`
        : 'Distrito não encontrado';
  
      // 5. Mostrar próximos 3 dias em mete1, mete2, mete3
      for (let i = 1; i <= 3; i++) {
        const previsao = previsoes[i];
        const dataFormatada = new Date(previsao.forecastDate).toLocaleDateString('pt-PT', {
          weekday: 'short',
          day: '2-digit',
          month: '2-digit'
        });
  
        document.getElementById(`diamete${i}`).textContent = dataFormatada;
        document.getElementById(`temp${i}`).textContent = `Máx: ${previsao.tMax}°C`;
      }
  
    } catch (error) {
      console.error('Erro em buscar previsão:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', carregarOpcoes);
  
  document.getElementById('minhadropdown').addEventListener('change', (e) => {
    const idLocal = e.target.value;
    if (idLocal) {
      buscarprevisao(idLocal);
    }
  });
  