
export default function Card(props) { //recibo por props lo que quiero pasarle al componente

    return (
        <div>
            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                     <h2>{props.image}</h2>
                     <h2>{props.name}</h2>
                   
                </div>
            </div>


        </div>
    )
}
/*

import { Link } from "react-router-dom";

export default function Card(props) {

    const { id, image, name, genres, rating } = props;


    return (
        <div className={div}>
            <Link to={`/detail/${id}`}>
                <img className={img} src={image} alt="" />
                <h2 className={nameid}>{name}</h2>
                <h2 className={h2}>{genres}</h2>
                <h2 className={h2Rat}>{rating}</h2>
            </Link>
        </div>
    );
}*/