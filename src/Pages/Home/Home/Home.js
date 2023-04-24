import React, { useContext, useEffect ,useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import NewsSummary from '../../NewsSummary/NewsSummary';
import { DarkModeContext } from '../../theme/theme';


const Home = () => {
   const {darkMode}=useContext(DarkModeContext)
    const[allNews, setAllNews]=useState([])
    const [loading, setLoading]=useState(true)

    useEffect(() => {
      setTimeout(() => {
        fetch('https://dragon-news-server-side.vercel.app/news')
          .then(res => res.json())
          .then(data => {
            setAllNews(data);
            setLoading(false);
          });
      }, 2000); // Set a delay of 2 seconds (2000 milliseconds)
    }, []);
  
    if (loading) {
      return (
        <Spinner className={darkMode ? 'dark' : ''} animation="pulse" variant="light">
       <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
     
      return (
    <div className={darkMode ? 'dark' : ''} >
      {allNews.map(news => (
        <NewsSummary  key={news.id} news={news}></NewsSummary>
      ))}
    </div>
       
    );
};

export default Home;