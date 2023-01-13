import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import {CATEGORIES} from "@/routes";
import {IHeaderProps} from './type';

import {ReactComponent as SearchIcon} from "@/assets/icons/search.svg";
import {ReactComponent as FilterIcon} from "@/assets/icons/filter.svg";

import './styles.scss';

const Header: FC<IHeaderProps> = () => {

	return (
		<header className="header">
			<nav className="header-left">
				{
					CATEGORIES.map(category => (
						<NavLink className="header-left__item" to={category.url}>{category.title}</NavLink>
					))
				}
			</nav>
			<div className="header-right">
				<div className="header-right-search">
					<div className="header-right-search__input">
						<SearchIcon/>
						<input type="text" placeholder='Search' />
					</div>
					<div className="header-right-search__filter">
						<FilterIcon/>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
