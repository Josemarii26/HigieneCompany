import React from 'react'
import { CollageAbout } from '../about/CollageAbout'
import { TextoCentradoAbout } from '../about/TextoCentradoAbout'
import { ColumnaAbout } from '../about/ColumnaAbout'
import { InicioAbout } from '../about/InicioAbout'
import { ScrollToTopButton } from '../ScrollToTopButton'


export const AboutUs = () => {
  return (
    <div className="App">
    <header className="App-header">
    <TextoCentradoAbout/>
    <InicioAbout/>
    <CollageAbout/>
    <ColumnaAbout/>
    <ScrollToTopButton/>
 
    </header>
  </div>
  )
}
