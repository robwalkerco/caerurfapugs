import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Alert from '../components/Alert'
import Image from '../components/Image'

const OurPuppiesForSave = () => (
  <div>
		<h1>Pug Puppies for sale</h1>

    <Alert title="Daphne has had her puppies">
      <p>5 beautiful Apricot boys were born on the 15th Oct 2016.</p>

      <p>Please get in touch if you are interested in finding out more about them.</p>

      <p>View our <Link to="/pug-puppies-for-sale">Puppies for sale</Link> page to see
      some photos of some of our previous Pug Puppy litters.</p>
    </Alert>

		<h2>Previous Pug litters</h2>
		<p>Our Grace has given birth to a lovely litter of three Pug Puppies.</p>
		<p>The puppies were deliverd on the 9th April 2013, so are still very cute and tiny. Check back for updates of when the puppiew will be ready for their new homes. Check out the photos below, and if you are interested in your own gorgeous Pug Puppy just get in touch today.</p>
		<Image src="/static/graces-pug-puppies.jpg" alt="Grace looking after her pug puppies">
			<p>Grace looking after her pug puppies</p>
  	</Image>
		<Image src="/static/pug-puppies-feeding.jpg" alt="Grace's pug puppies having a feed">
			<p>Grace's pug puppies having a feed</p>
	 	</Image>
		<Image src="/static/pug-puppy-feeding-close-up.jpg" alt="One very content pug puppy!">
			<p>One very content pug puppy!</p>
  	</Image>
		<Image src="/static/two-pug-puppies-feeding.jpg" alt="Two of Grace's pug puppies having a feed">
			<p>Two of Grace's pug puppies having a feed</p>
  	</Image>
		<h2>Grace's previous litter of Pug Puppies</h2>

		<Image src="/static/pug_puppies_litter_1.jpg" alt="Grace's puppies at feeding">
			<p>Grace's puppies at feeding time</p>
  	</Image>
		<Image src="/static/pug_puppies_litter_2.jpg" alt="Grace's puppies at feeding" />
		<Image src="/static/pug_puppies_litter_3.jpg" alt="Grace's pug puppies sleeping">
			<p>Grace's pug puppies sleeping</p>
  	</Image>

  	<p>We have a waiting list for our puppies, so please feel free to contact me with any enquiries or to add yourself to our wating list.</p>
	  <br />
  </div>
)

export default OurPuppiesForSave
