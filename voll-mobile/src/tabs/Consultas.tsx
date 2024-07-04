import { VStack, Text } from "native-base"; 
import { CardConsulta } from "../components/CardConsulta";

export default function Consultas(){
    return(
        <VStack mt={10} p={5}>
            <CardConsulta
            nome='Dr. André Silva'
            especialidade='Cardiologista'
            foto='https://avatars.githubusercontent.com/u/44330297?v=4'
            ></CardConsulta>
        </VStack>
    )
}