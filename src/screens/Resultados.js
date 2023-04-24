import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Keyboard,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import axios from "axios";
import API_KEY from "../../API_KEY";
import Cabecalho from "../components/Cabecalho"

const { width, height } = Dimensions.get("window");
const IMAGE_WIDTH =  width;

const Resultados = ({ navigation, route }) => {
  const choice = route.params.choice;
  const link = `https://api.giphy.com/v1/${choice}/search`;
  const [text, setText] = useState("");

  const [data, setData] = useState([]);

  const solicitar = async (text) => {
    Keyboard.dismiss();
    try {
      const resultados = await axios.get(link, {
        params: {
          api_key: API_KEY,
          q: text,
          lang: "pt",
        },
      });
      setData(resultados.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/BG.png")}
      style={styles.container}
    >
      <SafeAreaView style={styles.view}>
        <Cabecalho 
            navigation={navigation} 
            text={text}
            setText={setText}
            solicitar={solicitar}
        />
        <FlatList 
            data={data}
            keyExtractor={(element) => {element.id}}
            numColumns={2}
            renderItem={({item}) => {
                return(
                    <TouchableOpacity
                        onPress={()=>{ navigation.navigate("Detalhes", {
                            item: item,
                        })}}
                    >

                        <Image 
                            style={styles.image}
                            source={{ uri: item.images.preview_gif.url }}
                        />
                    </TouchableOpacity>
                )
            }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  view: {
    marginTop: StatusBar.currentHeight + 20,
  },
  image: {
    width: IMAGE_WIDTH*0.4,
    height: IMAGE_WIDTH*0.4,
    margin: 10,
  }
});

export default Resultados;