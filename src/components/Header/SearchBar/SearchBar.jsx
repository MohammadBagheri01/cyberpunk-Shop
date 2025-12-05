import React, { Component } from 'react'
import styles from './SearchBar.module.css'
import { CiSearch } from "react-icons/ci";
export default class SearchBar extends Component {
  render() {
    return (
      <>
        <div className={styles.serchContainer}>
          <form className={styles.SearchBarForm} action="#">
            <input className={styles.SearchBarInput} type="search" placeholder='search...' />
            <span className={styles.SearchBarIcon}>
            <CiSearch />
            </span>
          </form>
        </div>
      </>
    )
  }
}
