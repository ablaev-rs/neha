import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import './index.styl'
import LeftColumn from 'components/Content/LeftColumn'
import RightColumn from 'components/Content/RightColumn'

export default observer(function Content () {
  return pug`
    View.root
      LeftColumn
      RightColumn
  `
})
