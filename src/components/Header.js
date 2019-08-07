import React from "react";
import "./styles/Header.css";

import {Link} from "react-router-dom"

const Header = () => {
	return (
		<div className="main ui attached stackable menu">
			{/* TODO:Think of a better name for this div :)*/}
				<Link to='/' className='item'>
          <i className="home icon" />
					Home
        </Link>

				<Link to='/forums' className='item'>
					<i className="comments icon" />
					Forums
				</Link>

				<Link to='/find/gym' className='item'>
					<i className="search icon" />
					Find a Gym
				</Link>

				<Link to='/find/route' className='item'>
					<i className="map icon" />
					Find a Route
				</Link>

				<div className="right item">
					<div className="ui icon input">
						<input type="text" placeholder="Search...." />
						<i className="search link icon" />
					</div>
				</div>
			</div>
	);
};

export default Header;
