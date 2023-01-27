import PropTypes from 'prop-types';


var name = "Brian Valencia";

export const MeSirve = ( props ) => {
  console.log( props );
  return (
    <>
      
      <h2 className='content'> {props.title }</h2>
      <h2 className='content'>Creator: {name}</h2>
      <h1 className='content'> { props.aux } </h1>
      </>
  )
}

MeSirve.propTypes = {
  title: PropTypes.string,
  aux: PropTypes.string.isRequired,

}