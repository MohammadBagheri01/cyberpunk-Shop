import React, { Component } from 'react'
import styles from './Social.module.css'
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkedinLogoLight } from "react-icons/pi";
export default class Social extends Component {
  render() {
    return (
      <ul className={styles.social_list}>
                <li className={styles.social_item}><CiInstagram /></li>
                <li className={styles.social_item}><FaXTwitter /></li>
                <li className={styles.social_item}><PiLinkedinLogoLight /></li>
            </ul>
    )
  }
}
