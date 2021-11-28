interface BotaoProps {
    cor?: 'green' | 'blue' | 'gray'
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    return (
        <button 
            onClick={props.onClick}
            className={`
            bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-700
            text-white px-4 py-2 rounded-md mb-4
            `}>
            {props.children}
        </button>
    )
}