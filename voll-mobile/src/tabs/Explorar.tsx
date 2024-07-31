import { VStack, ScrollView, Text, Center } from "native-base"; 
import { EntradaTexto } from "../components/EntradaTexto";
import { Botao } from "../components/Botao";
import { CardConsulta } from "../components/CardConsulta";
import { CardBusca } from "../components/CardBusca";
import { useState } from "react";
import { buscarespecialistaPorEstado } from "../servicos/EspecialistaServico";

interface Especialista{
    nome: string,
    imagem: string,
    especialidade: string,
    id: string
}

export default function Explorar({navigation}: any){

    const [estado, setEstado] = useState("")
    const [especialidade, setEspecialidade] = useState("")
    const [resultadobusca, setResultadoBusca] = useState([])

    async function buscar(){
        if(!estado || !especialidade) return null;

        const resultado = await buscarespecialistaPorEstado(estado, especialidade)

        if(resultado){
            setResultadoBusca(resultado)
            console.log(resultado)
        }
    }

    return(
        <ScrollView m={5}>

        <VStack  mt={9} p="5" mb={5} shadow={3} borderRadius={25} backgroundColor="white">
            <EntradaTexto 
                placeholder='Digite a especialidade'
                value={especialidade}
                onChangeText={setEspecialidade}
            />
            <EntradaTexto 
                placeholder='Digite sua localização'
                value={estado}
                onChangeText={setEstado}
            />

            <Botao backgroundColor="blue.800" onPress={buscar}>Buscar</Botao>
        </VStack>

            <Text color="blue.500" bold fontSize="xl" alignSelf="center" mb={5}>Resultado da busca</Text>

            {resultadobusca?.map((especialista: Especialista, index) => (
                <VStack key={index}>
                    <CardConsulta
                        nome={especialista.nome}
                        especialidade={especialista.especialidade}
                        foto={especialista.imagem}
                        onPress={()=> {
                            navigation.navigate('Agendamento', {
                                especialistaId: especialista.id
                            })
                        }}
                    />
                </VStack>
            ))}
        </ScrollView>
    )
}

