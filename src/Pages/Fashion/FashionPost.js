import React from 'react';
import { Link } from 'react-router-dom';

const FashionPost = ({ info = {} }) => {
  const { thumb_img, categoryname, title, article_id } = info;
  const path = {
    'Fashion Tip': 'fashion-tips',
    'Outfit Ideas': 'outfit-ideas',
    'Inside Wecodi': 'inside-wecodi',
  };

  return (
    <div className="fashion_articles">
      <div className="thumbnail">
        <Link to={`/article/${article_id}`}>
          <img src={thumb_img} alt="sample" width="120" />
        </Link>
      </div>
      <div className="entry">
        <div className="entry-Container">
          <Link to={`/article/${article_id}`}>
            <p className="entry-category">{categoryname}</p>
          </Link>
          <h3 className="entry-title">
            <Link to={`/article/${article_id}`} className="articleTitle">
              {title}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FashionPost;