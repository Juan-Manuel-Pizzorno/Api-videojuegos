import { getVideogames, cleanDetail } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Cards() {
  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.videogames);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getVideogames());
      dispatch(cleanDetail());
    };
    fetchData();
  }, [dispatch]);

  return (

    <Row xs={1} md={2} className="g-4" >
      {videogame.map(videogame => (
        <Col key={videogame.id}>
          <Card key={videogame.id}>
            <Card.Img variant="top" src={videogame.background_image} />
            <Card.Body>
              <Card.Title>{videogame.name}</Card.Title>
              <Card.Text>
                {videogame.genreNames}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}