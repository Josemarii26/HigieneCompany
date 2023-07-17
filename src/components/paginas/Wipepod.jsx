import React from 'react'
import { TextoCentrado } from '../wipepod/TextoCentrado'
import { Collagex1 } from '../wipepod/Collagex1'
import { Footer } from '../Footer'
import { TextoFoto } from '../wipepod/TextoFoto'
import { TextText } from '../wipepod/TextText'
import { FourColumns } from '../wipepod/FourColumns'
import { Gallery } from '../wipepod/Gallery'
import { Prueba } from '../wipepod/Prueba'
import { Where } from '../wipes/Where'
import { ScrollToTopButton } from '../ScrollToTopButton'



export const Wipepod = () => {
  return (
    <div className="App">
      <header className="App-header">
      
      <TextoCentrado/>
      <TextoFoto/>
      <Collagex1/>
      <TextText/>
      <FourColumns/>
      <Prueba/>
      <Where/>

      
      <Footer/>
      <ScrollToTopButton/>
  
      </header>
    </div>
  )
}
