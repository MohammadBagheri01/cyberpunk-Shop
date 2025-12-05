import React, { Component } from 'react'
import styles from './BannerCard.module.css'
export default class BannerCard extends Component {
  render() {
    return (
      <>
    <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>40% OFF</h2>
        <h4 className={styles.cardText}>ON PACKET</h4>
        <button className={styles.cardBtn}>SHOP NOW</button>
    </div>
    <div className={styles.cardImage}>
        <img src="/images/headerCard.png" alt="header-Card-image" />
    </div>

      </>
    )
  }
}
