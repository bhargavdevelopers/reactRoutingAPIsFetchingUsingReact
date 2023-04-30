import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  return (
    <Link to={`/blogs/${id}`} className="Item-link">
      <div className="blog-item-container">
        <img src={imageUrl} alt={`item${id}`} className="blog-item-img" />
        <div className="blog-item-details">
          <p>{topic}</p>
          <h1 className="blog-item-title">{title}</h1>
          <div className="author-info-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
            <p className="author-name"> {author} </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
