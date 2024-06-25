import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';
import { Botao } from './components/Botao';


export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll' mt="10"/>

      <Titulo>
        Faça login em sua conta
      </Titulo>

      <Box>
        <EntradaTexto 
            placeholder='Email'
            label='Insira seu endereço de email'
            />
          <EntradaTexto 
            placeholder='Senha'
            label='Insira sua senha'
            />
      </Box>
      <Botao>Entrar</Botao>

      <Link href='#' mt="2">
        Esqueceu a sua senha?
      </Link>

      <Box w="100%" flexDirection="row" justifyContent="center" mt="10">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color="blue.500">Faça o seu cadastro!</Text>
        </TouchableOpacity>
      </Box>


    </VStack>
  );
}

