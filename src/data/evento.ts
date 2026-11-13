// Todo o conteúdo do evento fica aqui — edite este arquivo para mudar textos e cardápios.

export const img = (file: string, w: number) =>
  `/.netlify/images?url=/img/${file}&w=${w}&fm=webp`

export const evento = {
  nome: 'PEU 85 Anos',
  titulo: 'Confraternização',
  subtitulo: '85 anos',
  slogan: 'Energizando o Futuro',
  data: '19 de novembro de 2026',
  horario: 'A partir das 17h30',
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

export const chope = { nome: 'Chope', desc: 'Cevada Pura' }

export const monteSeuDrink = {
  frutas: ['Morango', 'Limão', 'Laranja', 'Limão siciliano', 'Abacaxi', 'Maracujá'],
  complementos: ['Hortelã', 'Leite condensado', 'Rúcula', 'Grenadine', 'Açúcar'],
}

export const sobremesas = [
  {
    nome: 'Bolo folhado de morango',
    desc: 'Camadas crocantes de massa folhada, creme suave e morangos frescos.',
  },
  {
    nome: 'Bolo de mousse de chocolate',
    desc: 'Camadas de mousse aerada e intensa, finalizadas com raspas de chocolate.',
  },
  {
    nome: 'Picolés Bids',
    desc: 'Chocolate, leite condensado, limão, uva e abacaxi.',
  },
]

export const atracoes = [
  { nome: 'Cantor e DJ Geninho' },
  { nome: 'Sinuca' },
  { nome: 'Pebolim' },
  { nome: 'Plataforma 360°' },
  { nome: 'Sorteio de brindes' },
  { nome: 'Homenagem por tempo de casa' },
]
