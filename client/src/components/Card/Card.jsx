/*import { Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideogamesById, cleanDetail } from "../../redux/actions"
import ImageComponent from "../ImageComponent/ImageComponent"
import Styles from "../Card/Card.module.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import placeholder from "./imagen.jpg"
import ClipLoader from "react-spinners/ClipLoader";

export default function Card() {
    const { a } = Styles
    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const videogame = useSelector((state) => state.videogameById);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const videogameById = async () => {
            dispatch(cleanDetail());
            setTimeout(async () => {
                await dispatch(getVideogamesById(id)); // Espera a que se complete la acción
                setLoading(false); // Establece loading a false después de cargar los datos
            }, ); // Cambia este valor a la cantidad de tiempo que deseas simular la carga (en milisegundos)
        };
        videogameById();
    }, [dispatch, id]);
    

    const { name, description, released, background_image, rating, genres, platforms } = videogame;

    return (
        <div>
            {loading ? (
                <h1>CARGANDO..</h1>
            ) : (
                <div>
                    <h2> {id} </h2>
                    <h1>{name} </h1>
                    <br />
                    <img src={videogame.background_image} alt="" className={a} />
                    <br />
                    <br />
                    <hr />
                    <h3>Plataformas: {platforms} </h3><br />
                    <h2>Descripción: {description} </h2>
                    <hr />
                    <h3> Lanzamiento: {released} </h3><br />
                    <h3>Rating: {rating} </h3><br />
                    <h3>Generos: {genres} </h3><br />
                </div>
            )}
        </div>
    );
}
*/

import { Suspense, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideogamesById, cleanDetail } from "../../redux/actions"
import ImageComponent from "../ImageComponent/ImageComponent"
import Styles from "../Card/Card.module.css"
import ClipLoader from "react-spinners/ClipLoader";

export default function Card() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const videogame = useSelector((state) => state.videogameById);

    useEffect(() => {
        const videogameById = async () => {
            dispatch(cleanDetail());
            setTimeout(async () => {
                await dispatch(getVideogamesById(id)); // Espera a que se complete la acción
                setLoading(false); // Establece loading a false después de cargar los datos
            }, ); // Cambia este valor a la cantidad de tiempo que deseas simular la carga (en milisegundos)
        };
        videogameById();
    }, [dispatch, id]);


const { a } = Styles;
const { name, description, released, background_image, rating, genres, platforms } = videogame;
const imageFail="https://pbs.twimg.com/media/DcwoS-VWkAIB60j.jpg"
console.log(background_image)

return (
    <div>
        {loading ? (
            <h1>CARGANDO..</h1>
        ) : (
            <div>
                <h2> {id} </h2>
                <h1>{name} </h1>
                <br />
                <img src={background_image?background_image:imageFail} alt="" className={a} />
                <br />
                <br />
                <hr />
                <h3>Plataformas: {platforms} </h3><br />
                
                <hr />
                <h3> Lanzamiento: {released} </h3><br />
                <h3>Rating: {rating} </h3><br />
                <h3>Generos: {genres} </h3><br />
            </div>
        )}
    </div>
);
}