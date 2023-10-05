import React from 'react';
import { Text, Image, StyleSheet, Dimensions } from 'react-native';
import place from "../../../../assets/place.jfif";

const width = Dimensions.get("screen").width;

type Props = {
    titulo: string
}

export default function Capa({titulo}: Props) {
    return <>
     <Image style={estilos.topo} source={place} />
     <Text style={estilos.titulo}>{titulo}Cardápio da Cafeteria</Text>
    </>
}

const estilos = StyleSheet.create({

    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
      width: "100%",
      position: "absolute",
      color: "white",
      textAlign: "center",
      fontSize: 24,
      lineHeight: 26,
      padding: 16,
      fontFamily: "MontserratItalic",
    },
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold"
    }
  });
