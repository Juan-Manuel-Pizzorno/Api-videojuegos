import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideogamesById, cleanDetail } from "../../redux/actions"
import Styles from "../Card/Card.module.css"
import  ClipLoader  from  "react-spinners/ClipLoader" ;

export default function Card() {
   

    const { id } = useParams();
    const videogame = useSelector((state) => state.videogameById);
    const dispatch = useDispatch();

    //Esto debe ir en otra carpeta aparte
    useEffect(() => {
        dispatch(getVideogamesById(id));
        return () => {
            dispatch(cleanDetail());
        }
    }, [id]);

    const { name, description, released, background_image, rating, genres, platforms } = videogame; // me faltaba esto, desestructurar

    const[loading,setLoading]=useState(false)
   useEffect(() => {
    setLoading(true)
    setTimeout(() => {
        setLoading(false)
    },2500)
     },[])

    return (

        <div>{
            loading?
            
            < ClipLoader 
            color = { "#be1212" } 
            loading = { loading } 
            size = { 1500 } 
            
        />:
            <div className={Styles.fond}>
                <h1>{name} </h1>
                <br />
                <img className={"img-fluid"} src={background_image} alt="" />
                <br />
                <br />
                <hr />
                <h3>Plataformas: {platforms} </h3><br />
                <h2>Descripción: {description} </h2>
                <hr />
                <h3> Lanzamiento: {released} </h3><br />
                <h3>Rating: {rating} </h3><br />
                <h3>Generos: {genres} </h3><br />
            </div> }
           

        </div>

    )
}
