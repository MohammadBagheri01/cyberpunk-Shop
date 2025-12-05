import React, { Component } from 'react'
import styles from './About.module.css'
import Banner from '../Banner/Banner'
import AboutCards from './AboutCards/AboutCards'
import AboutTextContent from './AboutTextContent/AboutTextContent'
import AboutInfo from './AboutInfo/AboutInfo'
export default class About extends Component {
  render() {
    return (
      <section ref={this.props.aboutRef} className={styles.aboutUs}>
        <div className={styles.about_container}>
            <div className={styles.about_bannerContainer}><Banner image='images/aboutBanner.jpg' title='Neomecha'/></div>
            <div className={styles.about_cardsContainer}><AboutCards/></div>
            <div className={styles.about_textContainer}><AboutTextContent/></div>
        </div>
            <div className={styles.about_info}><AboutInfo/></div>
      </section>
    )
  }
}
