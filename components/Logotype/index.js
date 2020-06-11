import React from 'react'
import { observer } from 'startupjs'
import { View, Text, Linking } from 'react-native'
import './index.styl'

export default observer(function TopNavigation () {
  return pug`
    View.root
      Text.logoText.firstLetter(onPress=() => Linking.openURL('/')) n
        Text.logoText(onPress=() => Linking.openURL('/')) eha
        Text.logoText.red(onPress=() => Linking.openURL('/')) .
          


      
  `
})
