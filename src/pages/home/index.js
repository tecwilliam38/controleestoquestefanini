import React from 'react'
import Login from '../login'
import Cadastro from '../cadastro'

export default function Home() {
  return (
    <>
      <div className='bgHome d-flex '>
        <div className='row justify-content-center'>
          <div className='col col-12'>
            <Login />
          </div>
        </div>        
      </div>
    </>
  )
}
{/* <div className='col col-md-6'>
  <Cadastro />
</div> */}
