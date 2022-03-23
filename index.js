class Noticia{
    constructor(titulo, data_pub, resumo, texto){
        this.titulo = titulo;
        this.data_pub = data_pub;
        this.resumo = resumo; 
        this.texto = texto;
    }
    mostrarNoticia(){
        return this.titulo + "\n" + this.data_pub + "\n" + this.resumo + "\n\n" + this.texto + ""
    }
}

let noticia = new Noticia ("Novo mascote da UFMS", "23/03/2022", "Cachorro caramelo vira ícone e é considerado novo mascote da Universidade Federal De Mato Grosso Do Sul", "Devido ao enorme carinho dos alunos com os cachorros da UF, todos entraram em um consenso em denominar o cachorro caramelo como mascote." );

console.log(noticia.mostrarNoticia())

