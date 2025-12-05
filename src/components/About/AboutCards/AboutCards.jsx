import React, { Component } from 'react'
import styles from './AboutCards.module.css'
import AboutCard from '../AboutCard/AboutCard'
const aboutCards =[
  {id:1,title:'Product 1',image:'/images/aboutCard1.jpg'},
  {id:2,title:'Product 2',image:'/images/aboutCard2.jpg'},
]
export default class AboutCards extends Component {
  render() {
    return (
    <div className={styles.aboutCards}>
      {aboutCards.map(card=>(
        <AboutCard title={card.title} image={card.image} key={card.id}/>
      ))}
    </div>
    )
  }
}
