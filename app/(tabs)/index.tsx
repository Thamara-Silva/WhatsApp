import { StyleSheet, View, Text, TouchableOpacity , Image} from "react-native";

export default function Index() {
    return (




        <View style={styles.container}>

            <View style={styles.filtros}>


                <TouchableOpacity style={[styles.filtro, styles.filtroAtivo]}    >
                    <Text style={[styles.textoFiltro, styles.filtroAtivo]}>
                        Todas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filtro}>
                    <Text style={styles.textoFiltro}>
                        Não lidas 2
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.filtro}>
                    <Text style={styles.textoFiltro}>
                        Favoritos
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.filtro}>
                    <Text style={styles.textoFiltro}>
                        Grupos 3
                    </Text>
                </TouchableOpacity>



            </View>


            <View style={styles.conversa}>
                <Image source={require("../../assets/nicole.jpg")} style={styles.foto} />

                <View style={styles.info}>
                    <Text style={styles.nome}>Nicole</Text>
                    <Text style={styles.mensagem}>Ô bixa</Text>
                </View>
                <Text style={styles.hrs}>14:45</Text>
            </View>


            <View style={styles.conversa}>
                <Image source={require("../../assets/julia.jpg")} style={styles.foto} />

                <View style={styles.info}>
                    <Text style={styles.nome}>Julia</Text>
                    <Text style={styles.mensagem}>O escorbuto</Text>
                </View>
                <Text style={styles.hrs}>16:00</Text>
            </View>


            <View style={styles.conversa}>
                <Image source={require("../../assets/gabi.jpg")} style={styles.foto} />

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

    filtros: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 35,
        alignItems: "center",
        gap: 10,
    },

    filtro: {
        paddingVertical: 8,
        paddingHorizontal: 14,
        backgroundColor: "#3841467c",
        borderWidth: 1,
        borderColor: "#384146",
        borderRadius: 20,
    },

    filtroAtivo: {
        backgroundColor: "#204b30bd",
        borderColor: "#919191",
        color: "white",
        borderRadius: 20,
        fontSize: 14,

    },

    textoFiltro: {
        color: "#bebebe",
        fontSize: 13,
        fontWeight: "500",
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
        marginRight: 12,
    }
});