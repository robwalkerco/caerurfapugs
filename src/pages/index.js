import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Alert from '../components/Alert'
import Image from '../components/Image'

const IndexPage = () => (
  <div>
    <h1>Welcome to Caerurfa Pugs</h1>

    <Alert title="Daphne has had her puppies">
      <p>5 beautiful Apricot boys were born on the 15th Oct 2016.</p>

      <p>Please get in touch if you are interested in finding out more about them.</p>

      <p>View our <Link to="/pug-puppies-for-sale">Puppies for sale</Link> page to see
      some photos of some of our previous Pug Puppy litters.</p>
    </Alert>

    <p>The first recorded inhabitants of the town (South Shields) were from a celtic
    tribe called the Brigentes, who founded a settlement called Caerurfa (the town on
    the rock).</p>

    <p>My home town</p>

    <p>We are a Kennel Club registered Pug breeder based in Swaledale, North Yorkshire.
    We breed two lines of pugs, one coloured fawn and the other Apricot. We have over
    20 years experience in dog breeding and showing our dogs with great pleasure, from
    Bulldogs to Yorkshire Terriers. We are not a kennel, all our Pugs live in the home
    with us as a family.</p>

    <p>At home we have eight of our own pugs, Dudley and Poe, our studs, and Amber,
    Alice, Grace, Kacey, Mia, and Betsy our bitches.</p>

    <Image src="/static/Dudley-and-his-chew.jpg" alt="Dudley enjoying his chew in the garden">
      <p>Dudley enjoying his chew in the garden</p>
    </Image>

    <p>Pugs are very friendly, and love being with people. Ours enjoy being with us as
    much as possible and especially love going for walks in beautiful Swaldale where we
    live. Pugs are great for families with children or other pets, as they are very
    docile and playful.</p>

    <Image src="/static/Betty-walking.jpg" alt="Betsy on a summers day">
      <p>Betsy on a summers day</p>
    </Image>

    <Image src="/static/puppies.jpg" alt="Three of the pug puppies from our first litter">
      <p>Three of the pug puppies from our first litter</p>
    </Image>

    <p>There is more information on each of our <Link to="/our-pugs">Pugs</Link> on this
    site, as well as details of any <Link to="/pug-puppies-for-sale">puppies</Link> that
    we have available for sale. We also have more information on <Link to=
    "/looking-after-a-pug">looking after Pugs</Link>. If you want to find out anything
    else about our Pugs and Puppies, or Pugs in general, you can find contact details
    on the <Link to="contact-us">contact us</Link> page.</p>
  </div>
)

export default IndexPage
