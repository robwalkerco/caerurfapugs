import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Alert from '../components/Alert'
import Image from '../components/Image'

const OurPugs = () => (
  <div>
    <h1>Our Pugs</h1>

    <Alert title="Daphne has had her puppies">
      <p>5 beautiful Apricot boys were born on the 15th Oct 2016.</p>

      <p>Please get in touch if you are interested in finding out more about them.</p>

      <p>View our <Link to="/pug-puppies-for-sale.php">Puppies for sale</Link> page to see
      some photos of some of our previous Pug Puppy litters.</p>
    </Alert>

    <p>We currently have eight of our own pugs, six bitches, Amber, Alice, Grace, Kasey, Betsy and Mia, and two studs, Dudley and Poe.</p>
    <h4>Dudley</h4>
    <p><a href="/static/pedigree/dudley_pedigree.jpg" onClick={() => pageTracker._trackPageview('/pedigree/dudley')}>View Dudley's Pedigree</a> </p>
    <p>Dudley is our fawn coloured breeding dog. He is Seven years old and has sired several litters of lovely pug puppies with Alice and Kacey.</p>
    <p>He is a very friendly and intelligent pug, and loves going for walks around the village and being tickled. He also likes to sleep with his favorite toy (a soft ball) and sucks it like a babies dummy!</p>
    <p><Link to="stud.php">More info on our stud dogs</Link></p>

      <Image src="/static/dudley.jpg" alt="Dudley our stud pug" width="281" height="287" />
      <Image src="/static/Dudley-pug-stud.jpg" alt="Dudley our stud pug">
        <p>Dudley, our dog that we have bred our litters from</p>
      </Image>

    <h4>Poe</h4>
    <p><a href="/static/pedigree/poe_pedigree.jpg" onClick={() => pageTracker._trackPageview('/pedigree/poe')}>View Poe's Pedigree</a> </p>
    <p>Poe is our apricot coloured stud dog, he is 5 years old, and is a very friendly and excitable young man!</p>
    <p>Poe has sired several litters of lovely puppies with Betty.</p>
    <p><Link to="stud.php">More info on our stud dogs</Link></p>

    <Image src="/static/Poe-pug-stud.jpg" alt="Dudley our stud pug">
      <p>Poe our Apricot Pug.</p>
    </Image>

    <Image src="/static/poe.jpg" alt="Poe on a dog walk">
      <p>Poe on a dog walk</p>
    </Image>

    <h4>Eastonite Maxwells News</h4>
    <p><a href="/static/eastonite_maxwells_news_pedigree.jpg" onClick={() => pageTracker._trackPageview('/pedigree/eastonite_maxwells_news')}>Eastonite Maxwells News Pedigree</a> </p>

    <Image src="/static/eastonite_maxwells_news_1.jpg" alt="Eastonite Maxwells News" />

    <h4>Betty</h4>
    <p><a href="/static/pedigree/betty_pedigree.jpg" onClick={() => pageTracker._trackPageview('/pedigree/betty')}>View Betty's Pedigree</a> </p>
    <p>Betty is one of our apricot pugs and is now retired.</p>
    <Image src="/static/betty-older.jpg" alt="Betty growing up" />
    <Image src="/static/betty3.jpg" alt="Betty as a puppy" width="333" height="287">
      <p>Betty as a puppy and betty growing up</p>
    </Image>
    <Image src="/static/bettys-baby-sweden.JPG" alt="Bettys daughter that went to Sweden">
      <p>This is Bettys daughter that went to Sweden.</p>
    </Image>

    <h4>Amber</h4>
    <p><a href="/static/pedigree/amber_pedigree.jpg" onClick={() => pageTracker._trackPageview('/pedigree/amber')}>View Amber's Pedigree</a> </p>
    <Image src="/static/amber.jpg" alt="Amber sun Bathing" />
    <Image src="/static/amber3.jpg" alt="Amber, our couch potato pug" width="228" height="287">
      <p>Amber sun bathing</p>
    </Image>
    <p>Amber is seven years old and cannot be bred from as she is too small, so she is now are couch potato and our baby, and goes every where with us.</p>

    <h4>Alice</h4>
    <p><a href="/static/pedigree/alice_pedigree.jpg" onClick={() => pageTracker._trackPageview('/pedigree/alice')}>View Alice's Pedigree</a> </p>
    <Image src="/static/alice3.jpg" alt="Alice in fancy dress" />
    <Image src="/static/alice2.jpg" alt="Alice in fancy dress">
      <p>Alice in the garden </p>
     </Image>
    <p>Alice is seven years old. She has had six litters of puppies and is now retired. She is a fawn pug from a fawn line of pugs. Alice loves to be cuddled and sleeps as much as she can!</p>

    <h4>Grace</h4>
    <p><a href="/static/pedigree/grace_pedigree.jpg" onClick={() => pageTracker._trackPageview('/pedigree/grace')}>View Grace's Pedigree</a> </p>
    <Image src="/static/grace1-pug.jpg" alt="Grace in the garden" />
    <Image src="/static/grace2-pug.jpg" alt="Grace with a ball">
      <p>Grace in our garden</p>
     </Image>
    <p>Grace has been shown at regional Pug Shows and loves her bone! Grace is three years old.</p>

    <h4>Betsy</h4>
    <p><a href="/static/pedigree/betsy_pedigree.jpg" onClick={() => pageTracker._trackPageview('/pedigree/betsy')}>View Betsy's Pedigree</a> </p>
    <Image src="/static/betsy.jpg" alt="" />
    <Image src="/static/betsy2.jpg" alt="" />
    <p>Betsy is two years old and loves her walks in the sun around Reeth. She has been shown at regional Pug Shows.</p><p></p>

    <h4>Kacey</h4>
    <p>Kacey is a graceful pug, and very loving, she would rather take a step back and watch the others run around. Kacey is also a fantastic Mum, and not long ago had a beautiful litter of puppies. </p>
    <Image src="/static/kasey.jpg" alt="" />
    <Image src="/static/kasey2.jpg" alt="" />

    <h4>Mia</h4>
    <p><a href="/static/pedigree/mia-pedigree.jpg" onClick={() => pageTracker._trackPageview('/pedigree/mia')}>View Mia's Pedigree</a> </p>
    <p>Mia is our first black Pug we have welcomed to our family, she is a cheeky monkey, as she loves to chase all of the other pugs. Mia enjoys going for walks on the beach, and up on the fell. Mia is one years old, and has established herself well in the family.</p>

    <Image src="/static/Mia.jpg" alt="Betty growing up">
      <p>Mia on a walk in Swaldale</p>
    </Image>
    <Image src="/static/Mia-at-the-beach.jpg" alt="Bettys daughter that went to Sweden">
      <p>Mia on a beach walk with the pug club</p>
    </Image>

    <h4>Daphne</h4>
    <p><a href="/static/pedigree/daphne-pedigree.jpg" onClick={() => pageTracker._trackPageview('/pedigree/daphne')}>View Daphne's Pedigree</a> </p>
    <p>Daphne is the daughter of Betsy and Poe. She is full of character and a joy to have around.</p>

    <Image src="/static/daphne.jpg" alt="Betty growing up" />
    <Image src="/static/daphne2.jpg" alt="" />


    <h4>Wendy</h4>
    <p><a href="/static/pedigree/wendy-certificate.jpg" onClick={() => pageTracker._trackPageview('/pedigree/wendy')}>View Wendy's Pedigree</a> </p>
    <p>Our first French Bulldog. Aged 8 months in the photos below. She was entered in her first championship show qualifying for Crufts by getting second place.</p>

    <Image src="/static/wendy.jpg" alt="Betty growing up" />
    <Image src="/static/wendy2.jpg" alt="" />
    <Image src="/static/wendy3.jpg" alt="" />
    <Image src="/static/wendy4.jpg" alt="" />

    <h4>Chip - Eastonite Chocolate Chip</h4>
    <p><a href="/static/pedigree/chip-certificate.jpg" onClick={() => pageTracker._trackPageview('/pedigree/chip')}>View Chip's Pedigree</a> </p>
    <p>RCC at Midlands &amp; Northern Counties Champ Show - 27th Sept 2015 aged just over 12 months under judge Mr Paul Harding</p>
    <p>1st at Championship Shows</p>
    <p>Best of Breeds</p>
    <p>Best puppy in show</p>
    <p>He is listed in the Top French Bulldog Junior Dogs 2015</p>
    <p>Has passed his Bronze &amp; Silver health tests</p>

    <Image src="/static/chip1.jpg" alt="French Bulldog - Eastonite Chocolate Chip" />
    <Image src="/static/chip3.jpg" alt="French Bulldog - Eastonite Chocolate Chip" />
    <Image src="/static/chip2.jpg" alt="French Bulldog - Eastonite Chocolate Chip" />
    <Image src="/static/chip_1.jpg" alt="French Bulldog - Eastonite Chocolate Chip" />
    <Image src="/static/chip_2.jpg" alt="French Bulldog - Eastonite Chocolate Chip" />

  </div>
)

export default OurPugs
