import React from 'react'
import { observer } from 'startupjs'
import { View, Text, Linking, TouchableOpacity, Image } from 'react-native'
import './index.styl'
import { BASE_URL } from '@env'
import Logotype from 'components/Logotype'

export default observer(function Top () {
  const base = BASE_URL
  const navigation = ['Home', 'About Us', 'Shop', 'Pages', 'Blog', 'Contact']
  const icons = [
    '/img/search.png',
    '/img/bag.png',
    '/img/menu.png'
  ]
  return pug`
    View.root

      View.logotype
        Logotype
          
      View.navigation
        each val, index in navigation
          View.item(key = index styleName=index === 0 ? 'first' : '')
            Text.text(onPress=() => Linking.openURL('#')) #{val}

      View.icons
        each url, index in icons
          TouchableOpacity.btnIcons(key = index styleName=index === 0 ? 'first' : '')
            Image.image(
              source={uri: base + url}
            )

      
  `
})
