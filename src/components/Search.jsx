import React, { useState } from 'react'

const Search = () => {
  const [state, setState] = useState('')
  return (
    <div className='row'>
      <div className='input-field inlin'>
        <input
          placeholder='search'
          type='search'
          className='validate'
          value={state}
          onChange={(e) =>
            setState(e.target.value)
          }
        />
      </div>
    </div>
  )
}

export default Search
