import React, { Component } from 'react';
import styles from './Header.module.css';
import SideBar from './SideBar/SideBar';
import HeaderBanner from './Banner/HeaderBanner';

export default class Header extends Component {
  render() {
    return (
      <section className={styles.container}>
        <aside className={styles.sideBar}>
          <SideBar onNavigate={this.props.onNavigate} />
        </aside>
        <header ref={this.props.headerRef} className={styles.header}>
        <HeaderBanner/>
        </header>
      </section>
    );
  }
}
