import React from 'react'
import Bottom from './Bottom/Bottom'
import Nav from './Nav/Nav'

export default function Layout({children}) {

  return (
    <div>
      <Nav  />
      <div className='layout-div' style = {{marginTop : "66px", }}>
        {children}
      </div>
      <Bottom />
    </div>
  )
}
