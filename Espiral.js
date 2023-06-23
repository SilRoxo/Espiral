// JavaScript source code
function criarEspiral() {
    var movimentoX = 10;
    var palavra = document.getElementById("palavra1");
    palavra.style.position = "Absolute";
    var posicaoX = 300;
    var posicaoY = 300;
    // Configurações da espiral
    var a = 2;  // Tamanho da espiral
    var b = 0.1;  // Taxa de rotação
    var diminuidor = 0
    const fatordimuicao = 0.9999
    // Criar angulo
    var theta = 0

    function atualizarEspiral() {
        {
            
           // if (theta <= 10 * Math.PI) {
                theta += 0.1
                const x = a * Math.cos(b * theta);
                const y = a * Math.sin(b * theta);
                posicaoX = x * 100+300;
                posicaoY = y * 100+300;
                palavra.style.left = posicaoX + "px";
            palavra.style.top = posicaoY + "px";
            a *= fatordimuicao;

        //    }
        }
    }
    setInterval(atualizarEspiral, 10)
    
}