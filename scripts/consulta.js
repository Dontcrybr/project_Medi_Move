// Simulação de médicos e hospitais (você pode integrar com backend futuramente)
const MEDICOS = [
  {
    nome: "Dra. Mariana Torres",
    especialidade: "clinico",
    especialidadeLabel: "Clínico Geral",
    foto: "imgs/mariana.jpg",
    horarios: ["09:00", "10:30", "14:00", "16:00"],
    descricao: "Especialista em atendimento domiciliar na Zona Sul de São Paulo.",
    avaliacao: "⭐ 4.9 de 5 • 200 avaliações",
    experiencia: "10 anos",
    local: "Zona Sul"
  },
  {
    nome: "Dr. João Henrique",
    especialidade: "ortopedista",
    especialidadeLabel: "Ortopedista",
    foto: "imgs/enfermeiro.jpeg",
    horarios: ["08:00", "11:00", "15:00"],
    descricao: "Referência em pronto atendimento ortopédico na Zona Leste.",
    avaliacao: "⭐ 4.8 de 5 • 180 avaliações",
    experiencia: "12 anos",
    local: "Zona Leste"
  },
  {
    nome: "Maria Lúcia",
    especialidade: "enfermeira",
    especialidadeLabel: "Enfermeira",
    foto: "imgs/maria.jpg",
    horarios: ["09:30", "13:00", "17:00"],
    descricao: "Cuidados intensivos e triagem de urgência na Zona Oeste.",
    avaliacao: "⭐ 4.7 de 5 • 150 avaliações",
    experiencia: "8 anos",
    local: "Zona Oeste"
  },
  {
    nome: "Dra. Ana Beatriz",
    especialidade: "pediatra",
    especialidadeLabel: "Pediatra",
    foto: "imgs/ana.jpg",
    horarios: ["10:00", "13:30", "16:30"],
    descricao: "Atendimento pediátrico domiciliar na região central de São Paulo.",
    avaliacao: "⭐ 4.9 de 5 • 220 avaliações",
    experiencia: "9 anos",
    local: "Centro"
  },
  {
    nome: "Dra. Camila Souza",
    especialidade: "ginecologista",
    especialidadeLabel: "Ginecologista",
    foto: "imgs/camila.jpg",
    horarios: ["09:00", "11:30", "15:30"],
    descricao: "Especializada em saúde da mulher com atendimentos na Zona Norte.",
    avaliacao: "⭐ 4.8 de 5 • 190 avaliações",
    experiencia: "11 anos",
    local: "Zona Norte"
  },
  {
    nome: "Dra. Juliana Martins",
    especialidade: "psicologa",
    especialidadeLabel: "Psicóloga",
    foto: "imgs/juliana.jpg",
    horarios: ["08:30", "12:00", "18:00"],
    descricao: "Atendimento psicológico online e presencial em Pinheiros.",
    avaliacao: "⭐ 4.9 de 5 • 250 avaliações",
    experiencia: "7 anos",
    local: "Pinheiros"
  },
  {
    nome: "Dr. Ricardo Almeida",
    especialidade: "cardiologista",
    especialidadeLabel: "Cardiologista",
    foto: "imgs/cardiologista.jpg",
    horarios: ["09:00", "14:00", "17:00"],
    descricao: "Referência em consultas preventivas no Tatuapé.",
    avaliacao: "⭐ 4.8 de 5 • 210 avaliações",
    experiencia: "14 anos",
    local: "Tatuapé"
  },
  {
    nome: "Letícia Ramos",
    especialidade: "fisioterapeuta",
    especialidadeLabel: "Fisioterapeuta",
    foto: "imgs/leticia.jpg",
    horarios: ["08:00", "13:00", "16:00"],
    descricao: "Atendimento em domicílio para reabilitação motora na Zona Norte.",
    avaliacao: "⭐ 4.7 de 5 • 165 avaliações",
    experiencia: "6 anos",
    local: "Zona Norte"
  },
  {
    nome: "Fernanda Oliveira",
    especialidade: "nutricionista",
    especialidadeLabel: "Nutricionista",
    foto: "imgs/fernanda.jpg",
    horarios: ["10:00", "14:00", "19:00"],
    descricao: "Acompanhamento nutricional personalizado em Moema.",
    avaliacao: "⭐ 4.9 de 5 • 185 avaliações",
    experiencia: "8 anos",
    local: "Moema"
  },
  {
    nome: "Dr. Felipe Andrade",
    especialidade: "neurologista",
    especialidadeLabel: "Neurologista",
    foto: "imgs/Neurologista.png",
    horarios: ["09:30", "13:30", "17:30"],
    descricao: "Atendimento especializado em distúrbios neurológicos na Vila Mariana.",
    avaliacao: "⭐ 4.8 de 5 • 172 avaliações",
    experiencia: "13 anos",
    local: "Vila Mariana"
  },
  {
    nome: "Dra. Camila Rezende",
    especialidade: "oftalmologista",
    especialidadeLabel: "Oftalmologista",
    foto: "imgs/fernanda.jpg",
    horarios: ["09:00", "12:00", "15:00"],
    descricao: "Consultas acessíveis próximo ao metrô Santa Cruz.",
    avaliacao: "⭐ 4.7 de 5 • 198 avaliações",
    experiencia: "11 anos",
    local: "Santa Cruz"
  },
  {
    nome: "Dra. Paula Menezes",
    especialidade: "ginecologista",
    especialidadeLabel: "Ginecologista e Obstetra",
    foto: "imgs/Ginecologista.jpg",
    horarios: ["08:00", "11:00", "16:00"],
    descricao: "Atendimento humanizado em Santo Amaro.",
    avaliacao: "⭐ 4.9 de 5 • 243 avaliações",
    experiencia: "12 anos",
    local: "Santo Amaro"
  },
  {
    nome: "Dr. Vinícius Prado",
    especialidade: "dermatologista",
    especialidadeLabel: "Dermatologista",
    foto: "imgs/Dermatologista.jpg",
    horarios: ["09:00", "13:00", "18:00"],
    descricao: "Consultas em áreas centrais como Bela Vista e Liberdade.",
    avaliacao: "⭐ 4.6 de 5 • 159 avaliações",
    experiencia: "9 anos",
    local: "Bela Vista/Liberdade"
  },
  {
    nome: "Dra. Renata Silva",
    especialidade: "pediatra",
    especialidadeLabel: "Pediatra",
    foto: "imgs/camila.jpg",
    horarios: ["10:00", "14:00", "17:00"],
    descricao: "Atendimento infantil domiciliar na Zona Leste de São Paulo.",
    avaliacao: "⭐ 4.9 de 5 • 188 avaliações",
    experiencia: "10 anos",
    local: "Zona Leste"
  },
  {
    nome: "Dr. Marcelo Tavares",
    especialidade: "geriatra",
    especialidadeLabel: "Geriatra",
    foto: "imgs/enfermeiro.jpeg",
    horarios: ["08:00", "12:00", "15:00"],
    descricao: "Cuida de idosos com foco em mobilidade reduzida na região do Ipiranga.",
    avaliacao: "⭐ 5.0 de 5 • 122 avaliações",
    experiencia: "15 anos",
    local: "Ipiranga"
  },
  {
    nome: "Dr. Lucas Bernardes",
    especialidade: "psicologo",
    especialidadeLabel: "Psicólogo Clínico",
    foto: "imgs/cardiologista.jpg",
    horarios: ["09:00", "13:00", "18:00"],
    descricao: "Atua na Av. Paulista com fácil acesso via metrô Consolação.",
    avaliacao: "⭐ 4.8 de 5 • 174 avaliações",
    experiencia: "8 anos",
    local: "Paulista/Consolação"
  },
  {
    nome: "Dra. Aline Costa",
    especialidade: "fonoaudiologa",
    especialidadeLabel: "Fonoaudióloga",
    foto: "imgs/leticia.jpg",
    horarios: ["08:30", "12:30", "17:30"],
    descricao: "Especializada em reabilitação auditiva na Zona Norte.",
    avaliacao: "⭐ 4.9 de 5 • 143 avaliações",
    experiencia: "10 anos",
    local: "Santana"
  },
  {
    nome: "Dra. Juliana Martins",
    especialidade: "nutricionista",
    especialidadeLabel: "Nutricionista",
    foto: "imgs/fernanda.jpg",
    horarios: ["09:00", "14:00", "19:00"],
    descricao: "Atende na Vila Mariana com opções de consulta online e presencial.",
    avaliacao: "⭐ 4.7 de 5 • 165 avaliações",
    experiencia: "7 anos",
    local: "Vila Mariana"
  },
  {
    nome: "Dra. Bianca Lopes",
    especialidade: "terapeuta_ocupacional",
    especialidadeLabel: "Terapeuta Ocupacional",
    foto: "imgs/ana.jpg",
    horarios: ["10:00", "13:00", "16:00"],
    descricao: "Especializada em acessibilidade funcional na Zona Oeste.",
    avaliacao: "⭐ 4.8 de 5 • 122 avaliações",
    experiencia: "9 anos",
    local: "Lapa"
  },
  {
    nome: "Dr. Henrique Vasconcellos",
    especialidade: "psiquiatra",
    especialidadeLabel: "Psiquiatra",
    foto: "imgs/Dermatologista.jpg",
    horarios: ["09:00", "12:00", "17:00"],
    descricao: "Especialista em saúde mental com clínica próxima ao metrô Tatuapé.",
    avaliacao: "⭐ 4.6 de 5 • 191 avaliações",
    experiencia: "13 anos",
    local: "Tatuapé"
  },
  {
    nome: "Dra. Camila Ferreira",
    especialidade: "ginecologista",
    especialidadeLabel: "Ginecologista",
    foto: "imgs/ginecologista.jpg",
    horarios: ["08:00", "11:00", "15:00"],
    descricao: "Atendimento acessível e humanizado na Zona Sul de São Paulo.",
    avaliacao: "⭐ 4.9 de 5 • 188 avaliações",
    experiencia: "11 anos",
    local: "Zona Sul"
  },
  {
    nome: "Dr. Fábio Meirelles",
    especialidade: "oftalmologista",
    especialidadeLabel: "Oftalmologista",
    foto: "imgs/Oftamologista.jpg",
    horarios: ["09:00", "13:00", "17:00"],
    descricao: "Referência em cuidados com a visão com fácil acesso na região central.",
    avaliacao: "⭐ 4.7 de 5 • 157 avaliações",
    experiencia: "14 anos",
    local: "República"
  },
  {
    nome: "Dra. Paula Albuquerque",
    especialidade: "dermatologista",
    especialidadeLabel: "Dermatologista",
    foto: "imgs/juliana.jpg",
    horarios: ["10:00", "14:00", "18:00"],
    descricao: "Atende na Mooca com foco em mobilidade e acessibilidade urbana.",
    avaliacao: "⭐ 4.8 de 5 • 169 avaliações",
    experiencia: "10 anos",
    local: "Mooca"
  },
  {
    nome: "Dr. Rafael Siqueira",
    especialidade: "endocrinologista",
    especialidadeLabel: "Endocrinologista",
    foto: "imgs/Dermatologista.jpg",
    horarios: ["09:00", "12:00", "16:00"],
    descricao: "Especializado em doenças metabólicas, com clínica acessível em Pinheiros.",
    avaliacao: "⭐ 4.9 de 5 • 178 avaliações",
    experiencia: "12 anos",
    local: "Pinheiros"
  },
  {
    nome: "Dra. Renata Oliveira",
    especialidade: "infectologista",
    especialidadeLabel: "Infectologista",
    foto: "imgs/maria.jpg",
    horarios: ["08:30", "13:30", "18:30"],
    descricao: "Referência em prevenção de doenças infecciosas com foco em mobilidade urbana.",
    avaliacao: "⭐ 4.8 de 5 • 144 avaliações",
    experiencia: "9 anos",
    local: "Barra Funda"
  },
  {
    nome: "Dr. Eduardo Nascimento",
    especialidade: "psiquiatra",
    especialidadeLabel: "Psiquiatra",
    foto: "imgs/Dermatologista.jpg",
    horarios: ["09:00", "12:00", "17:00"],
    descricao: "Oferece suporte emocional com fácil acesso na região da Lapa.",
    avaliacao: "⭐ 4.9 de 5 • 196 avaliações",
    experiencia: "13 anos",
    local: "Lapa"
  },
  {
    nome: "Dra. Lúcia Andrade",
    especialidade: "geriatra",
    especialidadeLabel: "Geriatra",
    foto: "imgs/mariana.jpg",
    horarios: ["08:00", "11:00", "16:00"],
    descricao: "Especializada em cuidados com idosos na Zona Leste de São Paulo.",
    avaliacao: "⭐ 5.0 de 5 • 212 avaliações",
    experiencia: "16 anos",
    local: "Tatuapé"
  },
  {
    nome: "Dr. Vinícius Prado",
    especialidade: "alergologista",
    especialidadeLabel: "Alergologista",
    foto: "imgs/cardiologista.jpg",
    horarios: ["09:00", "13:00", "18:00"],
    descricao: "Atua na região de Perdizes com foco em mobilidade e prevenção.",
    avaliacao: "⭐ 4.7 de 5 • 130 avaliações",
    experiencia: "8 anos",
    local: "Perdizes"
  },
  {
    nome: "Dra. Juliana Neves",
    especialidade: "nutricionista",
    especialidadeLabel: "Nutricionista",
    foto: "imgs/camila.jpg",
    horarios: ["10:00", "14:00", "19:00"],
    descricao: "Atendimento prático e acessível na região da Vila Mariana.",
    avaliacao: "⭐ 4.9 de 5 • 175 avaliações",
    experiencia: "10 anos",
    local: "Vila Mariana"
  },
  {
    nome: "Dr. Marcelo Torres",
    especialidade: "oncologista",
    especialidadeLabel: "Oncologista",
    foto: "imgs/Dermatologista.jpg",
    horarios: ["09:00", "12:00", "16:00"],
    descricao: "Tratamento oncológico com acesso facilitado na Zona Norte.",
    avaliacao: "⭐ 5.0 de 5 • 204 avaliações",
    experiencia: "18 anos",
    local: "Santana"
  }
];

