import React from 'react';

function Header(props)
{
  console.warn("props of Header component", props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">
          {props.data.length}
        </span>
        <img src="https://img.favpng.com/12/18/15/shopping-cart-icon-png-favpng-e5DiMUYLNYaTjdsibphFUCAxC.jpg" alt="cart" />
      </div>
    </div>
  )
}

export default Header;
