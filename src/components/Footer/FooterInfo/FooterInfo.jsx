import React, { Component } from 'react'
import styles from './FooterInfo.module.css'
export default class FooterInfo extends Component {
  render() {
    return (
      <ul className={styles.info_list}>
        <li className={styles.info_item}>Address: Lorem ipsum dolor sit amet.</li>
        <li className={styles.info_item}>Phone: 0912548799</li>
        <li className={styles.info_item}>Email: Lorem, ipsum@info.com</li>
      </ul>
    )
  }
}
