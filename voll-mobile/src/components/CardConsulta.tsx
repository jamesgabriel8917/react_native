import { Text, Avatar, VStack} from 'native-base'
import { Botao } from './Botao'

interface CardProps{
    nome: string;
    foto: string;
    especialidade: string;
    data?: string; 
    foiAtendido?:boolean
    foiAgendado?:boolean
}

export function CardConsulta({nome, foto, especialidade, data, foiAtendido, foiAgendado}:CardProps){
    return(
        <VStack w="100%" bg="white" p="5" borderRadius={25}>
            <VStack flexDir="row">
                <Avatar source={{uri: "https://avatars.githubusercontent.com/u/44330297?v=4"}} size="lg"/>
            
                <VStack pl={4}>
                    <Text fontSize={20} bold >{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={4}>
                Agendar consulta
            </Botao>
        </VStack>
    )
}