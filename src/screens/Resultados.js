import React, { useState } from 'react';
import { StyleSheet, TextInput, View, StatusBar, SafeAreaView, ImageBackground, Keyboard } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import axios from 'axios';

const Results = ({ navigation, route }) => {
    const choice = route.params.choice;
    const link = `http://rapi.giphy.com/v1/${choice}/search`;
    const { text, setText } = useState("");

    const { data, setData } = useState([])

    const finder = async (text) => {
        Keyboard.dismiss();

        try {
            const results = await axios.get(link, {
                params: {
                    api_key: "lpIUQtbNoalet5BiOHYnRr05hzWism1G",
                    q: text,
                    lang: "pt"
                }
            })
            console.log(results)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <ImageBackground
            source={require("../../assets/BG.png")}
            style={styles.container}
        >
            <SafeAreaView style={styles.view}>
                <View style={styles.header}>
                    <Ionicons
                        style={styles.icon}
                        name="chevron-back"
                        size={40}
                        color="white"
                        onPress={() => { navigation.pop() }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Pesquisar'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}
                    />
                    <Ionicons
                        style={styles.icon}
                        name="search"
                        size={40}
                        color="white"
                        onPress={() => { }}
                    />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    view: {
        marginTop: StatusBar.currentHeight + 30,
    },
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    input: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 15,
        fontSize: 20,
        paddingHorizontal: 10,
        marginRight: 5
    },
    icon: {
        marginHorizontal: 10
    }
})

export default Results;
