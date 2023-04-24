import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    ImageBackground,
    StatusBar,
    SafeAreaView,
    Image
} from 'react-native';
import { Ionicons } from "react-native-vector-icons";

const Details = ({ navigation, route }) => {
    const data = route.params.item;

    return (
        <ImageBackground
            source={require("../../assets/BG.png")}
            style={styles.container}
        >
            <SafeAreaView style={styles.view}>
                <View style={styles.header}>
                    <Ionicons
                        name="chevron-back"
                        size={40}
                        color="white"
                        onPress={() => { navigation.pop() }}
                    />
                    <Text style={styles.textTitle}>Detalhes</Text>
                </View>

                <View style={styles.imageContainer}>
                    <Image
                        style={{ flex: 1 }}
                        source={{ uri: data.images.original.url }}
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.text}>{ data.title }</Text>
                <Ionicons 
                    name="globe"
                    size={40}
                    color="white"
                />
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight + 20,
    },
    textTitle: {
        color: "white",
        fontSize: 22,
        marginLeft: 15
    },
    text: {
        color: "white",
        fontSize: 18
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
    },
    imageContainer: {
        width: "100%",
        height: "50%",
        backgroundColor: "rgba(171,171,171,0.8)",
        textAlign: "center"        
    }
})

export default Details;
