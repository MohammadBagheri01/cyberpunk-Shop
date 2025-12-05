import React, { Component } from 'react'
import styles from './Copy.module.css'

export default class Copy extends Component {
  render() {
    return (
      <div className={styles.copy}>
        <p className={styles.copy_text}>© 2025 <span className={styles.copy_span}>NEOMECHA</span> All rights reserved.</p>
      </div>
    )
  }
}
