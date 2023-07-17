import React from 'react'

import { TextoCentradoMenu } from '../menuPrincipal/TextoCentradoMenu'
import { Footer } from '../Footer'
import { ScrollToTopButton } from '../ScrollToTopButton'
import { TextoBlanco } from '../menuPrincipal/TextoBlanco'
import { CollageMenu } from '../menuPrincipal/CollageMenu'
import { Clients } from '../menuPrincipal/Clients'



export const MenuPrincipal = () => {
  return (
    <div className="App">
      <header className="App-header">
      <TextoCentradoMenu/>
      <TextoBlanco/>
      
      <CollageMenu/>
      <Clients/>
      <Footer/>
      <ScrollToTopButton/>

        
      </header>
    </div>
  )
}
