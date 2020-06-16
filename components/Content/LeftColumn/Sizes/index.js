import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TextInput, TouchableOpacity, Image, Linking } from 'react-native'
import './index.styl'

export default observer(function Sizes () {
  const sizes = [
    { size: 'XL' },
    { size: 'M' },
    { size: 'L' },
    { size: 'ML' },
    { size: 'LM' }
  ]

  return pug`
    View.root
      Text.header Size
      View.sizeBlock
        each value, index in sizes
          Text.size.text(key=index styleName=!index && 'first' onPress=() => Linking.openURL('#'))  #{value.size}

  `
})
