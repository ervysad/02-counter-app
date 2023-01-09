import PropTypes from 'prop-types';


var name = "Brian Valencia";

export const Me_sirve = ( props ) => {
  console.log( props );
  return (
    <>
      
      <h2> {props.title }</h2>
      <h2>Creator: {name}</h2>
      <h1> { props.aux } </h1>
      </>
  )
}

Me_sirve.propTypes = {
  title: PropTypes.string,
  aux: PropTypes.string.isRequired,

}