import {connect} from 'react-redux';
import {exampleAction} from '../actions';
import ClickMe from '../components/ClickMe';

function mapStatetoProps (state) {
  return {
    value: state.placeholder
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clickMe: (val) => dispatch(exampleAction(val))
  }
}

const _ClickMe = connect(
  mapStatetoProps,
  mapDispatchToProps
)(ClickMe);

export default _ClickMe;