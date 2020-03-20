import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={"https://firebasestorage.googleapis.com/v0/b/lab08-expense-e012b.appspot.com/o/40512937_2193448664030643_8164302615706861568_o.jpg?alt=media&token=0cb10450-8226-4a1f-a417-5a753a0ab77d"} className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Jiraphat Singnoi (610610573)</p>
            <p>This app use Google Firebase as backend.</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
