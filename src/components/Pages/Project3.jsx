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
          <h4 className="lh-lg">Language Changer, as the name suggests, allows users to switch languages, such as from English to Spanish or any other language. The i18Next npm package plays a crucial role in this functionality, as it contains various languages and their translated versions. There is a dropdown menu that helps users navigate through different languages. This feature is particularly useful in the global context, as it supports multiple languages, providing a better experience while traveling around the world.</h4>
          <hr />
    
          <a className='btn btn-dark'href="https://github.com/AryanBagayatkar/Task2Nullclass">Code</a>
        </div>
      </div>
    </div>
  )
}

export default Project3
