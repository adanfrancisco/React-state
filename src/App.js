import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieList from './components/MovieList'
import Footer from './components/Footer'
import './App.css'
import { like, unlike, add } from './actions'

class Movies extends Component {
  
  handlerClickLike = (id, like, unlike) => {
    this.props.like(id, like, unlike)
  }

  handlerClickUnlike = (id, like, unlike) => {
    this.props.unlike(id, unlike, like)
  }

  onAddClick = (e) => {
    // console.log(`text -> ${this.input.value}`);
    e.preventDefault()
    if (!this.title.value.length) {
      return
    }
    this.props.add(Date.now(), this.title.value, this.description.value);
    this.title.value = '';
    this.description.value = '';
  }

  setTitle = element => {
    this.title = element
  }

  setDescription = element => {
    this.description = element
  }

  render() {
    const { data, likesCount: {likeCount}, likesCount: {unlikeCount} } = this.props

    return (
      <section className="container">
        <MovieList 
          movies={ data }
          handlerClickLike={this.handlerClickLike}
          handlerClickUnlike={this.handlerClickUnlike}
        />

        <Footer 
          likeCount={likeCount}
          unlikeCount={unlikeCount}
          all={data.length}
          setTitle={this.setTitle}
          setDescription={this.setDescription}
          onAddClick={this.onAddClick}
        />
      </section>
    )
  }
}

function mapStateToProps(state, props) {
  // console.log(state); // toma el nombre del reducer.
  return {
    data: state.dataMovies,
    likesCount: state.likesCount
  };
}

const mapDispatchToProps = {
  like,
  unlike,
  add
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
