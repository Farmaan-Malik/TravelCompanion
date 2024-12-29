import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Stack} from "expo-router";

const _layout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen
            name={'index'}
            />
        </Stack>
    );
};

export default _layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

