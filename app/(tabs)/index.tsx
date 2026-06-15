import { StyleSheet, View, Text } from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>


            <View style={styles.conversa}>
                <View style={styles.foto} />

                <View style={styles.info}>
                    <Text style={styles.nome}>Nicole</Text>
                    <Text style={styles.mensagem}>Ô bixa</Text>
                </View>
                <Text style={styles.hrs}>14:45</Text>
            </View>


            <View style={styles.conversa}>
                <View style={styles.foto} />

                <View style={styles.info}>
                    <Text style={styles.nome}>Julia</Text>
                    <Text style={styles.mensagem}>O escorbuto</Text>
                </View>
                <Text style={styles.hrs}>16:00</Text>
            </View>


            <View style={styles.conversa}>
                <View style={styles.foto} />

                <View style={styles.info}>
                    <Text style={styles.nome}>Gabi</Text>
                    <Text style={styles.mensagem}>:)</Text>
                </View>
                <Text style={styles.hrs}>19:00</Text>
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

    conversa: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#384146",
        flexDirection: "row",
        alignItems: "center",
        cursor:"pointer",
        
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

    info: {
        flex: 1,
    },

    hrs: {
        fontSize: 12,
        color: "gray",
        marginRight: 10,
    },

    foto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#ccc",
        marginRight: 12,
    }
});