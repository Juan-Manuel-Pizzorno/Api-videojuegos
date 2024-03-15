import { getVideogames, cleanDetail } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/*Aquí se está utilizando la expresión ternaria videogame.id === hoveredCard ? hoverCardStyle : cardStyle para 
determinar qué estilo aplicar. Si el ID del videojuego es igual al hoveredCard (es decir, si el mouse está sobre
   esta tarjeta), se aplica el estilo hoverCardStyle, que incluye una sombra para simular el efecto de 
   iluminación. Si el ID no es igual al hoveredCard, se aplica el estilo cardStyle, que es el estilo 
   predeterminado sin sombra.

Además, se han añadido los eventos onMouseEnter y onMouseLeave al componente Card para actualizar el estado 
hoveredCard. Cuando el mouse entra en la tarjeta, se establece el estado hoveredCard con el ID del videojuego 
correspondiente, y cuando el mouse sale de la tarjeta, se restablece el estado a null. Esto permite cambiar 
dinámicamente los estilos cuando el mouse entra y sale de la tarjeta, creando el efecto de iluminación deseado.*/


const cardStyle = {
  width:"600px",
  height: '400px', // Ajusta la altura según tus necesidades
  transition: 'box-shadow 0.3s', // Transición suave del efecto
};

const hoverCardStyle = {
  ...cardStyle,
  boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.3)', // Agrega una sombra al pasar el mouse
};

export default function Cards() {
  const dispatch = useDispatch();
  const videogame = useSelector((state) => state.videogames);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getVideogames());
      dispatch(cleanDetail());
    };
    fetchData();
  }, [dispatch]);

  return (

    <Row xs={5} md={4} className="g-5" >
      {videogame.map(videogame => (
        <Col key={videogame.id}>
          <Link to={`/videogames/${videogame.id}`} style={{ textDecoration: 'none' }}>
            <Card
              style={ videogame.id === hoveredCard ? hoverCardStyle : cardStyle}
              onMouseEnter={() => setHoveredCard(videogame.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card.Img variant="top" src={videogame.background_image} style={{ height: "300px",width:"600px" }} />
              <Card.Body>
                <Card.Title>{videogame.name}</Card.Title>
                <Card.Text>
                  {videogame.genreNames}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  )
}
