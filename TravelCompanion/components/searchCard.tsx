import React from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity} from 'react-native';
import {screenWidth} from "@/app/_layout";
import Ionicons from "@expo/vector-icons/Ionicons";

type props ={
    image?: ImageSourcePropType,
    fullname: string,
    username: string,
    onPress?: () => void,
    onCancel?: () => void,
}
const SearchCard = ({image,fullname,username,onPress,onCancel}:props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={[styles.image]} source={image}/>
            <View style={styles.column}>
                <Text style={styles.text}>{username}</Text>
                <Text style={[styles.subText]}>{fullname}</Text>
            </View>
            <Ionicons onPress={onCancel} style={[styles.closeIcon]} name={'close'} size={20} color={'grey'}/>
        </TouchableOpacity>
    );
};

export default SearchCard;

const styles = StyleSheet.create({
    container: {
        height: 100,
        width:screenWidth,
        paddingHorizontal:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'grey',
        flexDirection: 'row',
        gap:10,
        backgroundColor: 'white',
    },
    column: {
        flex:1
    },
    text: {
        fontSize: 18,
        fontFamily:'Nunito-Bold'

    },
    subText: {
        fontSize: 16,
        fontFamily:'Nunito-SemiBold',
        color:'grey'
    },
    image: {
        width:80,
        height:80,
        borderRadius:100,
        borderWidth: StyleSheet.hairlineWidth,
        overflow: 'hidden',
    },
    closeIcon: {
        paddingRight:10
    }
});