const HOSPITAIS = [
  { nome: "Hospital Dom Alvarenga", lat: -23.6756, lon: -46.6163 },
  { nome: "Hospital Ipiranga", lat: -23.5957, lon: -46.6127 },
  { nome: "Hospital Bosque da Saúde", lat: -23.6175, lon: -46.6258 },
  { nome: "Hospital e Maternidade Vidas", lat: -23.6532, lon: -46.6221 },
  { nome: "Hospital São Luiz - Unidade Jabaquara", lat: -23.6463, lon: -46.6411 },
  { nome: "Hospital Santa Marina", lat: -23.6441, lon: -46.6233 },
  { nome: "Hospital Municipal de Diadema", lat: -23.6912, lon: -46.6185 },
  { nome: "Hospital Estadual de Diadema", lat: -23.6944, lon: -46.6216 },
  { nome: "Hospital Municipal de São Bernardo do Campo", lat: -23.7035, lon: -46.5646 },
  { nome: "Hospital e Maternidade Assunção", lat: -23.6985, lon: -46.5657 }
];


// Função para simular superlotação
function gerarSuperlotacao() {
  const niveis = [
    { nivel: "baixa", cor: "#28a745", texto: "Atendimento bom" },
    { nivel: "media", cor: "#ffc107", texto: "Atendimento moderado" },
    { nivel: "alta", cor: "#dc3545", texto: "Superlotado" }
  ];
  return niveis[Math.floor(Math.random() * niveis.length)];
}

