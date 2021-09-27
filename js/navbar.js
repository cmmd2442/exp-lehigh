import React from 'react';
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
	return (
		<Nav>
			<Bars />

			<NavMenu>
				<NavLink to='/home' activeStyle={{ fontWeight: "bold", color: "red" }}>
					Home
				</NavLink>

				<NavLink to='/threeBed1' activeStyle={{ fontWeight: "bold", color: "red" }}>
				 	Three Bedroom #1	
				</NavLink>

				<NavLink to='/threeBed2' activeStyle={{ fontWeight: "bold", color: "red" }}>
		 			Three Bedroom #2	
				</NavLink>

				<NavLink to='/fourBed' activeStyle={{ fontWeight: "bold", color: "red" }}>
					Four Bedroom	
				</NavLink>

				<NavLink to='/fiveBed1' activeStyle={{ fontWeight: "bold", color: "red" }}>
					5-Bedroom # 1	
				</NavLink>

				<NavLink to='/fiveBed2' activeStyle={{ fontWeight: "bold", color: "red" }}>
					5-Bedroom # 2	
				</NavLink>

				<NavLink to='/sign-up' activeStyle={{ fontWeight: "bold", color: "red" }}>
					Sign Up
				</NavLink>

			</NavMenu>

			<NavBtn>
				<NavBtnLink to='/signin'>Sign In</NavBtnLink>
			</NavBtn>
		</Nav>
	);
};

export default Navbar;

