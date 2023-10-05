import coffe from '../../assets/coffe.jfif';

const receita = {
    topo: {
        titulo: "Melhores Receitas",
    },
    detalhes: {
        nome: "Cardápio da Coffee-Honey",
        nomeplace: "Etec Cidade do Livro",
        descricao: "Um delicioso café gourmet com xícara rosa",
        preco: "R$ 10,00",
        botao: "Comprar",
    },
    itens: {
      titulo: "Receitas da Cafeteria",
      lista: [
        {
          nome: "Café Gourmet",
          imagem: coffe,
        }
      ]
    }
  }

export default receita;