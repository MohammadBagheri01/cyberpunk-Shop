import React, { Component } from 'react'
import styles from './ContactForm.module.css'
export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allValid: false,
      userName: '',
      userEmail: '',
      obj: '',
      text: '',
      submitedData: false
    }
  }
  changeNameInputHandler(e) {
    this.setState({
      userName: e.target.value
    })
  }
  changeEmailInputHandler(e) {
    this.setState({
      userEmail: e.target.value
    })
  }
  changeObjInputHandler(e) {
    this.setState({
      obj: e.target.value
    })
  }
  changeTextInputHandler(e) {
    this.setState({
      text: e.target.value
    })
  }
  formHandler(event) {
    event.preventDefault()
    this.setState({ submitedData: true })
    if (this.state.userEmail && this.state.obj && this.state.userName) {
      this.setState({
        allValid: true
      })
      setTimeout(() => {
        this.setState(
          {
            allValid: false,
            userName: '',
            obj: '',
            userEmail: '',
            submitedData: false
          }
        )
      }, 2000)
    }
  }
  render() {
    return (
      <form onSubmit={(e) => { this.formHandler(e) }} className={styles.form}>
        {this.state.allValid && <p className={styles.sucsses_message}>sended!</p>}
        <div className={styles.item_container}>
        <input value={this.state.userName} onChange={(e) => { this.changeNameInputHandler(e) }} className={`${styles.form_item} ${styles.form_input} `} type="text" placeholder='name' />
        {this.state.submitedData && this.state.userName.length <= 0 && (
          <label className={styles.erroe_message}>not vaild</label>
        )}
        </div>
        <div className={styles.item_container}>
        <input value={this.state.userEmail} onChange={(e) => { this.changeEmailInputHandler(e) }} className={`${styles.form_item} ${styles.form_input} `} type="email" placeholder='email' />
        {this.state.submitedData && this.state.userEmail.length <= 0 && (
          <label className={styles.erroe_message}>not vaild</label>
        )}
        </div>
        <div className={styles.item_container}>

        <input value={this.state.obj} onChange={(e) => { this.changeObjInputHandler(e) }} className={`${styles.form_item} ${styles.form_input} `} type="text" placeholder='object' />
        {this.state.submitedData && this.state.obj.length <= 0 && (
          <label className={styles.erroe_message}>not vaild</label>
        )}
        </div>
        <div className={styles.item_container}>

        <textarea value={this.state.text} onChange={(e) => { this.changeTextInputHandler(e) }} className={`${styles.form_item} ${styles.form_input} `} placeholder='text...'></textarea>
        {this.state.submitedData && this.state.text.length <= 0 && (
          <label className={styles.erroe_message}>not vaild</label>
        )}
        </div>

        <button className={`${styles.form_item} ${styles.form_btn} `} >send</button>
      </form>
    )
  }
}
