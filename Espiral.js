// JavaScript source code
class EspiralDePalavras {
    constructor(idpai, palavrasRecebido = "Palavra1,Palavra2,Palavra3,Palavra4,kjfg.sjdknfs,kjdhf,sjdfksdjfhg,jdsfkjsfhdg") {

        this.palavrasCriadas = 0;
        this.palavras = [];
        for (let texto of palavrasRecebido.split(",")) {
            let palavra = new Palavra(idpai, texto, 1000 * this.palavrasCriadas);
            this.palavrasCriadas++
            this.palavras.push(texto);
        }
    }
    criarPalavra() {
        this.palavrasCriadas
      //  let palavra = new Palavra(idpai, texto);
    }
}
class Palavra {
    constructor(elementoPai, recebido = "Palavra",pausa=3000) {
        this.posicaoX = 0;
        this.posicaoY = 0;
        // Configurações da espiral
        this.ain = 2;//tamamnho inicial da espiral
        
        this.b = 0.1;  // Taxa de rotação
        setTimeout(() => {
            this.elemento = this.criarVisual(elementoPai, recebido);
            setInterval(this.atualizarEspiral.bind(this), 10)
        }, pausa);
        this.fatordimuicao = 0.995//diminuição do tamamnho da espiral
        this.escalaInicial = 1;
        this.escalaAtual = this.escalaInicial;
        this.fatorEscala = 0.001//fator de diminuição da Escala
        this.fatorOpacidade = 0.01//fator de diminuição da opacidade
        this.theta = 0;// Criar angulo
        this.a = this.ain;  // Cria tamanho da espiral
    }

    ///////////////cria div
    criarVisual(elementoPai, texto) {
        
        let elemento = document.createElement("div");
        elemento.setAttribute("id", 'div_' + texto);
        elemento.textContent = texto;
        elemento.style.position = "Absolute";
        document.getElementById(elementoPai).appendChild(elemento);
        
        return elemento;
    }
    atualizarEspiral() {

        
        let x = this.a * Math.cos(this.b * this.theta);
        let y = this.a * Math.sin(this.b * this.theta);
        this.posicaoX = x * 100 + 300;
        this.posicaoY = y * 100 + 300;
        this.elemento.style.left = this.posicaoX + "px";
        this.elemento.style.top = this.posicaoY + "px";
        this.elemento.style.transform
        if (this.a > 0.1) {
            this.modificaParametros();
        } else {
            console.log(this.a)
            this.reiniciarMovimento();
        }
                
    }
    modificaParametros() {
        this.theta += 0.1;
        this.a *= this.fatordimuicao;
        this.escalaAtual = this.escalaAtual - this.fatorEscala;
        this.elemento.style.transform = "scale(" + this.escalaAtual + ")";
    }
    reiniciarMovimento() {
        this.a = this.ain
        this.theta = 0;
        this.escalaAtual = 1;

    }
}
