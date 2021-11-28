import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Formulario from "../components/Formulario"
import Produto from "../core/Produto"
import { useEffect, useState } from "react"
import Head from 'next/head'

export default function Home() {

  const [produtos, setProdutos] = useState<Produto[]>()
  const [produto, setProduto] = useState<Produto>(Produto.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  useEffect(pegarProdutos, [])

  function pegarProdutos() {
    fetch('https://next-crud-liard-phi.vercel.app' + '/api/pegar-produtos')
    .then(res => res.json())
    .then(resposta => {
      setProdutos(resposta)
    })
  }

  function produtoSelecionado(produto: Produto) {
    setProduto(produto)
    setVisivel('form')
  }

  function produtoExcluido(produto: Produto) {
    fetch('https://next-crud-liard-phi.vercel.app' + '/api/apagar-produto?id=' + produto.id)
    .then(() => {
      pegarProdutos()
      setVisivel('tabela')
    })
  }

  function salvarProduto(produto: Produto) {
    if (produto.id == null) {
      fetch('https://next-crud-liard-phi.vercel.app' + '/api/salvar-produto', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          nome: produto.nome,
          preco: produto.preco,
          desconto: produto.desconto,
        })
      })
      .then(() => {
        pegarProdutos()
        setVisivel('tabela')
      })
    } else {
      fetch('https://next-crud-liard-phi.vercel.app' + '/api/editar-produto', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          desconto: produto.desconto,
        })
      })
      .then(() => {
        pegarProdutos()
        setVisivel('tabela')
      })
    }
  }

  function novoProduto() {
    setProduto(Produto.vazio())
    setVisivel('form')
  }

  return (
    <div className={`
      flex h-screen justify-center items-center bg-gradient-to-r 
      from-purple-500 to-blue-500 text-white
    `}>
      <Head>
        <title>Produtos</title>
      </Head>
      <Layout titulo="Produtos">
        <div className="flex justify-end">
          <Botao
            cor="green"
            onClick={() => novoProduto()}  
          >
            Novo Produto
          </Botao>
        </div>
        {visivel === 'tabela' ? (
          <Tabela
            produtos={produtos}
            produtoSelecionado={produtoSelecionado}
            produtoExcluido={produtoExcluido}
          ></Tabela>
        ): (
          <Formulario
            produto={produto}
            cancelado={() => setVisivel('tabela')}
            produtoMudou={salvarProduto}
          ></Formulario>
        )}
      </Layout>
    </div>
  )
}
