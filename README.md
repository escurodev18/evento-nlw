programar: ensinar o computador

sintaxe: maneira correta de escrever

Toda linguagem é escrita com sintaxe e instruções

instruções (declarações): dá uma ordem ao computador

 javascript:
const mensagem = "Hello world"           eu declarei uma variavel chamada mensagem e atribui a ela um valor que é o "hello world", esse atributo é chamado string.
alert(mensagem + (10 + 100) + "abraços") alert é para disparar uma mensagem na tela, sempre que eu chamar essa mensagem aparecerá o hello world

const mensagem = "hello world, ";
alert(mensagem + "abraços!")

// concatenação quando estou acrescentando uma palavra ou algo na mensagem dai utiliza + ex: alert (mensagem + olá), já para colocar um calculo matemático eu utilizo alert(mensagem + (1+2) + isso é um calculo)


html: hypertext markup language
linguagem de maracação de hypertxto
hypertexto são como links em formato de texto, que ao clicar eu saio da página atual e vou a uma nova página

markup tem haver com TAG: uma formatação que se faz no texto, ex: <h1>Colocando um texto na página</h1>

#link: <a href="https://youtube.com">Algum texto</a>
href é informando que aquele llink me levará para o youtube.com

link: <a href="https://youtube.com"  target="_blank">Algum texto</a>
aqui eu coloquei um atributo que quando eu clicar no link abrirá uma nova janela no navegador, se não houver esse atributo a página irá abrir na mesma janela

#dl - é uma lista de descrição
#dt - um termo da lista

a div não tem um significado exato, mas ela serve basicamente para agrupar elementos, e podendo aplicar um script ou um css ao conjunto ue nele foo agrupado

input - é uma entrada, no html eu utilizei um tipo radio, onde a entrada sera uma bolinha para marcar

span também não possui uma definição exata, mas também agrupa elementos só que em linha

a diferença do div e do span, é que o div quebra linha, já o span mantém em linha

todo input terá um valor, nesse caso foi zero, isso significa que quando o input for selecionado ele estará representando o valor zero

name="item": esse atributo foi colocado no input informando que aquele grupo de inputs possuem um name="item", então quando eu marcar um o outro será desmarcado, assim buscando seu valor respetivo

##templete: serve para armazenar um conjunto de códigos, e a qualquer momento me permite chama-la

JavaScript: 

sinal de colchetes: é uma estrutura de dados chamada de array ou vetores, e dentro dele eu posso agrupara vários valores 
ex: 
const perguntas = ["o que tem aqui?", "o que é o javascript?"]

estrutura de dados chamada objeto: eu o atribuo a uma variavel utilizando {}, e dentro dessas chaves eu coloco uma propriedade e um valor sobre aquela variavel
ex: const informcoesDeUmCelular = {
  cor: 'preto',
  tela: '6.5',
  modelo: 'microsoft',
}

a cor, a tela e o modelo são as propriedades
o preto, 6.5 e o miscrosoft são valores atribuidos as propriedades

para acessar um objto em javascript eu utilizo:
alert(celular.cor)
eu estou informando que eu quero saber qual a cor da variavel celular, e será retornado o valor preto

eu posso ter um objeto dentro de uma array, e uma array dentro de um objeto
const var = [
  {
   pergunta: "01",
   resposta: [
     "resposta A",
     "resposta B",
     "resposta C",
   ],
   correta: 2
  }
]


const perguntas = [
  {
    pergunta: "pergunta 01",
    respostas: [
      "Resposta A",
      "Resposta B",
      "Resposta C",
    ],
    Correta: 2
  },
  {
    pergunta: "pergunta 02",
    respostas: [
      "Resposta z",
      "Resposta x",
      "Resposta y",
    ],
    Correta: 2
  },
  {
    pergunta: "pergunta 03",
    respostas: [
      "Resposta u",
      "Resposta k",
      "Resposta ç",
    ],
    Correta: 2
  },
]
alert (perguntas[2].respostas[0])

dentro de uma arry eu posso ter um ou mais valores, e tmabém posso ter outros array dentro de um próprio array, nesse caso minha array é "perguntas", e dentro dela eu tenho objetos, quando eu quero acessar um dado no javascipt eu sempre começo pelo 0
ex: alert(perguntas[0].respostas[0])
eu estou pegando a pergunta zero e a resposta 0
nesse caso será printado: Pergunta 01, Resposta A