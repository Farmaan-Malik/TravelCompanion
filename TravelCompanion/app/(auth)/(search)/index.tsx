import {View, Text, StyleSheet, ScrollView, TextInput} from 'react-native'
import React, {useRef} from 'react'
import {SafeAreaView} from 'react-native-safe-area-context'
import {globalStyles} from '@/assets/styles/globalStyles'
import CustomTextInput from "@/components/CustomTextInput";
import SearchCard from "@/components/searchCard";

const GroupsTab = () => {
    const ref = useRef<TextInput>(null)
    return (
        <SafeAreaView edges={['top']} style={[globalStyles.container]}>
            <View style={[styles.headerRow]}>
                <CustomTextInput ref={ref} containerStyle={[styles.textInput]} placeholder={'Search User'} onChangeText={() => {
                }}/>
                {
                    ref.current?.focus() ?
                        <Text style={[styles.headerText]}>Cancel</Text> :
                <Text style={[styles.headerText]}>Search</Text>


                }
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