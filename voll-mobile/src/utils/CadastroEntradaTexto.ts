const secoes = [
    {
      id:1,
      Titulo:  'Insira seus dados pessoais',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu Email'
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
          placeholder: 'Digite seu CEP'
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