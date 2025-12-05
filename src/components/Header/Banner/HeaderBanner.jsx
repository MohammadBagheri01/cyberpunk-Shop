import React, { Component } from 'react'
import styles from './HeaderBanner.module.css'
import BannerCard from '../BannerCard/BannerCard'
import SearchBar from '../SearchBar/SearchBar'
export default class HeaderBanner extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.topBox}>
              <div className={styles.topBoxContent}>
              <SearchBar/>
              </div>
            </div>
            <div className={styles.mainContent}>
              <div className={styles.mainContentImage}>
                <img src="/images/headerBanner.png" alt="header-Banner-image" />
              </div>
              <div className={styles.mainContentTitie}>
                <h1 className={styles.mainContentTitleText}>
                  <span className={styles.mainContentFirstSpan}> Digital Beasts</span>
                  <br />
                  <span className={styles.mainContentSecondSpan}>Human Souls</span>
                </h1>
              </div>
            </div>
            <div className={styles.bottomBox}>
              <div className={styles.bottomBoxContent}>
          <BannerCard/>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
