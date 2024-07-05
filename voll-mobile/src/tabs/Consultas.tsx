import { VStack, Text, Divider, ScrollView } from "native-base"; 
import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";

export default function Consultas(){
    return(
        <ScrollView mt={10} p={5}>
            <Titulo mt={5} color="blue.500">Minhas Consultas</Titulo>
            <Botao mb={5}>Agendar Nova Consulta</Botao>
            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Proximas consultas</Titulo>
            <CardConsulta
                nome='Dr. André Silva'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/44330297?v=4'
                foiAgendado
            />

            <Divider mt={5}/>

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
            <CardConsulta
                nome='Dr. André Silva'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/44330297?v=4'
                foiAtendido
            />
            <CardConsulta
                nome='Dr. André Silva'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/44330297?v=4'
                foiAtendido
            />
            <CardConsulta
                nome='Dr. André Silva'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/44330297?v=4'
                foiAtendido
            />
        </ScrollView>
    )
}