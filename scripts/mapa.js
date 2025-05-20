function calcularDistancia(lat1, lon1, lat2, lon2) {
  const R = 6371e3;
  const rad = Math.PI / 180;
  const φ1 = lat1 * rad, φ2 = lat2 * rad;
  const Δφ = (lat2 - lat1) * rad;
  const Δλ = (lon2 - lon1) * rad;

  const a = Math.sin(Δφ / 2) ** 2 +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}



document.addEventListener('DOMContentLoaded', () => {
  if (!navigator.geolocation) {
    alert('Geolocalização não suportada pelo navegador.');
    return;
  }

  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const map = L.map('map').setView([lat, lon], 14);
    console.log("Mapa inicializado");

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const icons = {
      hospital: L.icon({ iconUrl: '/imgs/hospital.png', iconSize: [32, 32], iconAnchor: [16, 32], popupAnchor: [0, -32] }),
      clinic: L.icon({ iconUrl: '/imgs/clinic.png', iconSize: [28, 28], iconAnchor: [14, 28], popupAnchor: [0, -28] }),
      doctors: L.icon({ iconUrl: '/imgs/doctor.png', iconSize: [28, 28], iconAnchor: [14, 28], popupAnchor: [0, -28] }),
      pharmacy: L.icon({ iconUrl: '/imgs/pharmacy.png', iconSize: [28, 28], iconAnchor: [14, 28], popupAnchor: [0, -28] }),
      default: L.icon({ iconUrl: '/imgs/health.png', iconSize: [26, 26], iconAnchor: [13, 26], popupAnchor: [0, -26] })
    };

    const userMarker = L.marker([lat, lon])
      .addTo(map)
      .bindPopup('Você está aqui')
      .openPopup();

    let currentMarkers = [];
    let activeRoutes = [];

    function limparRotas() {
      activeRoutes.forEach(route => map.removeControl(route));
      activeRoutes = [];
    }

    async function buscarLocais(tipo) {
      currentMarkers.forEach(marker => map.removeLayer(marker));
      currentMarkers = [];
      document.getElementById('lista').innerHTML = '';

      limparRotas();

      const filtroTag = tipo === 'all'
        ? '["amenity"~"hospital|clinic|doctors|pharmacy"]'
        : `["amenity"="${tipo}"]`;

      const url = `https://overpass.kumi.systems/api/interpreter?data=[out:json];node${filtroTag}(around:5000,${lat},${lon});out;`;


      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.elements.length) {
          alert('Nenhum local encontrado.');
          return;
        }

        data.elements.forEach((local) => {
          const tipoLocal = local.tags.amenity;
          const name = local.tags.name || 'Estabelecimento de saúde';
          const icon = icons[tipoLocal] || icons.default;

         // ...dentro do forEach dos locais...
const superlotacao = gerarSuperlotacao();

const marker = L.marker([local.lat, local.lon], { icon })
  .addTo(map)
  .bindPopup(`<b>${name}</b><br>
    <span style="background:${superlotacao.cor};color:#fff;padding:2px 8px;border-radius:8px;">
      ${superlotacao.texto}
    </span><br>
    Clique no marcador para traçar rota.`);
marker.on('click', async () => {
  limparRotas();

  const rotaSelecionada = L.Routing.control({
    waypoints: [L.latLng(lat, lon), L.latLng(local.lat, local.lon)],
    routeWhileDragging: false,
    show: false,
    addWaypoints: false,
    lineOptions: {
      styles: [{ color: '#005eff', weight: 5 }]
    },
    createMarker: () => null
  }).addTo(map);

  activeRoutes.push(rotaSelecionada);

  const origem = { lat, lng: lon };
  const destino = { lat: local.lat, lng: local.lon };
  const distancia = Math.round(calcularDistancia(lat, lon, local.lat, local.lon));

  try {
    const tempoCarro = await getCarTravelTimeORS(origem, destino);
   marker.bindPopup(
  `<b>${name}</b><br>
  <span class="status-text" style="background:${superlotacao.cor};padding:2px 8px;border-radius:8px;">
    ${superlotacao.texto}
  </span><br>
  Distância: <b>${distancia} m</b><br>
  Tempo de carro: <b>${tempoCarro}</b><br>
  <span style="color:gray;font-size:0.9em;">(Ônibus indisponível no ORS)</span>`
);
    marker.openPopup(); // <-- Adicione esta linha aqui!
  } catch (e) {
    marker.bindPopup(
      `<b>${name}</b><br>
      <span style="background:${superlotacao.cor};color:#fff;padding:2px 8px;border-radius:8px;">
        ${superlotacao.texto}
      </span><br>
      Distância: <b>${distancia} m</b><br>
      Não foi possível calcular o tempo de viagem.`
    );
    marker.openPopup(); // <-- E aqui também!
  }
});

         const li = document.createElement('li');
li.innerHTML = `
  <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${superlotacao.cor};margin-right:8px;vertical-align:middle;"></span>
  <b>${name}</b>
  <span class="status-text" style="font-size:0.9em;margin-left:6px;background:${superlotacao.cor};padding:2px 8px;border-radius:8px;">
    ${superlotacao.texto}
  </span>
`;
li.onclick = () => {
  map.setView([local.lat, local.lon], 16);
  marker.openPopup();
};
document.getElementById('lista').appendChild(li);
          currentMarkers.push(marker);
        });

      } catch (error) {
        console.error('Erro ao buscar locais:', error);
        alert('Erro ao carregar dados.');
      }
    }

    buscarLocais('all');

    document.getElementById('filtro').addEventListener('change', (e) => {
      buscarLocais(e.target.value);
    });

    document.getElementById('rota-mais-proxima').addEventListener('click', () => {
      if (!currentMarkers.length) {
        alert('Nenhum local carregado ainda.');
        return;
      }
      document.getElementById('limpar-rotas').addEventListener('click', limparRotas);

      let maisProximo = null;
      let menorDistancia = Infinity;

      currentMarkers.forEach(marker => {
        const { lat: latM, lng: lonM } = marker.getLatLng();
        const distancia = calcularDistancia(lat, lon, latM, lonM);
        if (distancia < menorDistancia) {
          menorDistancia = distancia;
          maisProximo = marker;
        }
      });
      if (!maisProximo) {
        alert('Não foi possível encontrar o hospital mais próximo.');
        return;
      }

      limparRotas(); // Limpa rotas anteriores

      const destino = maisProximo.getLatLng();

      const rotaMaisProxima = L.Routing.control({
        waypoints: [L.latLng(lat, lon), destino],
        routeWhileDragging: false,
        show: false,
        addWaypoints: false,
        lineOptions: {
          styles: [{ color: 'red', weight: 5 }]
        },
        createMarker: () => null // 🔒 Remove os marcadores móveis da rota
      }).addTo(map);

      activeRoutes.push(rotaMaisProxima);
      map.setView(destino, 15);
      maisProximo.openPopup();
    });

  }, (err) => {
    console.error('Erro ao obter localização:', err);
    alert('Erro ao acessar geolocalização.');
  });
});
// ...existing code...

