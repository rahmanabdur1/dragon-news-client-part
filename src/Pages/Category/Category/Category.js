import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../../NewsSummary/NewsSummary';
import { useEffect, useState } from 'react';

const Category = () => {
  const [isLoading, setIsLoading] = useState(true);
  const categoryNews = useLoaderData();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // set the timeout to 1 seconds

    return () => {
      clearTimeout(timer);
    };

  }, [categoryNews]);
  console.log(isLoading);

  return (
    <div>
      <h2>This is Category has news</h2>
      {
        categoryNews.map(news => <NewsSummary
          key={news._id}
          news={news}
        ></NewsSummary>)
      }
    </div>
  );
};

export default Category;