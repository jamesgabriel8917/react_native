import { VStack, Image, Text, Box, FormControl, Input } from 'native-base'
import Logo from './assets/Logo.png'


export default function Login() {
  return (
    <VStack flex={1} alignItems="center" p={5}>
      <Image source={Logo} alt='Logo Voll' mt="10"/>

      <Text 
        fontSize="2xl" 
        fontWeight="bold" 
        color="gray.500" 
        textAlign="center"
        mt="5"
      >Faça login em sua conta</Text>

      <Box>
        <FormControl>
          <FormControl.Label>Email</FormControl.Label>
          <Input 
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
          <Input 
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


    </VStack>
  );
}

