import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { View, Text, Image, Linking, TouchableOpacity } from 'react-native'
import { BASE_URL } from '@env'
import Logotype from 'components/Logotype'

export default observer(function Header () {
  const base = BASE_URL
  const icons = [
    '/img/twitter.png',
    '/img/facebook.png',
    '/img/instagram.png',
    '/img/whatsapp.png'
  ]
  const navigation = ['Home', 'About Us', 'Shop', 'Blog', 'Pages']

  return pug`
    View.root

      View.leftCol
        Text.exp 20 Years Experience
        View.social
          each url, index in icons
            TouchableOpacity.btnSocial(key = index styleName=index === 0 ? 'first' : '')
              View.imageBorder
                Image.image(
                  source={uri: base + url}
                )

      View.centralCol
        Logotype
        View.navigation
          each val, index in navigation
            View.item(key = index styleName=index === 0 ? 'first' : '')
              Text.text(onPress=() => Linking.openURL('#')) #{val}
        View.sep
        View.copyright
          Text.copy Copyright ©#{' '}
            Text.copy.link(onPress=() => Linking.openURL('#')) neha#{' '}
            Text.copy 2018 . All Right Reserved.

      View.rightCol
        View.contactData(styleName='first')
          Text.title Phone :#{' '}
          Text.value +012 345 678 102
        View.contactData 
          Text.title Email :#{' '}
          Text.value(onPress=() => Linking.openURL('#')) info@example.com
        View.contactData 
          Text.title Address :#{' '}
          Text.value Dhaka Bangladesh





  `
})
