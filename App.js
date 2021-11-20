import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { Routes } from "react-router";
import { Link, NativeRouter, Routes, Route } from "react-router-native";
import Doctors from "./components/Doctors/Doctors";
import Home from "./components/Home/Home";

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hello React Native!</Text>
            <Text>Doctors Finder APP!</Text>
            <StatusBar style="auto" />
            <NativeRouter>
                <Link to="/">
                    <Text>Home</Text>
                </Link>
                <Link to="/home">
                    <Text>Home</Text>
                </Link>
                <Link to="/doctors">
                    <Text>Doctors</Text>
                </Link>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/doctors" element={<Doctors />} />
                </Routes>
            </NativeRouter>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
