import React, { Component } from 'react';
import styles from './SideBar.module.css';

import { GoHome } from "react-icons/go";
import { MdOutlineMedicalServices } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import { RiShoppingBasketLine, RiContactsLine } from "react-icons/ri";
import { TfiImage } from "react-icons/tfi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      menuItems: [
        { icon: GoHome, label: "home", actived: true },
        { icon: MdOutlineMedicalServices, label: "services", actived: false },
        { icon: BsExclamationCircle, label: "aboutUs", actived: false },
        { icon: RiShoppingBasketLine, label: "shop", actived: false },
        { icon: TfiImage, label: "gallery", actived: false },
        { icon: RiContactsLine, label: "contact", actived: false },
      ],
      sideBarColapse: false,
    };
  }

  handleActiveItem = (index, label) => {
    this.setState(prevState => ({
      menuItems: prevState.menuItems.map((item, i) => ({
        ...item,
        actived: i === index
      }))
    }));
    if (this.props.onNavigate) {
      this.props.onNavigate(label);
    }
  }

  sideBarColapseHandler = () => {
    this.setState(prevState => ({
      sideBarColapse: !prevState.sideBarColapse
    }));
  }

  render() {
    const { sideBarColapse, menuItems } = this.state;

    return (
      <div
        className={`${styles.sideBar} ${sideBarColapse ? styles.sideBar_colapse : ''}`}
      >

        <div className={styles.sideBar_logo}>
          <div className={styles.sideBar_logo_content}>
            <img
              className={styles.sideBar_logo_img}
              src="/images/logo.png"
              alt="logo"
            />
          </div>
        </div>


        <ul className={styles.sideBar_list}>
          {menuItems.map(({ icon: Icon, label, actived }, index) => (
            <li
              key={index}
              className={`${styles.listItem} ${actived ? styles.listItem_active : ''}`}
              onClick={() => this.handleActiveItem(index, label)}
            >
              <button type="button" className={styles.listButton} title={label}>
                <Icon className={styles.icon} />
              </button>
            </li>
          ))}
        </ul>


        <div onClick={this.sideBarColapseHandler} className={styles.sideBar_arrow}>
          <div className={styles.sideBar_arrow_content}>
            {sideBarColapse ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </div>
      </div>
    );
  }
}
