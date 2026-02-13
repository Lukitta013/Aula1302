//Para rodar:
// npx tsc (nome do arquivo)
// node (nome do arquivo)


//Princípio Solid.

//Um dos problemas mais comuns é a linha do tempo e organização.
/*
Deve-se seguir boas práticas de desenvolvimento.


const calc = (p : any, l : any) =>{
    return p / (l * l)
} --> Código sujo.

*/


const indiceMassaCorporal = (peso : any, altura : any) =>{
    return /*variável = */ peso / (altura * altura)
}

console.log(indiceMassaCorporal(65, 1.85))
//console.log(indiceMassaCorporal(variável))
//--> Código limpo

/*
Princípio solid, é um acrônomo.
Responsabilidade unica de classe, retira-se da classe toda a responsabilidade que ela não deve ter.
*/

class Produto{
    public nome: string
    public lote: string
    public fabricante: string
    public dataFabricacao: string
    public preco: number
    constructor(
        nome: string,
        lote: string,
        fabricante: string,
        dataFabricacao: string,
        preco: number
    )
    {
        this.nome = nome
        this.lote = lote
        this.fabricante = fabricante
        this.dataFabricacao = dataFabricacao
        this.preco = preco
    }
}
const calcularPreco = (produto : Produto, taxa : number) =>{
    return produto.preco * taxa
}

const descritor = (produto : Produto) =>{
    return `Nome: ${produto.nome}\n{produto.lote}`
}
//const p = new Produto();

/*
Aberto-Fechado.
Classe fechada pra modificação, aberta pra modificação.
*/

/*
abstract class CalculadorPreco{
    public produto : Produto
    public abstract calcularPreco(taxa: number): number
}

class CalculadorPrecoDescontoDinheiro extends CalculadorPreco{
    public calcularPreco(taxa: number): number {
        return this.produto.preco - valor
    }
}


class CalculadorPrecoDescontoPorcentagem extends CalculadorPreco{
    public calcularPreco(desconto: number): number {
        let preco = this.produto.preco
        return preco - (preco * (desconto / 100))
    }
}
*/
//Substituição de Liskov.

//Segregação de interface.
//Inversão de dependência.
//--> JavaSpring, etiqueta lá em cima. 
//Interface da POO.