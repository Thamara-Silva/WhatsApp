import Feather from '@expo/vector-icons/Feather';
import { Image, StyleSheet, Text, View, } from "react-native";


export default function Index() {
    return (
        <View style={styles.container}>

            <View style={styles.ligacao}>
                <Image source={require("../../assets/nicole.jpg")} style={styles.foto} />

                <View>
                    <Text style={styles.atendida}>Nicole</Text>
                    <Text style={styles.mensagem}>Hoje 15:00</Text>
                    <Feather name="phone" style={styles.icon} />
                </View>                    

            </View>

            <View style={styles.ligacao}>
                <Image source={require("../../assets/julia.jpg")} style={styles.foto} />
                <View>
                    <Text style={styles.perdida}>Julia</Text>
                    <Text style={styles.mensagem}>Ontem 19:00</Text>
                </View>
            </View>

            <View style={styles.ligacao}>
                <Image source={require("../../assets/gabi.jpg")} style={styles.foto} />

                <View>
                    <Text style={styles.atendida}>Gabi</Text>
                    <Text style={styles.mensagem}>2 de junho 13:00</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: "#111B21",
    },

    ligacao: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#384146",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",

    },

    atendida: {
        fontSize: 17,
        fontWeight: "bold",
        color: "green"
    },

    perdida: {
        fontSize: 18,
        fontWeight: "bold",
        color: "red"
    },

    mensagem: {
        fontSize: 14,
        color: "#8696A0",
        marginTop: 5,
    },

    foto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#ccc",
        marginRight: 12,
    },

    icon: {
        fontSize: 20,
        color: "#d2d2d2",
    },
});