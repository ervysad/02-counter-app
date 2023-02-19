
import './App.css';
import PropTypes from 'prop-types';


function App(props) {
  return (
    <div className="App">
      <header>
        <h1>{ props.proping }</h1>
      </header>
    </div>
  );
}


export default App;




App.propTypes = {
  proping: PropTypes.string.isRequired,
}