async function getCarTravelTimeORS(origem, destino) {
  const apiKey = '5b3ce3597851110001cf6248ab3957fdac434b3797ab6c34bd67a22b'; // coloque sua chave do OpenRouteService aqui
  const url = 'https://api.openrouteservice.org/v2/directions/driving-car/geojson';

  const body = {
    coordinates: [
      [origem.lng, origem.lat],
      [destino.lng, destino.lat]
    ]
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar rota no OpenRouteService');
  }

  const data = await response.json();
  const durationSec = data.features[0]?.properties?.summary?.duration;
  const durationMin = durationSec ? Math.round(durationSec / 60) : null;
  return durationMin ? `${durationMin} min` : 'N/A';
}
async function buscarHospitaisOverpass(center, raioMetros = 5000) {
  // center: {lat, lon}
  const query = `
    [out:json][timeout:25];
    (
      node["amenity"="hospital"](around:${raioMetros},${center.lat},${center.lon});
      way["amenity"="hospital"](around:${raioMetros},${center.lat},${center.lon});
      relation["amenity"="hospital"](around:${raioMetros},${center.lat},${center.lon});
    );
    out center;
  `;
  const url = "https://overpass-api.de/api/interpreter";
  const response = await fetch(url, {
    method: "POST",
    body: query,
    headers: { "Content-Type": "text/plain" }
  });
  if (!response.ok) throw new Error("Erro ao buscar hospitais no Overpass API");
  const data = await response.json();
  // Retorna um array de objetos {lat, lon, name}
  return data.elements.map(el => ({
    lat: el.lat || el.center?.lat,
    lon: el.lon || el.center?.lon,
    name: el.tags?.name || "Hospital sem nome"
  }));
}
// Exemplo: buscar hospitais em um raio de 5km do centro do mapa
const center = { lat: -23.55052, lon: -46.633308 }; // São Paulo, por exemplo
buscarHospitaisOverpass(center, 5000).then(hospitais => {
  hospitais.forEach(hospital => {
    // Adicione o marcador no mapa
    L.marker([hospital.lat, hospital.lon])
      .addTo(map)
      .bindPopup(hospital.name);
  });
});
// Exemplo de uso:
// getTravelTimes({lat: -23.55, lng: -46.63}, {lat: -23.56, lng: -46.65}).then(console.log);
function gerarSuperlotacao() {
  const niveis = [
    {nivel: "baixa", cor: "#28a745", texto: "Atendimento bom"},
    {nivel: "media", cor: "#ffc107", texto: "Atendimento moderado"},
    {nivel: "alta", cor: "#dc3545", texto: "Superlotado"}
  ];
  return niveis[Math.floor(Math.random() * niveis.length)];
}

let lastScroll = 0;
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 80) {
    // Descendo: esconde o header
    header.classList.add('header-hide');
  } else {
    // Subindo: mostra o header
    header.classList.remove('header-hide');
  }
  lastScroll = currentScroll;
});
document.addEventListener('DOMContentLoaded', () => {
  const inputPesquisa = document.getElementById('pesquisa-local');
  const lista = document.getElementById('lista');

  if (inputPesquisa && lista) {
    inputPesquisa.addEventListener('input', () => {
      const termo = inputPesquisa.value.toLowerCase();
      const itens = lista.querySelectorAll('li');

      itens.forEach(item => {
        const texto = item.textContent.toLowerCase();
        item.style.display = texto.includes(termo) ? 'block' : 'none';
      });
    });
  }
});


