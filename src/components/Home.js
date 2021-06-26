import React from 'react';

function Home(props)
{
  console.warn("props of Home component", props.data);
  return (
    <div>
      <h1>Home Component</h1>
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
          <button onClick={() =>
            props.addToCartHandler({ price: '1000', name: 'IPhone 11' })
          }>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home;
