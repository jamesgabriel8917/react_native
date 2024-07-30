import { Text, Avatar, VStack} from 'native-base'
import { Botao } from './Botao'

interface CardProps{
    nome: string;
    foto: string;
    especialidade: string;
    data?: string; 
    foiAtendido?:boolean
    foiAgendado?:boolean
    onPress?: ()=> void 
}

export function CardConsulta({nome, foto, especialidade, data, foiAtendido, foiAgendado, onPress}:CardProps){
    return(
        <VStack w="100%" bg={foiAtendido ? 'blue.100': "white"} p="5" mb={5} borderRadius={25}>
            <VStack flexDir="row">
                <Avatar source={{uri: foto}} size="lg"/>
            
                <VStack pl={4}>
                    <Text fontSize={20} bold >{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao mt={4} onPress={onPress}>
                {foiAgendado ? 'Cancelar' : 'Agendar consulta'}
            </Botao>
        </VStack>
    )
}