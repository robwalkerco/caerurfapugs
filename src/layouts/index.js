import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Nav from '../components/Nav'
import NavBottom from '../components/NavBottom'
import Clear from '../components/Clear'
import MailingList from '../components/MailingList'

import './index.css'

const Wrapper = styled.div`
  font: 14px/1.5 Helvetica, Arial, 'Liberation Sans', FreeSans, sans-serif;
  background: #000000 /*url(../images/blackleft.gif) repeat-y top left*/;
  color: #333;
  padding: 0 0 20px 0;
  text-align: left;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 960px;
`
const PageContainerTop = Container.extend`
  background: #F7EBDD url(/static/curve.gif) 0px 300px no-repeat;
  padding-bottom: 15px;
`

const PageContainerBottom = Container.extend`
  background: #F7EBDD url(/static/curvebottom.gif) bottom right no-repeat;
  height: 60px;
`

const Header = styled.div`
  height: 300px;
  background: #000000 url(/static/head.jpg) no-repeat top right;
`

const Column = styled.article`
  width: 700px;
  display: inline;
  float: left;
  margin-left: 9px;
  margin-right: 9px;

  ${props => props.full && `
    width: 940px;
  `}

  ${props => props.medium && `
    width: 700px;
  `}

  ${props => props.small && `
    width: 220px;
  `}
`

const FooterText = styled.p`
  font-size: 80%;
  padding: 0 0 0 4px;
`

const TemplateWrapper = ({
  children,
}) => (
  <div>
    <Helmet
      title="Caerurfa Pugs: North Yorkshire Pug Breeders"
      link={[
        { rel: 'shortcut icon', href: '/static/favicon.ico' },
      ]}
      meta={[
        { name: 'description', content: 'North Yorkshire Pug Breeders in Swaledale, North Yorkshire' },
      ]}
    />
    <Wrapper>
      <PageContainerTop>
        <Header />

        <Nav />

        <Column medium>
          {children()}
        </Column>

        <Column small>
          <MailingList />
        </Column>

        <Clear/>
      </PageContainerTop>

      <PageContainerBottom>
        <Column full>
          <NavBottom />

          <FooterText>
            Caerurfa Pugs &copy; 2008-{new Date().getFullYear()} Nothing from this web site may be reproduced in any way without written permission.
          </FooterText>

          <FooterText>
            Created by <Link to="http://robwalker.co" target="_blank" title="robwalker.co">Rob Walker</Link> and powered by <Link to="https://www.gatsbyjs.org" target="_blank" title="Gatsbyjs">Gatsbyjs</Link>, <Link to="https://serverless.com/" target="_blank" title="Serverless">Serverless</Link> and <Link to="https://surge.sh/" target="_blank" title="surge.sh">Surge.sh</Link>
          </FooterText>
        </Column>

        <Clear />
      </PageContainerBottom>
    </Wrapper>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
