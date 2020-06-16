import React from 'react'
import { observer } from 'startupjs'
import { View, Text, Linking, ImageBackground } from 'react-native'
import './index.styl'

export default observer(function Header () {
  const urlImage = '/img/breadcrumb.jpg'
  return pug`
    View.root
      ImageBackground.bgImage(source=urlImage)
        View.content
          Text.header Shop
          View.breadcrumb
            Text.link(onPress=() => Linking.openURL('/')) Home /
            Text.text #{' '}Shop
  `
})
