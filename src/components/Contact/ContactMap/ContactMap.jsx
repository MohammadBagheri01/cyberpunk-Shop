import React, { Component } from 'react'
import styles from './ContactMap.module.css'
export default class ContactMap extends Component {
  render() {
    return (
      <div className={styles.mapContainer}>

        <iframe className={styles.map} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.0756969544295!2d51.3377049!3d35.6997548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfe05737fbcc9%3A0x274833de5c05c70c!2sAzadi%20Square%2C%20Tehran!5e0!3m2!1sen!2s!4v1762512976918!5m2!1sen!2s"  ></iframe>

      </div>
    )
  }
}
