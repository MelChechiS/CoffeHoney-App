import React from "react";
import { StyleSheet, View } from "react-native";
import receita from '../Principal/mocks/receitas';
import Detalhe from '../Principal/components/Detalhes';
import Capa from '../Principal/components/Capa';

export default function CoffeHoney() {
  return (
    <>
      <Capa titulo={receita.topo.titulo} />
      <View style={estilos.list}>
        <Detalhe
        nome={receita.detalhes.nome}
        nomeplace={receita.detalhes.nomeplace}
        descricao={receita.detalhes.descricao}
        preco={receita.detalhes.preco}
        />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
    
  list: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});