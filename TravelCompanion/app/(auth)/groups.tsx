import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '@/assets/styles/globalStyles'

const GroupsTab = () => {
  return (
    <SafeAreaView edges={[]} style={[globalStyles.container]}>
      <Text>GroupsTab</Text>
    </SafeAreaView>
  )
}

export default GroupsTab