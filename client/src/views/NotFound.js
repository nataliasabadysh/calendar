import React from 'react';
import { Link} from 'react-router-dom';


const NotFound = () => {
    return (
        <div className = 'section__plasephoder'>
        <section>
          <h1 className="section__title">Whoops, that page is gone.</h1>
          <Link to='/' className="btn"> Go back</Link>

          <img src="https://cdn.dribbble.com/users/634508/screenshots/6559227/la_cucharacha_dribbble_800x600.gif"  alt="not found image"/>
        </section>
      </div>
    )
  }
  export default NotFound;