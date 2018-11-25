import React from 'react'

const Footer = ({ likeCount, unlikeCount, all, setTitle, setDescription, onAddClick }) => (
  <footer className="Footer">
    <div className="data">
      <p>Likes: <span className="likes">{ likeCount }</span></p>
      <p>Unlikes: <span className="unlikes">{ unlikeCount }</span></p>
      <p>Total: <span className="total">{ all }</span></p>
    </div>
    <div className="add">
      <form onSubmit={onAddClick}>
        <div className="form">
          <label htmlFor="title">Title</label>
          <input ref={setTitle} type="text" name="title" placeholder="Title" />
        </div>
        <div className="form">
          <label htmlFor="description">Description</label>
          <textarea ref={setDescription} name="description"></textarea>
        </div>
        <button className="save">Add</button>
      </form>
    </div>
  </footer>
)

export default Footer
