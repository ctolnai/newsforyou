import React from 'react';
import '../style.css';

function Header() {
  return (
    <section className="p-5 headerbody">
      <div>
        <div className="col-md">
          <div className="card text-dark">
            <div className="card-body text-center">
              <h1 className="card-title mb-3">News For <span> You</span></h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Header;
