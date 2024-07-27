import { VStack, Text, ScrollView, Avatar, Divider, Center } from "native-base"; 

import { Titulo } from "../components/Titulo";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pegarDadosPaciente } from "../servicos/pacienteServico";
import { Paciente } from "../interfaces/Paciente";
import { Botao } from "../components/Botao";

export default function Perfil({navigation }: any){
    const [dadosPaciente, setDadosPaciente] = useState({} as Paciente)

    useEffect(() => {
        async function dadosPaciente(){
            const pacienteId = await AsyncStorage.getItem('pacienteId')

            if(!pacienteId) return null

            const resultado = pegarDadosPaciente(pacienteId)

            if(resultado){
                setDadosPaciente(await resultado)
                console.log(resultado)
            }
        }
    }, [])

    function deslogar(){
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('pacienteId')
        navigation.replace('Login')
    }
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500" mt={10}>Meu perfil</Titulo>

                <Avatar source={{uri: dadosPaciente.imagem}} mt={5} size="xl"/>

                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg">{dadosPaciente.nome}</Titulo>
                <Text>{dadosPaciente.email}</Text>
                <Text>a</Text>

                <Divider mt={5}/>
                <Titulo color="blue.500" mb={3}>Planos de saúde</Titulo>
                    {
                        dadosPaciente.planosSaude?.map((plano, index) => (
                            <Text key={index}>{plano}</Text>
                        ))
                    }

                    <Botao onPress={deslogar}>
                        Deslogar
                    </Botao>
            </VStack>
        </ScrollView>
    )
}

