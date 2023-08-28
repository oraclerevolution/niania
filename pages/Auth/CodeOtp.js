import { StyleSheet, Text, View, Image } from 'react-native'
import React,{useState} from 'react'
import Header from '../../components/Header'
import { OtpInput } from 'react-native-otp-entry'
import { Button, Snackbar } from 'react-native-paper'

const CodeOtp = ({ navigation }) => {
    const [otp, setOtp] = useState("");
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");
    const onToggleSnackBar = () => setVisible(!visible);
    const onDismissSnackBar = () => setVisible(false);

    const validateOTP = () => {
        if(otp.length === 6 && otp === "123456"){
            navigation.navigate('TabNavigator')
        }else{
            setMessage("Code OTP incorrect, réessayez !")
            onToggleSnackBar()
        }
    }

    const displayValidateButton = (otp) => {
        if(otp.length === 6){
            return <Button mode='outlined' style={styles.boutonLogin} labelStyle={{fontWeight: "bold", fontSize: 17}} onPress={validateOTP}>Valider</Button>
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <Header title="Vérification OTP" showHeader={true} return={navigation} />
            <View style={styles.container}>
                <Image source={require('../../assets/images/otp.png')} style={{ width: 300, height: 200 }} />
                <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20, textAlign:"center", marginBottom: "6%" }}>Veuillez entrez le code OTP que vous avez reçu par sms ou par email</Text>
                <OtpInput
                    numberOfDigits={6}
                    focusColor="#7c55fe"
                    onTextChange={(code) => setOtp(code)}
                />
                <Text style={{ color: "#ac91fc", textDecorationLine: "underline", fontWeight: "bold", fontSize: 15, marginTop: "6%" }}>Renvoyez le code</Text>
                {displayValidateButton(otp)}
            </View>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Compris !',
                    onPress: () => {
                    onDismissSnackBar();
                    }
                }}
            >
                {message}
            </Snackbar>
        </View>
    )
}

export default CodeOtp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#fff",
        padding:12
    },
    boutonLogin:{
        marginTop:"7%",
        borderColor:"#ac91fc",
        width:200
    }
})