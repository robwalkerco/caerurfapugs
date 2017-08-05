import React from 'react'
import styled from 'styled-components'
import Label from './Label'
import Input from './Input'
import SubmitButton from './SubmitButton'
import ErrorMessage from './ErrorMessage'
import SuccessMessage from './SuccessMessage'

const MailingListContainer = styled.div`
  border: #000000 1px solid;
  margin: 10px 0 10px 0;
`

const Title = styled.h4`
  background: url(/static/emaillist.gif) 1px 1px no-repeat;
  padding-left: 42px;
  height: 40px;
`

const SmallText = styled.p`
  font-size: 80%;
`

const Form = styled.form`
  padding: 4px;
`

class MailingList extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
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

    fetch('http://api.caerurfapugs.co.uk/mailinglist/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
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
    <MailingListContainer>
      <Title>Join our email list</Title>

      <p>Join our mailing list and we will tell you when we have pugs for sale</p>

      {this.state.success !== true && (
        <Form onSubmit={event => this.handleSubmit(event)}>
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

          {!this.state.submitting && <SubmitButton type="submit">Join the email list</SubmitButton>}
          {this.state.submitting && <SubmitButton disabled type="submit">Submitting...</SubmitButton>}

          {this.state.success === false && (
            <ErrorMessage>Sorry, something went wrong. Please try again.</ErrorMessage>
          )}

          <SmallText>We promise to keep your email address secret and safe, and only
          ever to sent you email regarding our pug puppies.</SmallText>
        </Form>
      )}

      {this.state.success === true && (
        <SuccessMessage>Success! We have received your details.</SuccessMessage>
      )}

    </MailingListContainer>
  )
}

export default MailingList
