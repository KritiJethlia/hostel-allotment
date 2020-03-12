import React from 'react';

const SearchBox = ({searchChange}) =>{
	return(
		<div className={`pa2`} >
		  <input 
		  	className = 'pa3 ba b--green bg-white tc'
		  	type = 'search' 
		  	placeholder = 'Search a Group' 
		  	onChange = {searchChange}
		  />
		</div> 
	);
}

export default SearchBox;