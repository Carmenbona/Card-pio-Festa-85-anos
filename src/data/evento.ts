// Todo o conteúdo do evento fica aqui — edite este arquivo para mudar textos e cardápios.

export const img = (file: string, w: number) =>
  `/.netlify/images?url=/img/${file}&w=${w}&fm=webp`

export const evento = {
  nome: 'PEU 85 Anos',
  titulo: 'Jantar de Celebração',
  slogan: 'Energizando o Futuro',
  data: '19 de novembro de 2026',
  duracao: '5 horas de festa',
}

export const cardapio = [
  {
    titulo: 'Entradas',
    itens: ['Coxinha de frango', 'Bolinho de queijo', 'Batata frita', 'Quibe frito', 'Mandioca frita'],
  },
  { titulo: 'Carnes', itens: ['Maminha ou fraldinha', 'Linguiça', 'Frango'] },
  {
    titulo: 'Saladas',
    itens: ['Maionese de legumes', 'Alface', 'Agrião', 'Rúcula', 'Cenoura', 'Pepino', 'Cebola', 'Vinagrete', 'Tomate'],
  },
  { titulo: 'Guarnições', itens: ['Arroz branco', 'Farofa', 'Pão', 'Batata frita', 'Mandioca'] },
  {
    titulo: 'Bebidas',
    itens: ['Coca-Cola', 'Coca-Cola Zero', 'Guaraná Antarctica', 'Suco'],
  },
]

export const coqueteis = [
  { nome: 'Mojito', desc: 'Rum, suco de limão fresco, hortelã e água com gás' },
  { nome: 'Espanhola', desc: 'Vinho tinto, abacaxi e leite condensado' },
  { nome: 'Sex on the Beach', desc: 'Vodka, suco de pêssego, suco de laranja e xarope de grenadine' },
]

export const bar = [
  { titulo: 'Caipirinhas', itens: ['Caipirinha de cachaça', 'CaipVodka', 'CaipSake'] },
  { titulo: 'Bebidas', itens: ['Vodka', 'Sake', 'Cachaça', 'Vinho', 'Rum'] },
  { titulo: 'Sodas italianas', itens: ['Maçã verde', 'Frutas vermelhas'] },
]

export const monteSeuDrink = {
  frutas: ['Morango', 'Limão', 'Laranja', 'Limão siciliano', 'Abacaxi', 'Maracujá'],
  complementos: ['Hortelã', 'Leite condensado', 'Rúcula', 'Grenadine', 'Açúcar'],
}

export const sobremesas = [
  {
    nome: 'Bolo folhado de morango',
    desc: 'Camadas crocantes de massa folhada, creme suave e morangos frescos.',
    imagem: 'bolo-folhado-morango.png',
  },
  {
    nome: 'Mousse de chocolate',
    desc: 'Aerada, intensa e finalizada com raspas de chocolate.',
    imagem: 'mousse-chocolate.png',
  },
  {
    nome: 'Picolés Bids',
    desc: 'Sabores variados para refrescar a noite.',
    imagem: 'picoles.png',
  },
]

export const atracoes = [
  {
    nome: 'Sinuca',
    desc: 'Mesa liberada a noite toda para desafiar os colegas.',
    imagem: 'sinuca.png',
  },
  {
    nome: 'Pebolim',
    desc: 'Monte seu time e dispute partidas rápidas e animadas.',
    imagem: 'pebolin.png',
  },
  {
    nome: 'Plataforma 360°',
    desc: 'Grave vídeos em 360° e registre os melhores momentos da festa.',
    imagem: 'plataforma-360.png',
  },
]
