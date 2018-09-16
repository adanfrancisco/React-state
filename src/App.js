import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    const { list } = this.props;
    // Nota: no es muy recomendable para proyectos grandes ya que se maneja el index por callbacks
    this.state = {
      list: list,
      moviesLength: list.length,
      likeCount: 0,
      unlikeCount: 0
    };
    this.onLike = this.onLike.bind(this);
    this.onUnlike = this.onUnlike.bind(this);
  }

  onLike(index) {
    const { list, likeCount, unlikeCount } = this.state;
    const newList = list;
    const { like, unlike } = newList[index];
    newList[index].like = !like;
    newList[index].unlike = !like && unlike ? false : unlike;
    this.setState({
      list: newList,
      likeCount: !like ? likeCount + 1 : likeCount - 1,
      unlikeCount: !like && unlike ? unlikeCount - 1 : unlikeCount
    })
  }

  onUnlike(index) {
    const { list, likeCount, unlikeCount } = this.state;
    const newList = list;
    const { unlike, like } = newList[index];
    newList[index].unlike = !unlike;
    newList[index].like = !unlike && like ? false : like;
    this.setState({
      list: newList,
      unlikeCount: !unlike ? unlikeCount + 1 : unlikeCount - 1,
      likeCount: !unlike && like ? likeCount - 1 : likeCount
    })
  }

  render() {
    const {
      list,
      moviesLength,
      likeCount,
      unlikeCount
    } = this.state;

    return (
      <section className="container">
        <MovieList 
          list={ list }
          onLike={ this.onLike }
          onUnlike={ this.onUnlike }
        />

        <Footer 
          all={ moviesLength }
          likeCount={ likeCount }
          unlikeCount={ unlikeCount }
        />
      </section>
    );
  }
}

export default App;
