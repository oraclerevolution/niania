import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Header from '../../components/Header'
import Icon  from 'react-native-vector-icons/Ionicons'
import QRCode from 'react-qr-code'
import { Snackbar } from 'react-native-paper'

const Receive = ({navigation}) => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

    const copyAdress = () => {
        setMessage('Adresse copiée');
        onToggleSnackBar();
    }

    return (
        <View style={{ flex: 1 }}>
            <Header title="Recevoir de l'argent" return={navigation} showHeader={true} />
            <View style={styles.container}>
                <View style={styles.qrcodeView}>
                    {/* <Image source={require('../../assets/images/coin.png')} style={{ borderWidth: 1, borderRadius: 15, width: 200, height: 200 }} /> */}
                    <QRCode title="dd" value='dqfd' style={{borderRadius: 15}} />
                    <Text style={{ textAlign: "center", marginTop: "4%", fontSize:17, fontWeight: "500" }}>0xazer24gjvjb765fdddfqbj4</Text>
                </View>

                <View style={{flexDirection:'row', width:"80%", borderRadius:10, marginTop:"7%", padding:10, alignItems:"center", backgroundColor:"rgba(160,127,255, 0.2)", marginBottom:"5%"}}>
                    <Icon name='information-circle-outline' color="#000" size={30} />
                    <Text style={{color:"#000", fontWeight:"700", textAlign:"left", fontSize:14, marginLeft:"1%", flex:1}}>Vérifier de façon attentive l'adresse que vous auriez à communiquer pour recevoir votre argent. Nous ne prenons pas en compte les retours de fonds pour le moment.</Text>
                </View>
                <View style={{flexDirection:"row", width:"70%", justifyContent:"space-around", marginTop:"5%"}}>
                    <TouchableOpacity style={{flexDirection:"column", alignItems:"center"}} onPress={copyAdress}>
                        <View style={{width:60, height:60, justifyContent:"center", alignItems:"center", padding:7, borderRadius:50, backgroundColor:"#ac91fc"}}>
                            <Icon name='copy-outline' color="#000" size={30} />
                        </View>
                        <Text style={{color:"#000", fontWeight:"bold", textAlign:"center", marginTop:"3%"}}>Copier</Text>
                    </TouchableOpacity>
                    {/* <View style={{flexDirection:"column", alignItems:"center"}}>
                        <View style={{width:60, height:60, justifyContent:"center", alignItems:"center", padding:7, borderRadius:"50%", backgroundColor:"#ac91fc"}}>
                            <Icon name='create-outline' color="#000" size={32} />
                        </View>
                        <Text style={{color:"#000", fontWeight:"bold", textAlign:"center", marginTop:"3%"}}>Définir le montant</Text>
                    </View> */}
                    <TouchableOpacity style={{flexDirection:"column", alignItems:"center"}}>
                        <View style={{width:60, height:60, justifyContent:"center", alignItems:"center", padding:7, borderRadius:50, backgroundColor:"#ac91fc"}}>
                            <Icon name='share-outline' color="#000" size={32} />
                        </View>
                        <Text style={{color:"#000", fontWeight:"bold", textAlign:"center", marginTop:"3%"}}>Partager</Text>
                    </TouchableOpacity>
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
        </View>
    )
}

export default Receive

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    qrcodeView: {
        borderWidth: 1,
        borderColor: "#efefef",
        padding: 15,
        backgroundColor: "#fff",
        borderRadius: 15
    }
})