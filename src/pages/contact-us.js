import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Alert from '../components/Alert'
import Image from '../components/Image'

const AddressLine = styled.p`
  padding: 0 4px;
`

class ContactUs extends React.Component {
  constructor() {
    super()
    this.state = {
      jsLoaded: false,
    }
  }

  componentDidMount = () => {
    this.setState({
      jsLoaded: true,
    })
  }

  render = () => (
    <div>
  		<h1>Contact Us</h1>
  		<p>If you are interested in any of our pug puppies, or want to ask us anything about pugs, please contact us. You can use the contact form or our contact details at the bottom on the page.</p>
  		<h4>Enquiry Form</h4>

      <form action="https://api.caerurfapugs.co.uk/contact" method="POST">
        <table>
          <tbody>
            <tr>
              <td width="15%"><p>Name:</p></td>
              <td width="80%"><input type="text" name="name" size="30" value="" /></td>
            </tr>
            <tr>
              <td width="15%"><p>E-mail:</p></td>
              <td width="80%"><input type="text" name="email" size="30" value="" /></td>
            </tr>
            <tr>
              <td width="15%"><p>Subject:</p></td>
              <td width="80%"><input type="text" name="subject" size="30" value="Web Enquiry" /></td>
            </tr>
            <tr>
              <td valign="top" width="20%"><p>Message:</p></td>
              <td width="80%">
                <textarea cols="45" rows="5" name="message" />
              </td>
            </tr>
            <tr>
              <td width="20%">&nbsp;</td>
              <td width="80%">
                <input type="hidden" name="verification" value={this.state.jsLoaded} />
                <input type="submit" name="submit" value="Send Mail" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <p>We will try to reply to all messages within a day, but for urgent messages please call us.</p>

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
