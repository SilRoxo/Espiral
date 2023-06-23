class Palavra {
    contructor(elementoPai, recebido = "Palavra") {
        this.elemento = criarVisual(elementoPai, recebido)
    }

    ///////////////cria div
    criarVisual(elementoPai,texto) {
        let elemento = document.createElement("div");
        elemento.setAttribute("id", 'div_' + texto);
        elemento.textContent = texto;
        elemento.style.position = "Absolute";
        document.getElementById(elementoPai).appendChild(elemento)
        return elemento;
    }
    ////////configura espiral e realiza movimento
    criarEspiral() {
        var posicaoX = 300;
        var posicaoY = 300;
        // Configurações da espiral
        var a = 2;  // Tamanho da espiral
        var b = 0.1;  // Taxa de rotação
        const fatordimuicao = 0.9999
        // Criar angulo
        var theta = 0;


        function atualizarEspiral() {
            {
                theta += 0.1
                const x = a * Math.cos(b * theta);
                const y = a * Math.sin(b * theta);
                posicaoX = x * 100 + 300;
                posicaoY = y * 100 + 300;
                palavra.style.left = posicaoX + "px";
                palavra.style.top = posicaoY + "px";
                a *= fatordimuicao;
                console.log(a)
            }
        }
        setInterval(atualizarEspiral, 10)

    }
}
