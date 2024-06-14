import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, SafeAreaView, Platform } from 'react-native'
import React, { useState, useAffect } from 'react'
import Header from '../components/Header'
import { Button, TextInput, Snackbar } from 'react-native-paper'
import Icon from "react-native-vector-icons/Ionicons"

const Home = ({ navigation }) => {
    const [message, setMessage] = useState("")
    const [visible, setVisible] = useState(false);
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

    const copyAdress = () => {
        setMessage('Adresse copiée');
        onToggleSnackBar();
    }

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Received from Assia Jean',
            date: "22 Jun - 10.30AM",
            amount: "2500",
            icon: "arrow-down"
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Send to Yann Doe',
            date: "22 Jun - 10.30AM",
            amount: "5000",
            icon: "send"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Send to Regis Animan',
            date: "22 Jun - 10.30AM",
            amount: "10000",
            icon: "send"
        },
    ];

    const Item = ({ id, title, date, amount, icon }) => (
        <View style={{ flex: 1, flexDirection: "row", height: 50, marginTop: "3%" }}>
            {Platform.OS === "ios" ? (
                <View style={{ flex: 0.7, borderRadius: 20, backgroundColor: "#f6f6f6", justifyContent: "center", alignItems: "center" }}>
                    <Icon name={icon} size={20} />
                </View>
            ):(
                <View style={{ flex: 0.7, height: 40, borderRadius: 20, backgroundColor: "#f6f6f6", justifyContent: "center", alignItems: "center" }}>
                    <Icon name={icon} size={20} />
                </View>
            )}
            <View style={{ flex: 3.5, flexDirection: "column", justifyContent: "center", marginLeft: 10, position:"relative", bottom:3 }}>
                <Text style={{ fontSize: 17 }}>{title}</Text>
                <Text style={{ color: 'gray' }}>{date}</Text>
            </View>
            <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
                {icon === 'arrow-down' ? (
                    <Text style={{ color: "#26b681", fontWeight: '700' }}>+{formatAmount(amount)} FCFA</Text>
                ) : (
                    <Text style={{ color: "red", fontWeight: '700' }}>-{formatAmount(amount)} FCFA</Text>
                )}
            </View>
        </View>
    );

    const formatAmount = (amount) => {
        if (amount >= 10000) {
          const thousands = Math.floor(amount / 1000);
          return `${thousands}k`;
        }
        return `${amount}`;
    };

    return (
        <View style={styles.container}>
            <Header title="Accueil" />
            <View style={{ flex: 1 }}>
                <View style={styles.view}>
                    {Platform.OS === "ios" ? (
                        <View style={styles.balanceView}>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={{ color: "#000", marginRight: "3%", fontWeight: "bold", textAlign: "center", fontSize: 20, marginBottom: "2%" }}>0xazer24gjvjb7654</Text>
                            <Icon name="copy-outline" onPress={() => copyAdress()} size={25} color="#000" />
                        </View>
                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 25, marginBottom: "2%", textAlign:"center" }}>189,384 FCFA</Text>
                        <Text style={{ color: "#000", fontSize: 14, marginBottom: "0%", position:"relative", bottom:7, textDecorationLine:"underline", textAlign:"center" }}>Détails du compte</Text>
                        <Button mode="outlined" style={{ borderColor: "#000", backgroundColor: "#000" }} labelStyle={{ color: "#fff" }}>Recharger mon compte</Button>
                    </View>
                    ):(
                        <View style={styles.balanceView}>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={{ color: "#000", marginRight: "3%", fontWeight: "bold", textAlign: "center", fontSize: 20, marginBottom: "2%" }}>0xazer24gjvjb7654</Text>
                            <Icon name="copy-outline" onPress={() => copyAdress()} size={25} color="#000" />
                        </View>
                        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 25, marginBottom: "2%", textAlign:"center" }}>189,384 FCFA</Text>
                        <Text style={{ color: "#000", fontSize: 14, marginBottom: "0%", position:"relative", bottom:7, textDecorationLine:"underline", textAlign:"center" }}>Détails du compte</Text>
                        <Button mode="outlined" style={{ borderColor: "#000", backgroundColor: "#000" }} labelStyle={{ color: "#fff" }}>Recharger mon compte</Button>
                    </View>
                    )}
                    <View style={styles.transactionView}>
                        <TouchableOpacity style={styles.sendView} onPress={() => navigation.navigate('Send')}>
                            <View style={{ flex: 2 }}>
                                <View style={{ width: "40%", justifyContent: "center", alignItems: "center", height: "90%", borderRadius: 50, backgroundColor: "#b298fc" }}>
                                    <Icon name="send" size={40} color="#000" />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                                <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20, marginBottom: "2%" }}>Send</Text>
                                <Text style={{ color: "#000", fontWeight: "500", fontSize: 15, marginBottom: "2%" }}>23</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.transferView} onPress={() => navigation.navigate("Receive")}>
                            <View style={{ flex: 2 }}>
                                <View style={{ width: "40%", justifyContent: "center", alignItems: "center", height: "90%", borderRadius: 50, backgroundColor: "#48c295" }}>
                                    <Icon name="arrow-down" size={40} color="#000" />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
                                <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20, marginBottom: "2%" }}>Receive</Text>
                                <Text style={{ color: "#000", fontWeight: "500", fontSize: 15, marginBottom: "2%" }}>34</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.viewHistory}>
                    <View style={{ flexDirection: "row", width: "100%", flex: 1, alignItems: "center" }}>
                        <TextInput placeholder='Recherchez une transaction' underlineColor="#efefef" style={styles.searchTextInout} label="Recherchez une transaction" />
                        <View style={{ flex: 1, height: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#efefef", borderRadius: 10 }}>
                            <Icon name="options" size={30} color="#000" />
                        </View>
                    </View>
                    <SafeAreaView>
                        <FlatList
                            data={DATA}
                            renderItem={({ item }) => <Item id={item.id} title={item.title} date={item.date} amount={item.amount} icon={item.icon} />}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                </ScrollView>
            </View>
            <Snackbar 
                    visible={visible} 
                    onDismiss={onDismissSnackBar}
                    action={{
                        label: 'Compris !',
                        onPress: () => {
                        onDismissSnackBar();
                        },
                    }}
                >
                    {message}
                </Snackbar>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    view: {
        width: "100%",
        flex: 1
    },
    searchTextInout: {
        flex: 6, 
        marginRight: "2%", 
        backgroundColor: "#efefef", 
        borderRadius: 5
    },
    balanceView: {
        width: "98%",
        flex: 1,
        padding: 10,
        backgroundColor: "#cef055",
        borderRadius: 10,
        position: "relative",
        marginBottom: "2%",
        margin: 6,
        justifyContent: "center"
    },
    transactionView: {
        width: "100%",
        borderWidth: 1,
        flex: 1,
        backgroundColor: "#000",
        flexDirection: "row"
    },
    sendView: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "#ac91fc",
        margin: "1%",
        padding: "2%"
    },
    transferView: {
        flex: 1,
        backgroundColor: "#26b681",
        borderRadius: 10,
        margin: "1%",
        padding: "2%"
    },
    viewHistory: {
        width: "97%",
        flex: 1,
        backgroundColor: "#fff",
        margin: "2%",
        padding: "2%"
    },

})