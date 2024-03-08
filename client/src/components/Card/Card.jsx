



import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideogamesById, cleanDetail } from "../../redux/actions"
import Styles from "../Card/Card.module.css"

export default function Card() {
    const { id } = useParams();
    const videogame = useSelector((state) => state.videogameById);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideogamesById(id));
    }, [id]);

    const { name, description, released, background_image,rating,genres,metacritic_platforms } = videogame; // me faltaba esto, desestructurar
    console.log(metacritic_platforms)

    return (



        <div>
            <h1>{name} </h1>
            <br />
            <img src={background_image} alt="" />
            <br />
            <br />
            <hr />
            <h2>Descripcion: {description} </h2>
            <hr />
            <br />
            <h3> Lanzamiento: {released} </h3>
            <h3>Generos: {genres} </h3>
            <h3>Platadormas {metacritic_platforms} </h3>
            <h3>Rating: {rating} </h3>

        </div>




    )
}
