import {View, Text, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {globalStyles} from '@/assets/styles/globalStyles'
import Header from "@/components/Header";
import CustomTextInput from "@/components/CustomTextInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchCard from "@/components/searchCard";

const GroupsTab = () => {
    return (
        <SafeAreaView edges={['top']} style={[globalStyles.container]}>
            <View style={[styles.headerRow]}>
                <CustomTextInput containerStyle={[styles.textInput]} placeholder={'Search User'} onChangeText={() => {
                }}/>
                {/*<Ionicons style={[styles.headerIcon]} name={'search'} size={30} color={'grey'}/>*/}
                <Text style={[styles.headerText]}>Search</Text>
            </View>
            <View style={[globalStyles.mainView]}>
                <ScrollView contentContainerStyle={[styles.scrollContent]}>
                    <SearchCard fullname={'Farmaan Malik'} username={'BrownShroom'}/>
                    <SearchCard fullname={'Farmaan Malik'} username={'BrownShroom'}/>
                    <SearchCard fullname={'Farmaan Malik'} username={'BrownShroom'}/>
                    <SearchCard fullname={'Farmaan Malik'} username={'BrownShroom'}/>
                    <SearchCard fullname={'Farmaan Malik'} username={'BrownShroom'}/>
                    <SearchCard fullname={'Farmaan Malik'} username={'BrownShroom'}/>
                    <SearchCard fullname={'Farmaan Malik'} username={'BrownShroom'}/>
                    <SearchCard fullname={'Farmaan Malik'} username={'BrownShroom'}/>
                    <SearchCard fullname={'Farmaan Malik'} username={'BrownShroom'}/>
                    <SearchCard fullname={'Farmaan Malik'} username={'BrownShroom'}/>
                    <SearchCard fullname={'Farmaan Malik'} username={'BrownShroom'}/>
                    <SearchCard fullname={'Farmaan Malik'} username={'BrownShroom'}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default GroupsTab

const styles = StyleSheet.create({
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerIcon: {
        borderWidth: 1,
        paddingLeft: 5
    },
    textInput: {
        flex: 1,
    },
    scrollContent: {
        paddingTop: 10
    },
    headerText: {
        fontSize: 14,
        color: 'grey',
        paddingRight: 10
    }
})