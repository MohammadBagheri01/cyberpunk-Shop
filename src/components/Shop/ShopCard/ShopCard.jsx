import React, { Component } from 'react'
import styles from './ShopCard.module.css'
export default class ShopCard extends Component {
    render() {
        return (
            <div className={styles.shopCardContainer}>

                <div className={styles.shopCard}>
                <div className={styles.card_img}>
                    <img src={this.props.image} alt="product image"/>
                </div>
                <div className={styles.card_title}>
                   <h3>{this.props.title}</h3>
                </div>
                </div>
                <button className={styles.card_btn}>BUY</button>
                <button className={styles.card_offBtn}>OFF</button>
            </div>
        )
    }
}
