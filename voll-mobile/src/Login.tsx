import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
import { EntradaTexto } from './components/EntradaTexto';


export default function Login() {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll' mt="10"/>

      <Titulo>
        Faça login em sua conta
      </Titulo>

      <Box>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <EntradaTexto 
            placeholder='Insira seu endereço de email' 
            size="lg" 
            width="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
            />
        </FormControl>
        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <EntradaTexto 
            placeholder='Insira sua senha' 
            type='password'
            size="lg" 
            width="100%"
            borderRadius="lg"
            bgColor="gray.100"
            shadow={3}
            />
        </FormControl>
      </Box>
      <Button
        w="100%"
        bg="blue.800"
        mt={10}
        borderRadius="lg"
      >
        Entrar
      </Button>

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

