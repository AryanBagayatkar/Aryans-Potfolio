import React from 'react'
import image4 from '../../assets/image/img4.png'

const Project4 = () => {
  return (
    <div>
      <div className="container">
        <img className='img-fluid' src={image4} alt="An image" />
        <div className='shadow-lg p-4'>
          <h2>Collage TimeTable</h2>
          <p>Tools</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>
          <hr />
          <p>Features</p>
          <ul>
            <li>Responsive</li>
            <li>Genrative</li>
            <li>API Driven</li>
          </ul>
          <hr />
            <h4 className="lh-lg">A collage TimeTable is a requirement of every collage as it is difficult to maintain manual record of each staff and each class , it is difficult to manage clashes between two period on same day , collage timetable gives mdrag and drop functionality to the managung staff and it also gives print option to staff, collage timetable is in two sides student end and staff end. It efficently helps collage staff to improvise any changes in collage timetable. </h4>
          <hr />
          <a className='btn btn-primary'href="https://github.com/AryanBagayatkar/TimeTable">Code</a>
        </div>
      </div>
    </div>
  )
}

export default Project4
