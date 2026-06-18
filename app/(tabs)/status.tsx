import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>


            <TouchableOpacity style={styles.status_eu}>
                <Image source={require("../../assets/nicole.jpg")} style={styles.foto} />

                <View>
                    <Text style={styles.nome}>Meu status</Text>
                    <Text style={styles.mensagem}>Toque para ver ou atualizar seu status</Text>
                </View>
            </TouchableOpacity>




            <TouchableOpacity style={styles.status}>
                <Image source={require("../../assets/nicole.jpg")} style={styles.foto} />

                <View>
                    <Text style={styles.nome}>Nicole</Text>
                    <Text style={styles.mensagem}>Agora mesmo</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.status}>
                <Image source={require("../../assets/julia.jpg")} style={styles.foto} />
                <View>
                    <Text style={styles.nome}>Julia</Text>
                    <Text style={styles.mensagem}>Há 15 segundos</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.status}>
                <Image source={require("../../assets/gabi.jpg")} style={styles.foto} />
                <View>
                    <Text style={styles.nome}>Gabi</Text>
                    <Text style={styles.mensagem}>Hoje às 14:45</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: "#111B21",
    },


    status_eu: {
        padding: 18,
        borderBottomWidth: 1,
        borderBottomColor: "#384146",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",

    },

    status: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#384146",
        flexDirection: "row",
        alignItems: "center",
        cursor: "pointer",

    },

    nome: {
        fontSize: 17,
        fontWeight: "bold",
        color: "white",
    },

    foto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },

    mensagem: {
        fontSize: 14,
        color: "#8696A0",
        marginTop: 5,
    }
});