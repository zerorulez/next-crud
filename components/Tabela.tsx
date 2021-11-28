import Produto from "../core/Produto";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
    produtos: Produto[]
    produtoSelecionado?: (produto: Produto) => void
    produtoExcluido?: (produto: Produto) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.produtoExcluido || props.produtoSelecionado

    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Preço</th>
                <th className="text-left p-4">Desconto</th>
                <th className="text-left p-4">Total</th>
                {exibirAcoes ? (
                    <th className="p-4">Ações</th>
                ) : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.produtos?.map((produto, index) => {
            return (
                <tr key={produto.id}
                    className={`${index % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{produto.id}</td>
                    <td className="text-left p-4">{produto.nome}</td>
                    <td className="text-left p-4">{'R$ ' + produto.preco.toFixed(2)}</td>
                    <td className="text-left p-4">{(produto.desconto * 100).toFixed() + '%'}</td>
                    <td className="text-left p-4">{'R$ ' + (produto.preco - (produto.preco * produto.desconto)).toFixed(2)}</td>
                    {exibirAcoes ? renderizarAcoes(produto) : false}
                </tr>
            )
        })
    }

    function renderizarAcoes(produto) {
        return (
            <td className="flex justify-center">
                {props.produtoSelecionado ? (
                    <button
                        onClick={() => props.produtoSelecionado?.(produto)}
                        className={`
                            flex justify-center items-center
                            rounded-full hover:bg-white p-2 m-1
                            text-green-600
                        `}>
                        {IconeEdicao}
                    </button>
                ) : false}
                {props.produtoExcluido ? (
                    <button 
                        onClick={() => props.produtoExcluido?.(produto)}
                        className={`
                            flex justify-center items-center
                            rounded-full hover:bg-white p-2 m-1
                            text-red-600
                        `}>
                        {IconeLixo}
                    </button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                bg-gradient-to-r from-purple-500 to-purple-800 text-white
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}