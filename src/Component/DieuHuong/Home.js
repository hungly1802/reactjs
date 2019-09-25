import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <section className="home">
        <div>
          <img src="home-main-banner-Bri.png" alt="" />
          <div className="content">
            <p>Beautiful smile. Beautiful you.</p>
            <span>Transform your entire appearance painlessly.</span>
            <button>Like</button>
            <button>Share</button>
          </div>
        </div>
        <div className="home-form">
          <span> Find A Certified Lumineers Dentist</span>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="zip" />
          <button />
        </div>
      </section>
            </div>
        );
    }
}

export default Home;