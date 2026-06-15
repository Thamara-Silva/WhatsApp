import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#202C33",
                },
                headerTintColor: "white",
                tabBarStyle: {
                    backgroundColor: "#202C33",
                },
                tabBarActiveTintColor: "#25D366",

                tabBarInactiveTintColor: "#8696A0",

                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "#d2d2d2"
                },

                headerRight: () => (
                    <View style={{ flexDirection: "row", marginRight: 10 }}>
                        <TouchableOpacity style={{ marginHorizontal: 10 }}>
                            <Ionicons name="search" size={24} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="ellipsis-vertical" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                ),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "WhatsApp",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="chatbubbles" size={size} color={color} />
                    ),

                    headerTitleStyle: {
                        color: "#25D366",
                        fontWeight: "bold",
                        fontSize: 20,
                    },
                }}

            />

            <Tabs.Screen
                name="status"
                options={{
                    title: "Status",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="camera" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="comunidades"
                options={{
                    title: "Comunidades",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="people" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="ligacoes"
                options={{
                    title: "Ligações",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="call" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}