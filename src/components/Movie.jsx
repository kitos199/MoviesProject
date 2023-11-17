function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props
  return (
    <div
      id={id}
      className='card movie'>
      {poster === 'N/A' ? (
        <img
          alt=''
          src='https://placekitten.com/640/360'
        />
      ) : (
        <img
          alt=''
          src={poster}
          className='activator'
        />
      )}

      <div className='card-image waves-effect waves-block waves-light'></div>
      <div className='card-content'>
        <span className='card-title activator grey-text text-darken-4'>
          {title}
        </span>
        <p>
          {year}
          <span className='right'>{type}</span>
        </p>
      </div>
    </div>
  )
}
export default Movie
