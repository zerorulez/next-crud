export default class Produto {
    #id: number
    #nome: string
    #preco: number
    #desconto: number

    constructor(nome: string, preco: number, desconto: number, id: number = null) {
        this.#nome = nome
        this.#preco = preco
        this.#desconto = desconto
        this.#id = id
    }

    static vazio() {
        return new Produto('', 0, 0)
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get preco() {
        return this.#preco
    }

    get desconto() {
        return this.#desconto
    }
}