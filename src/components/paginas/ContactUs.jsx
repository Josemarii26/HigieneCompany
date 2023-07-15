import React from 'react'
import { ScrollToTopButton } from '../ScrollToTopButton'
import { WhereContact } from '../contactUs/WhereContact'
import { TextoBlancoContact } from '../contactUs/TextoBlancoContact'
import { TextoCentradoContact } from '../contactUs/TextoCentradoContact'


export const ContactUs = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TextoCentradoContact/>
        <TextoBlancoContact />
        <WhereContact />
        <ScrollToTopButton />

      </header>
    </div>
  )
}
