import { VStack, Text, Divider, ScrollView } from "native-base"; 
import { CardConsulta } from "../components/CardConsulta";
import { Titulo } from "../components/Titulo";
import { Botao } from "../components/Botao";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pegarConsultasPaciente } from "../servicos/pacienteServico";

interface Especialista{
    id: string;
    nome: string;
    imagem: string;
    especialidade: string;
}

interface Consulta {
    id: string;
    data: string;
    especialista: Especialista;
}

export default function Consultas(){
    const [consultasProximas, setConsultasProximas] = useState<Consulta[]>([])
    const [consultasPassadas, setConsultasPassadas] = useState<Consulta[]>([])

    useEffect(() => {
        async function pegarConsultas() {   
            const pacienteId = await AsyncStorage.getItem("PacienteId")
            if(!pacienteId) return

            const todasConsultas: Consulta[] = await pegarConsultasPaciente(pacienteId)

            const agora = new Date();

            const proximas = todasConsultas.filter((consulta) => new Date(consulta.data)> agora)

            const passadas = todasConsultas.filter((consulta) => new Date(consulta.data) <= agora)

            setConsultasProximas(proximas)
            setConsultasPassadas(passadas)


            
        }
        pegarConsultas()
    })


    return(
        <ScrollView mt={10} p={5}>
            <Titulo mt={5} color="blue.500">Minhas Consultas</Titulo>
            <Botao mb={5}>Agendar Nova Consulta</Botao>
            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Proximas consultas</Titulo>

            {consultasProximas?.map((consulta) => (
                <CardConsulta
                    key={consulta.id}
                    nome={consulta.especialista?.nome}
                    especialidade={consulta.especialista.especialidade}
                    foto={consulta.especialista.imagem}
                    data={consulta.data}
                    foiAgendado
                />
            ))}

            <Divider mt={5}/>

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>

            {consultasPassadas?.map((consulta) => (
                <CardConsulta
                    key={consulta.id}
                    nome={consulta.especialista?.nome}
                    especialidade={consulta.especialista.especialidade}
                    foto={consulta.especialista.imagem}
                    data={consulta.data}
                    foiAtendido
                />
            ))}
           
        </ScrollView>
    )
}