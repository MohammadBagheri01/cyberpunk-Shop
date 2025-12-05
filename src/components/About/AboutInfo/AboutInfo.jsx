import React, { Component } from 'react'
import styles from './AboutInfo.module.css'
import Statistics from '../Statistics/Statistics'
export default class AboutInfo extends Component {
  render() {
    return (
      <div className={styles.aboutInfo}>
        <div className={styles.aboutInfoImage}>
            <img src="/images/aboutSkin.jpg" alt="about Skin" />
        </div>
        <div className={styles.aboutInfoContent}>
        <h2 className={styles.aboutInfoTitle}>Producer of attractive and customized skins</h2>
        <p className={styles.aboutInfoCaption}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique delectus harum ea magni totam dolor perferendis deleniti. Delectus sunt adipisci ab officia eum earum, accusamus harum ipsum nihil aut cum repudiandae voluptates unde suscipit saepe rem atque sint. Veritatis, adipisci.</p>
        <div className={styles.aboutInfoStatistics}>
          <Statistics title='Satisfaction' value={87}/>
          <Statistics title='Shopping Again' value={64}/>
        </div>
        </div>
      </div>
    )
  }
}
