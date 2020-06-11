import React from 'react'
import { observer } from 'startupjs'
import { View, Text, Linking } from 'react-native'
import './index.styl'
import { BASE_URL } from '@env'

export default observer(function Header () {
  const base = BASE_URL
  const urlImage = '/img/breadcrumb.jpg'
  let path = base + urlImage
  return pug`
    View.root
      View.bgImage(style = { backgroundImage: 'url(' + path + ')' } )
        View.content
          Text.header Shop
          View.breadcrumb
            Text.link(onPress=() => Linking.openURL('/')) Home #{' '}/
            Text.text #{'  '}Shop
  `
})
