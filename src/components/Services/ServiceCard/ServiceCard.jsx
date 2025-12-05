import React, { Children, Component } from 'react'
import styles from './ServiceCard.module.css'
export default class ServiceCard extends Component {
  render() {
    return (
      <div className={styles.serviceCard}>
        <span className={styles.serviceCardIcon}>{this.props.children}</span>
        <h4 className={styles.serviceCardTitle}>{this.props.title}</h4>
        <p className={styles.serviceCardCaption}>{this.props.caption}</p>
      </div>
    )
  }
}
