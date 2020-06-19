import React from 'react'
import { observer } from 'startupjs'
import { ScrollView } from 'react-native'
import { Main } from 'components'
import './index.styl'

export default observer(function PHome () {
  return pug`
    ScrollView.root
      Main
  `
})
