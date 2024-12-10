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
          <h4 className='lh-lg'>DoubtBot is an Artificial Intelligence bot designed to assist you with your queries and requirements. AI-powered bots are increasingly used these days to provide customer support, replacing human agents while offering 24/7 assistance. I have integrated the Botpress API, which is floating at the bottom-right corner of the screen. The bot is trained to perform mathematical calculations and more. It interacts with users through a single prompt, which can be customized based on the user’s input.</h4>
          <hr />
         
          <a className='btn btn-dark'href="https://github.com/AryanBagayatkar/DBC1">Code</a>
        </div>
      </div>
    </div>
  )
}

export default Project2