// Função para calcular distância (simulação)
function calcularDistancia(lat1, lon1, lat2, lon2) {
  // Haversine simplificado para simulação
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2); // km
}

// Tenta obter localização do usuário
function obterLocalizacao(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        callback({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
          manual: false
        });
      },
      () => {
        callback(null);
      }
    );
  } else {
    callback(null);
  }
}

// Preenche campo de localização automaticamente
const localizacaoInput = document.getElementById("localizacao");
const btnLocalizacao = document.getElementById("btn-localizacao");
let userLocation = null;

function setLocalizacaoPlaceholder(text) {
  if (localizacaoInput) localizacaoInput.placeholder = text;
}

function setUserLocation(loc) {
  userLocation = loc;
  if (loc && !loc.manual) {
    setLocalizacaoPlaceholder("Localização detectada");
    localizacaoInput.value = `${loc.lat.toFixed(5)}, ${loc.lon.toFixed(5)}`;
    localizacaoInput.disabled = true;
  } else {
    setLocalizacaoPlaceholder("Digite seu endereço ou CEP");
    localizacaoInput.value = "";
    localizacaoInput.disabled = false;
  }
}

// Ao carregar, tenta obter localização
window.addEventListener("DOMContentLoaded", () => {
  setLocalizacaoPlaceholder("Detectando localização...");
  obterLocalizacao((loc) => {
    if (loc) {
      setUserLocation(loc);
    } else {
      setUserLocation(null);
    }
  });
});

