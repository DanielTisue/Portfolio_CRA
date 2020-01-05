import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import '../../App.scss'



class ContactForm extends Component {
  state = {
    email: '',
    subject: '',
    message: '',
  }

  constructor(props) {
    super(props);
    this.alertSuccess = this.alertSuccess.bind(this);
  }

  alertSuccess() {
    setTimeout(function(){alert('Message Sent!');}, 200);
  }
  
  handleSubmit(e) {

    const MAIL = `${process.env.REACT_APP_MAIL}`;
    const TEMP = `${process.env.REACT_APP_TEMP}`;
    const USER = `${process.env.REACT_APP_USER}`;

    e.preventDefault()
    const {email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'd.tisue@gmail.com',
      subject: subject,
      message_html: message,
    }
    emailjs.send(
      MAIL,
      TEMP,
      templateParams,
      USER
    )
   
   this.resetForm()
   this.alertSuccess();
  }

  resetForm() {
    this.setState({
      email: '',
      subject: '',
      message: '',
    })
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }



  render() {
    return (
      <div className="form-wrapper">
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-item" controlid="formBasicEmail">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Email*"
              />
            </div>
          <div className="form-item" controlid="formBasicSubject">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject*"
              />
            </div>
          <div className="form-item" controlid="formBasicMessage">
              <label>Message</label>
              <textarea
                type="textarea"
                name="message"
                placeholder="Your message*"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </div>
            <button variant="primary" type="submit">
              Submit
            </button>
          </form>
       <hr className="line" />
      </div>
    )
  }
}
export default ContactForm