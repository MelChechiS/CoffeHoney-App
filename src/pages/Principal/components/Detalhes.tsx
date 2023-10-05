import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, View } from "react-native";
import coffe from '../../../../assets/coffe.jfif'

type Props = {
  nome: string
  nomeplace: string
  descricao: string
  preco: string
}

export default function Detalhe({nome, nomeplace, descricao, preco}: Props) {
  return (
    <>
      <Text style={estilos.nome}>{nome}</Text>

      <View style={estilos.fazenda}>
        <Image style={estilos.imagemFazenda} source={coffe}></Image>
        <Text style={estilos.nomeFazenda}>{nomeplace}</Text>
      </View>

      <Text style={estilos.descricao}>
      {descricao}
      </Text>
      <Text style={estilos.preco}>{preco}</Text>
      <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.textobotao}>Comprar</Text>
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    fontFamily: "MontserratBold",
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontFamily: "MontserratItalic",
  },
  preco: {
    fontSize: 26,
    fontFamily: "MontserratRegular",
    color: "#2A9F85",
    marginTop: 8,
  },
  botao: {
 marginTop: 16,
 backgroundColor: "#FF69B4",
 paddingVertical: 16,
 borderRadius: 6
  },
  textobotao: {
textAlign: "center",
color: "#ffffff",
fontSize: 16,
lineHeight: 26,
fontFamily: "MontserratBold"
  }
});