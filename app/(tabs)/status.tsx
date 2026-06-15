import { StyleSheet, View, Text } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>


            <View style={styles.status_eu}>
                <View style={styles.foto} />

                <View>
                    <Text style={styles.nome}>Meu status</Text>
                    <Text style={styles.mensagem}>Toque para ver ou atualizar seu status</Text>
                </View>
            </View>




            <View style={styles.status}>
                <View style={styles.foto} />

                <View>
                    <Text style={styles.nome}>Nicole</Text>
                    <Text style={styles.mensagem}>Agora mesmo</Text>
                </View>
            </View>

            <View style={styles.status}>
                <View style={styles.foto} />
                <View>
                    <Text style={styles.nome}>Julia</Text>
                    <Text style={styles.mensagem}>Há 15 segundos</Text>
                </View>
            </View>

            <View style={styles.status}>
                <View style={styles.foto} />

                <View>
                    <Text style={styles.nome}>Gabi</Text>
                    <Text style={styles.mensagem}>Hoje às 14:45</Text>

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
        backgroundColor: "#ccc",
        marginRight: 12,
        borderWidth: 3,
        borderColor: "#25D366",
    },

    mensagem: {
        fontSize: 14,
        color: "#8696A0",
        marginTop: 5,
    }
});