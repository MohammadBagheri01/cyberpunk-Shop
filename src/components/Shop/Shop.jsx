import React, { Component } from 'react'
import styles from './Shop.module.css'
import Banner from '../Banner/Banner'
import ShopCard from './ShopCard/ShopCard'
const shopCards=[
    {id: 1, title:'product 1' , image:'/images/shop/image1.jpg'},
    {id:2 , title:'product 2' , image:'/images/shop/image2.jpg'},
    {id:3 , title:'product 3' , image:'/images/shop/image3.jpg'},
    {id:4 , title:'product 4' , image:'/images/shop/image4.jpg'},
    {id:5 , title:'product 5' , image:'/images/shop/image5.jpg'},
    {id:6 , title:'product 6' , image:'/images/shop/image6.jpg'},
    {id:7 , title:'product 7' , image:'/images/shop/image7.jpg'},
    {id:8 , title:'product 8' , image:'/images/shop/image8.jpg'},
    {id:9 , title:'product 9' , image:'/images/shop/image9.jpg'},
    {id:10 , title:'product 10' , image:'/images/shop/image10.jpg'}
]
export default class Shop extends Component {
  render() {
    return (
      <section ref={this.props.shopRef} className={styles.shop}>
        <div className={styles.shopBanner}>
        <Banner image='images/shopBanner.jpg' title='Be different with us'/>
        </div>
        <div className={styles.shopCards}>
            {shopCards.map(card=>(
                <ShopCard title={card.title} image={card.image} key={card.id}/>

            ))}
        </div>

      </section>
    )
  }
}
