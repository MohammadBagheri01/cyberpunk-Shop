import React, { Component } from 'react'
import styles from './AboutCard.module.css'
import { TbEyeShare } from "react-icons/tb";
export default class AboutCards extends Component {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.card_img}><img src={this.props.image} alt="card image"/></div>
        <div className={styles.card_title}><h3>{this.props.title}</h3></div>
        <button className={styles.card_button}>
          SHOW NOW
          <span className={styles.button_icon}>
         <TbEyeShare />
          </span>
          </button>

      </div>
    )
  }
}
