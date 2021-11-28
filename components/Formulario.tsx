import { useState } from "react"
import Produto from "../core/Produto"
import Entrada from "./Entrada"
import Botao from "./Botao"

interface FormularioPropos {
    produto: Produto
    produtoMudou?: (produto: Produto) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioPropos) {
    const id = props.produto?.id
    const [nome, setNome] = useState(props.produto?.nome ?? '')
    const [preco, setPreco] = useState(props.produto?.preco ?? '')
    const [desconto, setDesconto] = useState(props.produto?.desconto ?? '')
    return (
        <div>
            {id ? (
                <Entrada texto="Código" tipo="number" valor={id}></Entrada>
            ): false}
            <Entrada texto="Nome" valor={nome} valorMudou={setNome}></Entrada>
            <Entrada texto="Preco" tipo="number" valor={preco} valorMudou={setPreco}></Entrada>
            <Entrada texto="Desconto" tipo="number" valor={desconto} valorMudou={setDesconto}></Entrada>
            <div>
                <Botao
                    cor="blue"
                    onClick={() => props.produtoMudou?.(new Produto(nome, +preco, +desconto, id))}
                >
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                &nbsp;
                <Botao
                    cor="gray"
                    onClick={props.cancelado}
                >
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}