// import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {useLoaderData} from 'react-router-dom';
import Article from '../Article/Article';
const Articles = (props) => {


  const [relatedNews, setRelatedNews] = useState([]);
console.log(relatedNews)
  useEffect(() => {
    fetch(`https://dragon-news-server-side.vercel.app/news/${props.id}/related`)
    .then(res => res.json())
    .then(data => {
      setRelatedNews(data.relatedNews);
      console.log( setRelatedNews(data.relatedNews))
    })
    .catch(error => console.log(error));
}, [props.id]);

 

    return (
        <div>
            {relatedNews.map(article => (
        <div key={article._id}>
          <h2>{article.title}</h2>
          
        </div>
      ))}

        
        </div>
    );
};

export default Articles;