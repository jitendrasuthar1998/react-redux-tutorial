import { connect } from 'react-redux';

import Header from "../components/Header";

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({
  data: state.cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

//export default Home;
