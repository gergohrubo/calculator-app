import React from 'react';
import { connect } from 'react-redux';
import { resetCount, writeNumber, writeOperator, evaluate } from './actions.js'
import './App.css';

const mapStateToProps = (state) => {
  return{
    count: state.count,
    operator: state.operator,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    reset: () => {
      dispatch(resetCount())
    },
    writeNumber: (number) => {
      dispatch(writeNumber( {numberToWrite: number }))
    },
    writeOperator: (operator) => {
      dispatch(writeOperator( { operatorToWrite: operator }))
    },
    evaluate: () => {
      dispatch(evaluate())
    }
  }
}

class Calculator extends React.Component {
  handleOnClick = (e) => {
    if (!isNaN(e.target.name)) {
      this.props.writeNumber(e.target.name)
    } else if (e.target.name === 'C') {
      this.props.reset()
    } else if (e.target.name === '=') {
      this.props.evaluate()
    } else {
      this.props.writeOperator(e.target.name)
    }
  }
  render() {
    return (
      <div className="body">
      <div className="result-row">
      <h1 className="result-text">{this.props.count}</h1>
      </div>
      {['1','2','3','+','4','5','6','-','7','8','9','*','C','0','=','/'].map((item, i) => <button key={i} name={item} onClick={this.handleOnClick}>{item}</button>)}
      </div>
    )}
}

const App = connect(mapStateToProps, mapDispatchToProps)(Calculator);

export default App;
