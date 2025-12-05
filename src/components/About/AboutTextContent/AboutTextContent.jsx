import React, { Component } from 'react'
import styles from './AboutTextContent.module.css'
import Social from '../Social/Social'
export default class AboutTextContent extends Component {
  render() {
    return (
      <div className={styles.aboutTextContent}>
        <div className={styles.aboutText_title}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <h2>Digital Beasts Human Souls</h2>
        </div>
        <div className={styles.aboutText_social}>
            <Social/>
            <div className={styles.logo}>
                <img src="images/logo.png" alt="logo" />
            </div>
        </div>
      </div>
    )
  }
}
