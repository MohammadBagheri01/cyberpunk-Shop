import React, { Component } from 'react'
import styles from './Statistics.module.css'
export default class Statistics extends Component {
  render() {
    return (
      <div className={styles.Statistics}>
        <span className={styles.Statistics_item}>{this.props.title}</span>
        <span className={styles.Statistics_item}>{this.props.value}%</span>
      </div>
    )
  }
}
