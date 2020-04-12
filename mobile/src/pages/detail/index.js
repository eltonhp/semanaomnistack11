import React from 'react';
import {Feather} from '@expo/vector-icons';
import {Image, Text, View, TouchableOpacity, Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import styles from '../detail/styles';
import logoImg from "../../assets/logo.png";
import * as MailComposer from 'expo-mail-composer';


export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor 
    ${Intl.NumberFormat('pt-BR',
        {style: 'currency',
            currency: 'BRL'})
        .format(incident.value)}`;

    function navigateBack() {
        navigation.goBack();
    }
    function sendMain() {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message
        });
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <TouchableOpacity onPress={navigateBack}>
                   <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text sytle={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text sytle={styles.incidentvalue}>incident.name de {incident.city}/{incident.uf}</Text>

                <Text sytle={styles.incidentProperty}>Caso:</Text>
                <Text sytle={styles.incidentvalue}>{incident.title}</Text>

                <Text sytle={styles.incidentProperty}>VALOR</Text>
                <Text sytle={styles.incidentvalue}>
                    {Intl.NumberFormat('pt-BR',
                        {style: 'currency',
                            currency: 'BRL'})
                        .format(incident.value)}
                </Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}> Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>
                    Entre em contato:
                </Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMain}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
