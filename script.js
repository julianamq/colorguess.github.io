const nota = document.getElementById('score');
const rbgColor = document.getElementById('rgb-color');
const resposta = document.getElementById('answer');
const ballsBox = document.getElementById('ballsBox');
const restartNovasCores = document.getElementById('reset-game');
let points = 0 ;

function gerador() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  return `(${red},${green},${blue})`;
}
function gerarCoresAleatorias() {
  const balls = document.querySelectorAll('.ball');
  // gerar a posição e arrendondar a posição. 
  const rightColorIndex = Math.round(Math.random() * 5);
  resposta.innerText = 'Escolha uma cor';

  // para ter acesso ao indice basta colocar o segundo parametro.
  balls.forEach((ball, i) => {
    const color = gerador();
    ball.style.backgroundColor = `rgb${color}`;
    if (i === rightColorIndex) {
      ball.classList.add('selected');
      rbgColor.innerText = color;
    } else {
      ball.classList.remove('selected');
    }
  });
}
// agora reconhecer os clicks
function ballClickListener() {
  ballsBox.addEventListener('click', (event) => {
    const ball = event.target;
    // ball faz parte do elemento, se isso for verdade significa que estou clicando de fato na class ball.
    if (ball.classList.contains('ball')) {
      // se eu clicar na selected;
      if (ball.classList.contains('selected')) {
        resposta.innerText = 'Acertou!';
        points += 3;
        nota.innerText = points;
      } else {
        resposta.innerText = 'Errou! Tente novamente!';
      }

    }

  });
}


gerador();
gerarCoresAleatorias();
ballClickListener();
// toda vez que clicar no botão vai gerar novas cores. 
restartNovasCores.addEventListener('click', gerarCoresAleatorias);
