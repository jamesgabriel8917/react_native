import { Divider, ScrollView, Text } from "native-base";

interface CardPropos{
    depoimento: string;
    nome: string;
}

export function CardDepoimento({depoimento, nome}: CardPropos){
    return(
        <ScrollView>
            <Text fontSize="md">
                {depoimento}
            </Text>
            <Text fontSize="lg" bold alignSelf="center" color="gray.700">
                {nome}
            </Text>
            <Divider m={3}/>
        </ScrollView>
    )
}