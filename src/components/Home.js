import React from 'react';

function Home()
{
  return (
    <div>
      <h1>Home Component</h1>
      <div className="add-to-cart">
        <img src="https://img.favpng.com/12/18/15/shopping-cart-icon-png-favpng-e5DiMUYLNYaTjdsibphFUCAxC.jpg" alt="cart" />
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://images.macrumors.com/t/1Qx7Upnlkr63vKmeNRIWm3JH3wI=/800x0/smart/https://images.macrumors.com/article-new/2017/09/iphonexdesign.jpg?lossy" alt="Iphone" />

        </div>
        <div className="text-wrapper item">
          <span>
            IPhone
          </span>
          <span>
            Price : $1000
          </span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
