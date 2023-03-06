import { useState } from 'react'

import { Menu,ArrowRight } from './assets/icons'
import style from "./App.module.css"
import Navbar from './components/Navbar'

function App() {


  return (
    <div className={style.app}>
      <Navbar/>
      <div className={style.container}>
        <div className={style.contain}>
          <h1 className={style.title}>Modern interior</h1>
          <h2 className={style.subTitle}>A full-Service residential & commercial interior design and staging company offering professional organizing &<br/> eco-services.</h2>
          <div className={style.read}>
            <span >Read more</span>
            <ArrowRight/>
          </div>
        </div>
        <div className={style.imgContainer}>
          
          <img src='image/photo1.png' className={style.img} />
         
          <div className={style.cardContainer}>
            <div>
              <img src='image/photo2.png' className={style.img2}/>
              <div>
                <h3>Aliza Webber</h3>
                <h4>Interior designer</h4>
              </div>
            </div>
            <span>Designed in 2020 by <br/> Aliza Webber</span>
          </div>
        </div>
      </div>
      <div className={style.footer}>created by <span>Erceg Gonzalo</span> - <a href='https://devchallenges.io'>devChallenges.io</a></div>
    </div>
  )
}

export default App
