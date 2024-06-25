import { Button, ITextProps } from "native-base"
import { ReactNode } from "react"

interface TituloProps extends ITextProps{
    children: ReactNode
}

export function Botao({children, ...rest}: TituloProps){
    return(
        <Button

        >
            {children}
        </Button>
    )
}