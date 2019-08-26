import React, { Component } from 'react';

import './index.css';
import { NavLink } from 'react-router-dom';


class Footer extends Component {
  render(){
    return (
      <div className="footer">
        <div className="row">
          <div className="footer__left col-md-4">
            <p className="footer-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quia modi, dolorum, recusandae blanditiis omnis ea, accusamus laudantium eaque ut eum voluptatibus odio eos. Aliquid tempora consectetur animi velit, architecto.</p>
          </div>

          <div className="footer__middle col-md-4">
            <p className="footer-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quia modi, dolorum, recusandae blanditiis omnis ea, accusamus laudantium eaque ut eum voluptatibus odio eos. Aliquid tempora consectetur animi velit, architecto.</p>

          </div>

          <div className="footer__right col-md-4">
            <p className="footer-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quia modi, dolorum, recusandae blanditiis omnis ea, accusamus laudantium eaque ut eum voluptatibus odio eos. Aliquid tempora consectetur animi velit, architecto.</p>

          </div>
      </div>


      </div>

    );
  }
}

export default Footer;
