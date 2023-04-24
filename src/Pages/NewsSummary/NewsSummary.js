import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../theme/theme';

const NewsSummary = ({ news }) => {
 const {darkMode}=useContext(DarkModeContext)
  const { _id, author, details, rating, title, total_view, image_url } = news;

  return (
    
  
        <Card >
          <div className={darkMode ? 'dark' : ''}>
          <Card.Header  className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <Image src={author.img} className="me-2" style={{ height: '60px' }} roundedCircle />
              <div className={darkMode ? 'dark' : ''}>
                <p className="mb-0">{author.name}</p>
                <p>{author.published_date}</p>
              </div>
            </div>
          </Card.Header>
          <Card.Body >
            <Card.Title >{title}</Card.Title>
            <Card.Img variant="top" src={image_url} />
            <Card.Text>
              {details.length > 200 ? (
                <>
                  {details.slice(0, 250) + '...'}
                  <Link to={`/news/${_id}`}>Read More</Link>
                </>
              ) : (
                <>{details}</>
              )}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <div>
          <Card.Footer >
         <div>
              <span>{rating.number}</span>
            </div>
            <div>
              <span>{total_view}</span>
            </div>
          </Card.Footer>
          </div>
          </div>
        </Card>
     
       
  );
};

export default NewsSummary;

