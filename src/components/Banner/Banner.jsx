import React, { Component } from 'react'
import styles from '../Banner/Banner.module.css'
import { BsArrowUpRight } from "react-icons/bs";
export default class Banner extends Component {
  render() {
    return (
      <div className={styles.Banner} style={{ "--bg": `url(${this.props.image})` }}>
        <div className={styles.Banner_title}>
            <h2>{this.props.title}</h2>
        </div>
        <div className={styles.Banner_buttonContainer}>
          <div className={styles.Banner_buttonContent}>
            <button className={styles.Banner_button}><BsArrowUpRight /></button>
          </div>
        </div>
      </div>
    )
  }
}
