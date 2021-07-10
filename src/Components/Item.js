import React, {useState} from "react";
import '../Item.css'

export default function Item(props) {

    const [getStars, setStars] = useState(Array(parseInt(props.stars)).fill(1));

    const onChangeRating = (e) => {
      setStars(Array(parseInt(e.target.value)).fill(1));
    }

  return (
    <div className="item">
      <div className="image"><img src={'img/'+props.image}/></div>
      <div className="title">{props.title}</div>
      <div className="raiting">
          <p>
            {
                getStars.map(x => <img src='img/star.png' width='32' />)
            }
          </p>
          Clasificación:
          <select value={props.raiting} onChange={onChangeRating}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
      </div>

      <div className="actions">
        <button onClick={() => props.onremove(props.id)}>Eliminar</button>
      </div>
    </div>
  );
}
