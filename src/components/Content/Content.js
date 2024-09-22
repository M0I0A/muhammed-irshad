import React from 'react'
import Works from '../Works/Works'
import Services from '../Services/Services'
import Leader from '../Leader/Leader'
import Testimoni from '../Testmoni/Testimoni'

function Content() {
  return (
    <div className='content'>
      <Works/>
      <Services/>
      <Leader/>
      <Testimoni/>
    </div>
  )
}

export default Content
