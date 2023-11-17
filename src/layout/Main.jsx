import React, { Component } from 'react'
import Movies from '../components/Movies'
import Preloader from '../components/Preloader'
import Search from '../components/Search'
class Main extends Component {
  state = {
    movies: [],
  }
  componentDidMount() {
    fetch(
      'http://www.omdbapi.com/?apikey=daeb0d80&s=matrix'
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ movies: data.Search })
      )
  }
  render() {
    const { movies } = this.state
    return (
      <main className='conteiner content'>
        <Search />
        {movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <Preloader />
        )}
      </main>
    )
  }
}

export default Main
