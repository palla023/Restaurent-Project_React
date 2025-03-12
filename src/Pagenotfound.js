import React from 'react'
import Header from './Container/Header.js'

const Pagenotfound = () => {
  return (
	<div>
		<Header />
		<div className='text-center'>
			<h4 className='mt-3 text-primary '>
				Page Not Found 404
			</h4>
		</div>
	</div>
  )
}

export default Pagenotfound;