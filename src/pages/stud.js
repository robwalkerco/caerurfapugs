import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Alert from '../components/Alert'
import Image from '../components/Image'

const Stud = () => (
  <div>
		<h1>Stud Pugs</h1>

		<p>We have two of our own pugs, Dudley and Poe, available for stud.</p>

    <h4>Dudley</h4>
		<p><Link to="/static/pedigree/dudley_pedigree.jpg" onClick={() => pageTracker._trackPageview('/pedigree/dudley')}>View Dudley's Pedigree</Link> </p>
		<p>Dudley is our fawn coloured stud dog. He is proven and has sired several litters. He is KC registered and is 7 years old.</p>
		<p>He has a very friendly nature and lives with us as part of our family.</p>
		<p>His stud fee is £500</p>
		<Image src="/static/dudley-stud.jpg" alt="Dudley our stud pug" width="347" height="287">
			<p>Dudley, our dog that we have bred our litters from</p>
	  </Image>

    <h4>Poe</h4>
		<p><Link to="/static/pedigree/poe_pedigree.jpg" onClick={() => pageTracker._trackPageview('/pedigree/poe')}>View Poe's Pedigree</Link> </p>
		<p>Poe is our apricot coloured stud dog. He is proven and has also sired several litters. He is 5 years old and is KC registered.</p>
		<p>He has a very friendly nature and lives with us as part of our family.</p>
		<p>His stud fee is £500</p>
		<Image src="/static/poe-stud.jpg" alt="Poe, our Apricot stud" width="313" height="287">
			<p>Poe, our Apricot stud</p>
	  </Image>
	</div>
)

export default Stud
