import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 20,
    },
    instructions: {
        color: "#888",
        fontSize: 18,
        marginHorizontal: 15,
        marginBottom: 10,
    },
});

export default function Home() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
                style={styles.logo}
            />
            <Text style={styles.instructions}>
                To share a photo from your phone with a friend, just press the
                button below!
            </Text>

            <Button
                onPress={() => {
                    alert("You tapped the button!");
                }}
                title="Press Me"
            />
        </View>
    );
}
