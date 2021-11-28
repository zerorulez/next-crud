interface EntradaPropos {
    tipo?: 'text' | 'number'
    texto: string
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaPropos) {
    return (
        <div className={`flex flex-col mb-4`}>
            <label className="mb-4">
                {props.texto}
            </label>
            <input
                type={props.tipo ?? 'text'}
                step=".01"
                max="1"
                value={props.valor}
                readOnly={props.somenteLeitura}
                onChange={e => props.valorMudou?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-md focus:outline-none
                    bg-gray-50 px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}