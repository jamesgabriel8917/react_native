import { VStack, Text, ScrollView, Avatar, Divider, Center } from "native-base"; 

import { Titulo } from "../components/Titulo";


export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500" mt={10}>Meu perfil</Titulo>

                <Avatar source={{uri:"https://avatars.githubusercontent.com/u/44330297?v=4"}} mt={5} size="xl"/>

                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg">James Gabriel</Titulo>
                <Text>20/01/2000</Text>
                <Text>São Paulo</Text>

                <Divider mt={5}/>
                <Titulo color="blue.500" mb={3}>Historico médico</Titulo>
                <Text >Rinite</Text>
                <Text>Colite</Text>
            </VStack>
        </ScrollView>
    )
}