// Botão para tentar novamente localização
btnLocalizacao.addEventListener("click", () => {
  setLocalizacaoPlaceholder("Detectando localização...");
  obterLocalizacao((loc) => {
    if (loc) {
      setUserLocation(loc);
    } else {
      setUserLocation(null);
      alert("Não foi possível obter sua localização. Digite manualmente.");
    }
  });
});

// Ao editar manualmente, marca como manual
localizacaoInput.addEventListener("input", () => {
  userLocation = { manual: true, endereco: localizacaoInput.value };
  localizacaoInput.disabled = false;
});

// Ao enviar o formulário
document.getElementById("consulta-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Pega dados do formulário
  const especialidade = document.getElementById("especialidade").value;
  const mobilidade = document.getElementById("mobilidade").value;
  const horario = document.getElementById("horario").value;
  const preferencias = document.getElementById("preferencias").value;

  // Simula localização do usuário
  let lat = -23.55, lon = -46.63;
  if (userLocation && !userLocation.manual) {
    lat = userLocation.lat;
    lon = userLocation.lon;
  }

  // Filtra médicos pela especialidade
  const medicosFiltrados = MEDICOS.filter(m => m.especialidade === especialidade);

  // Simula resultados
  const resultados = medicosFiltrados.map(medico => {
    // Atribui hospital aleatório
    const hospital = HOSPITAIS[Math.floor(Math.random() * HOSPITAIS.length)];
    // Simula distância
    const distancia = calcularDistancia(lat, lon, hospital.lat, hospital.lon);
    // Simula superlotação
    const superlotacao = gerarSuperlotacao();
    // Simula tempo estimado (mobilidade)
    let tempoEstimado = "";
    switch (mobilidade) {
      case "carro": tempoEstimado = `${(distancia / 0.7).toFixed(0)} min (carro)`; break;
      case "transporte_publico": tempoEstimado = `${(distancia / 0.3).toFixed(0)} min (transporte público)`; break;
      case "onibus": tempoEstimado = `${(distancia / 0.25).toFixed(0)} min (ônibus)`; break;
      case "metro": tempoEstimado = `${(distancia / 0.4).toFixed(0)} min (metrô)`; break;
      case "bicicleta": tempoEstimado = `${(distancia / 0.15).toFixed(0)} min (bicicleta)`; break;
      case "a_pe": tempoEstimado = `${(distancia / 0.07).toFixed(0)} min (a pé)`; break;
      default: tempoEstimado = "-";
    }
    // Horários disponíveis
    const horariosDisponiveis = medico.horarios.map(h =>
      `<button class="btn-horario" data-nome="${medico.nome}" data-hospital="${hospital.nome}" data-horario="${h}">${h}</button>`
    ).join(" ");

    return {
      ...medico,
      hospital,
      distancia,
      superlotacao,
      tempoEstimado,
      horariosDisponiveis
    };
  });

  // Mostra resultados
  mostrarResultados(resultados, mobilidade);
});

