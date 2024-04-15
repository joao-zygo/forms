// Data e hora do lançamento (substitua pelos valores reais)
const dataLancamento = '2024-04-15 12:50:00';

// Intervalo de atualização da contagem regressiva (em segundos)
const intervalo = 1;

// Função para formatar o tempo restante
function formatarTempoRestante(tempoEmSegundos) {
  const horas = Math.floor(tempoEmSegundos / 3600);
  const minutos = Math.floor((tempoEmSegundos % 3600) / 60);
  const segundos = tempoEmSegundos % 60;

  return `${horas}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

// Cálculo do tempo restante inicial
let tempoRestante = Math.floor((new Date(dataLancamento) - new Date()) / 1000);

// Atualização da contagem regressiva
const contagemRegressivaInterval = setInterval(() => {
  tempoRestante -= intervalo;

  if (tempoRestante <= 0) {
    clearInterval(contagemRegressivaInterval);
    document.getElementById('countdown').innerHTML = 'Foguete lançado com sucesso!';
  } else {
    document.getElementById('countdown').innerHTML = formatarTempoRestante(tempoRestante);
  }
}, intervalo * 1000);
