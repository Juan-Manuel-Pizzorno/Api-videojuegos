import { getVideogames, cleanDetail } from "../../redux/actions"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Cards() {

  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.videogames);

  useEffect(() => {
    const videogames = async () => {
     
      setTimeout(async () => {
        await dispatch(getVideogames()); // Espera a que se complete la acción, sino aparece la imagen default
        //setLoading(false); // Establece loading a false después de cargar los datos
      },);
      dispatch(cleanDetail()); // ver esto xq va al final creo
    };
    videogames();
  }, [dispatch]);

  
  const hola=videogame.map(videogames=>videogames.name) //con esto saco el nombre de todos

  return (
    <div>
      
      {
    videogame.map(videogame=>

      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={videogame.id}>
            <Card>
              <Card.Img variant="top" src={videogame.background_image} />
              <Card.Body>
                <Card.Title> {videogame.name}  </Card.Title>
                <Card.Text>
                 {videogame.id}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )}




    </div>
  )
}
