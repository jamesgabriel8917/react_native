import {VStack} from 'native-base'
import { Botao } from './Botao'
import { EntradaTexto } from './EntradaTexto'


export function CardBusca(){
    return(
        <VStack  mt={9} p="5" mb={5} shadow={3} borderRadius={25} backgroundColor="white">
            <EntradaTexto 
                placeholder='Digite a especialidade'
            />
            <EntradaTexto 
                placeholder='Digite sua localização'
            />
            <Botao backgroundColor="blue.800">Buscar</Botao>
        </VStack>
    )
}
