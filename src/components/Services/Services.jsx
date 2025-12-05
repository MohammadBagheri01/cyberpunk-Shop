import React, { Component, createRef } from 'react'
import styles from './Services.module.css'
import { MdOutlinePayment } from "react-icons/md";
import { LuTruck } from "react-icons/lu";
import { FaBox } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import ServiceCard from './ServiceCard/ServiceCard';
import { FaStar } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
const servicesItems = [
  { Icon: MdOutlinePayment, title: 'Secure Payment', caption: 'Lorem ipsum dolor 1 ' },
  { Icon: LuTruck, title: 'Free Shipping', caption: 'Lorem ipsum dolor 2' },
  { Icon: FaBox, title: 'Delivered With Care', caption: 'Lorem ipsum dolor 3' },
  { Icon: FaRegHeart, title: 'Excellent Service', caption: 'Lorem ipsum dolor 4' },
  { Icon: FaStar, title: 'High Quality', caption: 'Lorem ipsum dolor 5' },
  { Icon: FaTools, title: 'After-Sales Service', caption: 'Lorem ipsum dolor 6' },
];


export default class Services extends Component {
  scrollerRef = createRef();

  componentDidMount() {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.addAnimation();
    }
  }

  addAnimation() {
    const scroller = this.scrollerRef.current;
    if (!scroller) return;

    scroller.setAttribute('data-animated', true);

    const scrollerInner = scroller.querySelector(`.${styles.scrollerInner}`);
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(clone);
    });
  }

  render() {
    return (
      <section className={styles.servicesSection} ref={this.props.servicesRef}>

      <div ref={this.scrollerRef} className={styles.servicesContainer}>
        <div className={`${styles.servicesContent} ${styles.scrollerInner}`}>
          {servicesItems.map(({ Icon, title, caption }, index) => (
            <ServiceCard key={index} title={title} caption={caption}>
              <Icon />
            </ServiceCard>
          ))}
        </div>
      </div>
      </section>
    );
  }
}
