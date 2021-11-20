import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=5")
            .then((res) => res.json())
            .then((data) => setDoctors(data.results));
    }, []);

    return (
        <View>
            <Text>Top Doctors</Text>
            <ScrollView>
                {doctors.map((doctor) => (
                    <View key={doctor.email}>
                        <Text>
                            Name: {doctor.name.title} {doctor.name.first}{" "}
                            {doctor.name.last}
                        </Text>

                        <Text>Email: {doctor.email}</Text>
                        <Image
                            source={{
                                uri: `${doctor.picture.large}`,
                            }}
                            style={{ width: 200, height: 200 }}
                        />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
