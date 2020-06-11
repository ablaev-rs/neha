import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import './index.styl'
import Top from 'components/Top'
import Header from 'components/Header'
import Content from 'components/Content'
import Footer from 'components/Footer'

export default observer(function Main ({ style }) {
  return pug`
    View.root
      Top
      Header
      Content
      Footer
  `
})
