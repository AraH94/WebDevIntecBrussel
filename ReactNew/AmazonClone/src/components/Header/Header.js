import React from 'react';
import "./style/Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
	return (
		<nav className="header">
			{/* Logo on the left -> img */}
			<Link to="/">
				<img className="header__logo" src="https://m.media-amazon.com/images/G/37/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_nl-main._CB436417128_.png" alt="" />
			</Link>

			{/* Search box */}
			<div className="header__search">
				<input type="text" className="header__searchInput" />
				<SearchIcon className="header__searchIcon" />
			</div>

			{/* 3 links */}
			<div className="header__nav">
				{/* 1st link*/}
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Hello,</span>
						<span className="header__optionLineTwo">Sign in</span>
					</div>
				</Link>

				{/* 2nd link*/}
				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>


				{/* 3rd link*/}
				<Link to="/" className="header__link">
					<div className="header__option">
						<span className="header__optionLineOne">Your</span>
						<span className="header__optionLineTwo">Prime</span>
					</div>
				</Link>
			</div>

			{/* 4th link*/}
			<Link to="/checkout" className="header__link">
				<div className="header__optionBasket"></div>
				{/* Shopping basket icon */}
				<ShoppingBasketIcon />
				{/* Number of items in the basket */}
				<span className="header__optionLineTwo header__basketCount">0</span>
			</Link>

			{/* Basket icon with number*/}
		</nav>
	)
}

export default Header;

/*
Difference between:
a href = refreshes the page 
Link = does not refresh the page
*/