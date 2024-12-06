import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '@/assets/styles/globalStyles'

const LoginPage = () => {
  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <Text>LoginPage</Text>
    </SafeAreaView>
  )
}

export default LoginPage