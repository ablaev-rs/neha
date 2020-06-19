import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity } from 'react-native'
import './index.styl'

export default observer(function Colors () {
  const colors = [
    { color: '#FF4136' },
    { color: '#FF9FF9' },
    { color: '#4153FF' },
    { color: '#00C0FF' },
    { color: '#5FFFCC' },
    { color: '#B55FFF' }
  ]

  return pug`
    View.root
      Text.header Color
      View.colorsBlock
        each value, index in colors
          View.colors(key=index styleName=!index && 'first')
            TouchableOpacity.colorBtn(style = { backgroundColor: value.color })


  `
})
