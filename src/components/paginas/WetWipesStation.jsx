import React from 'react'
import { TextoCentradoStationReal } from '../wetWipesStation/TextoCentradoStationReal'
import { TextoFotoStation } from '../wetWipesStation/TextoFotoStation'
import { Collagex1Station } from '../wetWipesStation/Collagex1Station'
import { Where } from '../wipes/Where'
import { ScrollToTopButton } from '../ScrollToTopButton'
import { Footer } from '../Footer'


export const WetWipesStation = () => {
  return (
    <div className="App">
    <header className="App-header">
    <TextoCentradoStationReal/>
    <TextoFotoStation/>
    <Collagex1Station/>
    <Where/>
    <Footer/>
    <ScrollToTopButton/>
    </header>
  </div>
  )
}
