import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '@/assets/styles/globalStyles'

const TagsTab = () => {
  return (
    <SafeAreaView edges={[]} style={globalStyles.container}>
      <Text>TagsTab</Text>
    </SafeAreaView>
  )
}

export default TagsTab