import React from 'react'

class Search extends React.Component{
  state={
    search:''
  }
  handelKey=(event)=>{
    if(event.key==="Enter"){
      this.props.searchMovies(this.state.search)
    }
  }
  render(){return (
    <div className='row'>
      <div className='input-field '>
        <input
          placeholder='search'
          type='search'
          className='validate'
          value={this.state.search}
          onChange={(event)=>this.setState({search:event.target.value})}
          onKeyDown={this.handelKey}
        />
      </div>
    </div>
  )}
  
}

export default Search