// Função para mostrar resultados
function mostrarResultados(resultados, mobilidade) {
  const secaoResultados = document.getElementById("resultados-consulta");
  const cardsResultados = document.getElementById("cards-resultados");
  cardsResultados.innerHTML = "";

  if (!resultados.length) {
    cardsResultados.innerHTML = `<div style="padding:1.5em;text-align:center;">Nenhum profissional encontrado para os filtros selecionados.</div>`;
    secaoResultados.style.display = "block";
    return;
  }
  resultados.forEach(res => {
      const card = document.createElement("div");
      card.className = "result-card";
     card.innerHTML = `
  <div class="result-header">
    <img src="${res.foto}" alt="${res.nome}">
    <div class="result-info">
      <div><b>${res.nome}</b> <span class="availability">Disponível</span></div>
      <div>${res.especialidadeLabel}</div>
      <div>${res.descricao}</div>
      <div>${res.hospital.nome}</div>
      <div class="distance">Distância: ${res.distancia} km</div>
      <div>${res.avaliacao} • ${res.experiencia}</div>
      <div>
        <span class="status-text" style="background:${res.superlotacao.cor};color:#fff;padding:2px 8px;border-radius:8px;">
          ${res.superlotacao.texto}
        </span>
      </div>
    </div>
  </div>
      <div class="mobility-info">
        <b>Mobilidade:</b> ${mobilidade.replace("_", " ")}<br>
        <span>Tempo estimado: <b>${res.tempoEstimado}</b></span>
      </div>
      <div style="margin-top:0.7em;">
        <div><b>Horários disponíveis:</b></div>
        <div class="horarios-lista">${res.horariosDisponiveis}</div>
      </div>
    `;
    cardsResultados.appendChild(card);
  });

  secaoResultados.style.display = "block";
  adicionarEventoAgendamento();
}

// Função para agendar consulta
function adicionarEventoAgendamento() {
  document.querySelectorAll(".btn-horario").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const nome = btn.getAttribute("data-nome");
      const hospital = btn.getAttribute("data-hospital");
      const horario = btn.getAttribute("data-horario");
      mostrarMensagemSucesso(nome, hospital, horario);
    });
  });
}

// Mensagem de sucesso
function mostrarMensagemSucesso(nome, hospital, horario) {
  const msg = document.getElementById("mensagem-sucesso");
  const overlay = document.getElementById("sucesso-overlay");
  msg.innerHTML = `<i class="fa fa-check-circle"></i> Consulta com <b>${nome}</b> no <b>${hospital}</b> às <b>${horario}</b> agendada com sucesso!`;
  msg.style.display = "flex";
  overlay.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
    overlay.style.display = "none";
    document.getElementById("resultados-consulta").style.display = "none";
    document.getElementById("consulta-form").reset();
    setUserLocation(userLocation); // Mantém localização detectada
  }, 5000);
}