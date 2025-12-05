import React, { Component } from 'react'
import styles from './Footer.module.css'
import Copy from './FooterCopy/Copy'
import Social from '../About/Social/Social'
import FooterInfo from './FooterInfo/FooterInfo'
export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <div className={styles.footer_logo}>
                    <img src="images/logo.png" alt="logo" />
                </div>
                <div className={styles.footer_social}><Social/></div>
                <div className={styles.footer_info}><FooterInfo/></div>
                <div className={styles.footer_copyright}><Copy /></div>
            </footer>
        )
    }
}
