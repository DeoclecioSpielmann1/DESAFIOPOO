class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
      }
      calcularquantidade() {
        return this.quantidade * this.quantidade;
      }
    }
}
const produto1 = new Produto("Notebook", 3500, 5);
const produto2 = new Produto("Mouse", 120, 15);
const produto3 = new Produto("Teclado", 200, 10);