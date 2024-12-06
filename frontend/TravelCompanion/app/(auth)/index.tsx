import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '@/assets/styles/globalStyles'

const Index = () => {
  return (
    <SafeAreaView edges={[]} style={[globalStyles.safeAreaView]}>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default Index