import React from 'react';
import { Divider } from 'semantic-ui-react';
import '../style.css'


function Header(){ 
    return (
        <section className="p-5 headerbody">
      <div>
        
          <div className="col-md">
            <div className="card text-dark">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">News For You</h3>
              
              </div>
            </div>
          </div>
          
      </div>
    </section>

    )
}
export default Header