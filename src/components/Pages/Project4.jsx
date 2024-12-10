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
            <h4 className="lh-lg">
Here’s the corrected and improved version of the text:

A College Timetable is a necessity for every college, as it is challenging to maintain manual records for each staff member and class. It is also difficult to manage clashes between periods on the same day. The college timetable provides drag-and-drop functionality for managing staff schedules, along with a print option for staff. The timetable is divided into two sections: the student end and the staff end. It efficiently helps college staff make any necessary changes to the timetable.</h4>
          <hr />
          <a className='btn btn-dark'href="https://github.com/AryanBagayatkar/TimeTable">Code</a>
        </div>
      </div>
    </div>
  )
}

export default Project4
