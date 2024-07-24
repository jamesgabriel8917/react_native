const secoes = [
    {
      id:1,
      Titulo:  'Insira seus dados pessoais',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo',
          name: 'nome'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu Email',
          name: 'email'
        },
        {
          id: 3,
          label: 'Senha',
          placeholder: 'Digite sua senha',
          name: 'senha',
          secureTextEntry: true
        },
        {
          id: 4,
          label: 'ConfirmaSenha',
          placeholder: 'Confirme sua senha',
          name: 'confirmaSenha',
          secureTextEntry: true
        },
        {
          id: 5,
          label: 'CPF',
          placeholder: 'insira seu CPF',
          name: 'cpf',
        },
        {
          id: 6,
          label: 'Foto de perfil',
          placeholder: 'Link da foto',
          name: 'imagem',
        },
      ]
    },
    {
      id:2,
      Titulo:  'Agora seus dados de endereço!',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP',
          name: "cep"
        },
        {
          id: 2,
          label: 'rua',
          placeholder: 'Digite sua rua',
          name: "rua"
        },
        {
          id: 3,
          label: 'Número',
          placeholder: 'Digite o numero da sua residencia',
          name: "numero"
        },
        {
          id: 4,
          label: 'Complemento',
          placeholder: 'Complemento',
          name: "complemento"
        },
        {
          id: 5,
          label: 'Telefone',
          placeholder: '(00) 0000-0000',
          name: "telefone"
        },
        {
          id: 6,
          label: 'Estado',
          placeholder: 'UF',
          name: "estado"
        },
      ]
    },
    {
      id:3,
      Titulo:  'Para finalizar, quais são seus planos!',
      Checkbox: [
        {
          id: 1,
          value: 'Unimed',
        },
        {
          id: 2,
          value: 'Teste',
        },
        {
          id: 3,
          value: 'Teste',
        },
        {
          id: 4,
          value: 'Teste',
        },
        {
          id: 5,
          value: 'Teste',
        },
      ]
    }
  ]


export { secoes }