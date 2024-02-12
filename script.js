const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilizar páginas web",
        "Um protocolo de comunicação entre cliente e servidor",
        "Uma linguagem de programação para criar páginas web dinâmicas",
      ],
      correta: 2 // A resposta correta é a opção C
    },
    {
      pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
      respostas: [
        "variable x;",
        "var x;",
        "x = var;",
      ],
      correta: 1 // A resposta correta é a opção B
    },
    {
      pergunta: "Qual é o operador de atribuição em JavaScript?",
      respostas: [
        "==",
        "=",
        "+=",
      ],
      correta: 1 // A resposta correta é a opção B
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "log()",
        "print()",
        "display()",
      ],
      correta: 0 // A resposta correta é a opção A
    },
    {
      pergunta: "O que significa 'DOM' em JavaScript?",
      respostas: [
        "Document Object Model",
        "Digital Object Model",
        "Dynamic Object Model",
      ],
      correta: 0 // A resposta correta é a opção A
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "!=",
      ],
      correta: 1 // A resposta correta é a opção B
    },
    {
      pergunta: "Qual é a função do método 'querySelector' em JavaScript?",
      respostas: [
        "Para selecionar todos os elementos de uma classe",
        "Para selecionar o primeiro elemento que corresponde a um seletor CSS",
        "Para selecionar elementos com um determinado ID",
      ],
      correta: 1 // A resposta correta é a opção B
    },
    {
      pergunta: "O que faz o operador '&&' em JavaScript?",
      respostas: [
        "Operador de adição",
        "Operador de negação",
        "Operador lógico 'E' (AND)",
      ],
      correta: 2 // A resposta correta é a opção C
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Para remover um evento de um elemento",
        "Para adicionar um evento a um elemento",
        "Para selecionar um elemento da página",
      ],
      correta: 1 // A resposta correta é a opção B
    },
    {
      pergunta: "Qual é a forma correta de comentar uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de linha única",
        "<!-- Este é um comentário de linha única -->",
        "/* Este é um comentário de linha única */",
      ],
      correta: 0 // A resposta correta é a opção A
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // looping ou laço de repetição,para cada item do array ele fará alguma coisa
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  //coloca a pergunta na tela 
  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)
  }