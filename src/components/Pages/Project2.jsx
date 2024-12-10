import React from 'react'
import image2 from '../../assets/image/img2.png'

const Project2 = () => {
  return (
<div>
      <div className="container">
        <img className='img-fluid' src={image2} alt="An image" />
        <div className='shadow-lg p-4'>
          <h2>DoubtBot</h2>
          <p>Tools</p>
          <ul>
            <li>React</li>
            <li>Javascript</li>
          </ul>
          <hr />
          <p>Features</p>
          <ul>
            <li>Responsive</li>
            <li>Genrative</li>
            <li>API Driven</li>
          </ul>
          <hr />
          <h4 className='lh-lg'>DoubtBot is a Artifical Inteligence Bot that help us to assist you on your requirment question , the Artifical Bots are highly used in this days to assist customer as it replace human support where as it provides 24x7 support to customer.I have integrated Botpress API which is floating on bottom right corner , the Bot is trainned to perform mathematical calculation and so on , Bot interact with user by a single prompt that can be whatever.</h4>
          <hr />
         
          <a className='btn btn-primary'href="https://github.com/AryanBagayatkar/DBC1">Code</a>
        </div>
      </div>
    </div>
  )
}

export default Project2
