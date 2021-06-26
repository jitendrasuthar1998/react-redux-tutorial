import { connect } from 'react-redux';

import Home from "../components/Home";
import { addToCart, removeToCart } from '../services/actions/action';

const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data)),
  removeToCartHandler: data => dispatch(removeToCart(data))
})

const mapStateToProps = state => ({
  data: state.cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)

//export default Home;
