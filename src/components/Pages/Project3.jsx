import React from 'react'
import image3 from '../../assets/image/img3.png'

const Project3 = () => {
  return (
<div>
      <div className="container">
        <img className='img-fluid' src={image3} alt="An image" />
        <div className='shadow-lg p-4'>
          <h2>Language Changer</h2>
          <p>Tools</p>
          <ul>
            <li>React</li>
            <li>Javascript</li>
          </ul>
          <hr />
          <p>Features</p>
          <ul>
            <li>Acts a Translation Tool</li>
          </ul>
          <hr />
          <h4 className="lh-lg">Language Changer as name suggest it changes Language from English to Spanish or anything else , Here i18Next npm package plays important  role, as i18Next contains all Languages and translated version, here there is a dropdown which help to navigate through lanuages.It helps in open world as it has world wide lanuage in it , which better expirence while travelling around the globe.</h4>
          <hr />
    
          <a className='btn btn-primary'href="https://github.com/AryanBagayatkar/Task2Nullclass">Code</a>
        </div>
      </div>
    </div>
  )
}

export default Project3
