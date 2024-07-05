import { VStack, Text, Image, ScrollView } from "native-base"; 
import Logo from '../assets/Logo.png'
import { CardBusca } from "../components/CardBusca";
import { CardDepoimento } from "../components/CardDepoimento";

export default function Principal(){
    return(
        <ScrollView mt={9} m={6}>
            <Image source={Logo} alt='Logo Voll' mt="10" mb={6}/>
            <Text color="blue.500" bold fontSize="xl" alignSelf="left">Boas vindas!</Text>
            <CardBusca/>
            <Text color="blue.800" bold fontSize="xl" alignSelf="center" mb="6">Depoimentos</Text>
            <CardDepoimento 
                depoimento="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                nome="Júlio, 40 anos, São Paulo/SP."
            />
            <CardDepoimento 
                depoimento="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
                nome="Júlio, 40 anos, São Paulo/SP."
            />
            <CardDepoimento 
                depoimento="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."
                nome="Júlio, 40 anos, São Paulo/SP."
            />
            <CardDepoimento 
                depoimento="Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores."
                nome="Júlio, 40 anos, São Paulo/SP."
            />
            
        </ScrollView>
    )
}