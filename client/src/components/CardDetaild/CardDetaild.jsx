import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideogamesById, cleanDetail } from "../../redux/actions"

import Styles from "../CardDetaild/CardDetaild.module.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function CardDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const videogame = useSelector((state) => state.videogameById);

    useEffect(() => {
        const videogameById = async () => {
            dispatch(cleanDetail()); // ver esto xq va al final creo
            setTimeout(async () => {
                await dispatch(getVideogamesById(id)); // Espera a que se complete la acción, sino aparece la imagen default
                setLoading(false); // Establece loading a false después de cargar los datos
            },);
        };
        videogameById();
    }, [dispatch, id]);


    const { a, juana } = Styles;
    const { name, description, released, background_image, rating, genres, platforms } = videogame;
    const imageFail = "https://pbs.twimg.com/media/DcwoS-VWkAIB60j.jpg"

    return (
        <div>
            {loading ? (
                <h1>CARGANDO..</h1>
            ) : (
                <div className={juana}>


                    <Card style={{ width: '50rem' }}>
                        <Card.Img variant="top" src={background_image ? background_image : imageFail} />
                        <Card.Body>
                            <Card.Title><h1> {name}</h1></Card.Title>
                            <h4>Descripción:</h4>
                            <div style={{ color: "black", fontSize: "150%" }}>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                            </div>
                        </Card.Body>
                        <ListGroup className="list-group-flush">

                            <ListGroup.Item><h4>Plataformas:</h4> <h5> {platforms}</h5> </ListGroup.Item>
                            <ListGroup.Item><h4>Género:</h4>   <h5> {genres}</h5> </ListGroup.Item>
                            <ListGroup.Item><h4>Lanzamiento:</h4> <h5> {released}</h5> </ListGroup.Item>
                            <ListGroup.Item><h4>Rating:</h4><h5> {rating}</h5> </ListGroup.Item>
                        </ListGroup>

                    </Card>



                </div>
            )}
        </div>






    );
}