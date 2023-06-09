
import { Link, useLoaderData} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { DarkModeContext } from '../theme/theme';
import { useContext } from 'react';

const News = () => {
   
    const { darkMode} = useContext(DarkModeContext);
    const news = useLoaderData();
    const { title, details, image_url, category_id } = news;
    console.log(news)
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body className={darkMode ? 'dark' : ''}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All news in this category</Button>
                </Link>
            </Card.Body>
        </Card>
          
    );
};

export default News;