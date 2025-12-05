import React, { Component } from 'react'
import styles from './Gallery.module.css'

export default class Gallery extends Component {
    render() {
        return (
            <section ref={this.props.galleryRef} className={styles.gallery}>
                <div className={styles.gallery_content}>
                    
                        <div className={`${styles.gallery_box1} ${styles.gallery_box}`}> </div>
                        <div className={`${styles.gallery_box2} ${styles.gallery_box}`}> </div>
                        <div className={`${styles.gallery_box3} ${styles.gallery_box}`}> </div>
                        <div className={`${styles.gallery_box4} ${styles.gallery_box}`}> </div>
                        <div className={`${styles.gallery_box5} ${styles.gallery_box}`}> </div>
                        <div className={`${styles.gallery_box6} ${styles.gallery_box}`}> </div>
                        <div className={`${styles.gallery_box7} ${styles.gallery_box}`}> </div>
                
                </div>
            </section>
        )
    }
}
