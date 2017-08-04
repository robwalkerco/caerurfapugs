import React from 'react'
import styled from 'styled-components'

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
      jsLoaded: false,
    }
  }

  componentDidMount = () => {
    this.setState({
      jsLoaded: true,
    })
  }

  render = () => (
    <MailingListContainer>
      <Title>Join our email list</Title>

      <p>Join our mailing list and we will tell you when we have pugs for sale</p>

      <Form action="https://api.caerurfapugs.co.uk/mailinglist" method="post">
        <table width="100%">
          <tr>
            <td>
              <p>Name:</p>
            </td>
          </tr>

          <tr>
            <td align="center">
              <input type="text" name="name" size="30" value="" />
            </td>
          </tr>

          <tr>
            <td>
              <p>E-mail:</p>
            </td>
          </tr>

          <tr>
            <td align="center"><input type="text" name="email" size="30" value="" /></td>
          </tr>

          <tr>
            <td>
              <input type="hidden" name="verification" value={this.state.jsLoaded} />

              <input type="submit" name="submit" value="Join the email list" />
            </td>
          </tr>
        </table>
      </Form>

      <SmallText>We promise to keep your email address secret and safe, and only
      ever to sent you email regarding our pug puppies.</SmallText>
    </MailingListContainer>
  )
}

export default MailingList
