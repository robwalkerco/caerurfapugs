import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Alert from '../components/Alert'
import Image from '../components/Image'
import Label from '../components/Label'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import SubmitButton from '../components/SubmitButton'
import ErrorMessage from '../components/ErrorMessage'
import SuccessMessage from '../components/SuccessMessage'

const AddressLine = styled.p`
  padding: 0 4px;
`

class ContactUs extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: '',
      submitting: false,
      success: null,
    }
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
    })

  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      submitting: true,
    })

    fetch(`${process.env.API_URL}/enquiry/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      credentials: 'same-origin',
      mode: 'no-cors',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      })
    })
    .then(() =>
      this.setState({
        success: true,
        submitting: false,
      })
    )
    .catch(() =>
      this.setState({
        success: false,
        submitting: false,
      })
    )
  }


  render = () => (
    <div>
  		<h1>Contact Us</h1>
  		<p>If you are interested in any of our pug puppies, or want to ask us anything about pugs, please contact us. You can use the contact form or our contact details at the bottom on the page.</p>
  		<h4>Enquiry Form</h4>

      {this.state.success !== true && (
        <form onSubmit={event => this.handleSubmit(event)}>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name"
            required
            disabled={this.state.submitting}
            value={this.state.name}
            onChange={event => this.handleChange(event)}
          />

          <Label>Email:</Label>
          <Input
            type="email"
            name="email"
            required
            disabled={this.state.submitting}
            value={this.state.email}
            onChange={event => this.handleChange(event)}
          />

          <Label>Message:</Label>
          <Textarea
            type="email"
            name="message"
            required
            disabled={this.state.submitting}
            value={this.state.message}
            onChange={event => this.handleChange(event)}
          />

          {!this.state.submitting && <SubmitButton type="submit">Send enquiry</SubmitButton>}
          {this.state.submitting && <SubmitButton disabled type="submit">Submitting...</SubmitButton>}

          {this.state.success === false && (
            <ErrorMessage>Sorry, something went wrong. Please try again.</ErrorMessage>
          )}
        </form>
      )}

      {this.state.success === true && (
        <SuccessMessage>Success! We have received your enquiry and will reply as soon as possible.</SuccessMessage>
      )}

    	<h4>Contact Details</h4>
    	<p>Feel free to contact us directly using the details below.</p>
    	<img src="/static/phone.gif" alt="contact phone number" />
    	<br />
    	<img src="/static/email.gif" alt="contact email" />
    	<p><strong>Our address is</strong> -</p>
    	<div>
    		<AddressLine>Mrs D. Maxwell</AddressLine>
    		<AddressLine>Bridge House</AddressLine>
    		<AddressLine>Reeth</AddressLine>
    		<AddressLine>Richmond</AddressLine>
    		<AddressLine>North Yorkshire</AddressLine>
    		<AddressLine>DL11 6TP</AddressLine>
    	</div>
    </div>
  )
}

export default ContactUs
