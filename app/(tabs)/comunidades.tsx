import { StyleSheet, View, Text } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>

            <View style={styles.conversa}>
                <View style={styles.foto} />

                <View>
                    <Text style={styles.nome}>Nova Comunidade</Text>
                </View>
            </View>

            <View style={styles.conversa}>
                <View style={styles.foto} />
                <View>
                    <Text style={styles.nome}>Avisos Etec</Text>
                    <Text style={styles.mensagem}>Informações para amanhã...</Text>
                </View>
            </View>

            <View style={styles.conversa}>
                <View style={styles.foto} />

                <View>
                    <Text style={styles.nome}>Família Silva</Text>
                    <Text style={styles.mensagem}>Tia Neide, a senhora não pode acreditar em tudo que vê na intern...</Text>
                </View>
            </View>

            <Text style={styles.msg}> -  Ver todos</Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: "#111B21",
    },

    conversa: {
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

    mensagem: {
        fontSize: 14,
        color: "#8696A0",
        marginTop: 5,
    },

    msg: {
        fontSize: 14,
        color: "gray",
        marginTop: 20,
        marginLeft: 20,
        cursor: "pointer"
    },

    foto: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: "#ccc",
        marginRight: 12,
    }
});