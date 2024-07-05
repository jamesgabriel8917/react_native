import { VStack, ScrollView, Text, Center } from "native-base"; 
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";
import { CardConsulta } from "../components/CardConsulta";
import { CardBusca } from "../components/CardBusca";


export default function Explorar(){
    return(
        <ScrollView m={5}>

            <CardBusca></CardBusca>

            <Text color="blue.500" bold fontSize="xl" alignSelf="center" mb={5}>Resultado da busca</Text>

            <CardConsulta
                nome='Dr. André Silva'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/44330297?v=4'
                
            />
            <CardConsulta
                nome='Dr. André Silva'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/44330297?v=4'
                
            />
            <CardConsulta
                nome='Dr. André Silva'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/44330297?v=4'
                
            />
            <CardConsulta
                nome='Dr. André Silva'
                especialidade='Cardiologista'
                foto='https://avatars.githubusercontent.com/u/44330297?v=4'
                
            />

        </ScrollView>
    )
}

