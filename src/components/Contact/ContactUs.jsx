import React, { Component } from 'react'
import styles from './ContactUs.module.css'
import ServiceCard from '../Services/ServiceCard/ServiceCard'
import ContactMap from './ContactMap/ContactMap'
import ContactForm from './ContactForm/ContactForm'
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoPhonePortraitOutline } from "react-icons/io5";
const contactInfoArr = [
    { id: 1, Icon: CiLocationOn, title: 'Address', caption: 'Lorem ipsum dolor 1 ' },
    { id: 2, Icon: CiMail, title: 'Email', caption: 'Lorem ipsum @info.com' },
    { id: 3, Icon: IoPhonePortraitOutline, title: 'Phone', caption: '0912352641' },

];
export default class ContactUs extends Component {
    render() {
        return (
            <section ref={this.props.contactUsRef} className={styles.contactUs}>
                <div className={styles.contact_container}>
                    <h2 className={styles.contact_title}>We’d Love to Hear from You!</h2>
                    <div className={styles.contact_map}><ContactMap /></div>
                    <div className={styles.contact_form}><ContactForm /></div>
                    <div className={styles.contact_info}>
                        {contactInfoArr.map(({ Icon, title, caption , id }) => (

                            <ServiceCard key={id} title={title} caption={caption}>
                                <Icon />
                            </ServiceCard>
                        ))}
                    </div>
                </div>
            </section>
        )
    }
}
