import React, {useState} from "react";

export default function PanelAdd(props) {

    const [getTitle, setTitle] = useState('');
    const [getImage, setImage]= useState('');
    const [getRating, setRating] = useState(1);

    const onsubmit = (e) => {
        e.preventDefault();
        console.log('onsubmit; ');
        props.onadd({
            title: getTitle, 
            image: getImage,
            rating: getRating
        }); 

        props.oncancel();
    }

    //functions changes
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const onChangeImage = (e) => {
        setImage(e.target.value);
    }

    const onChangeRating = (e) => {
        setRating(parseInt(e.target.value));
    }

  return (
    <div className="new-item-panel-container">
      <div className="new-item-panel">
        <form onSubmit={onsubmit}>
            <p>
                <label>Titulo del libro</label><br/>
                <input type="text" name="title" className="input" onChange={onChangeTitle}/>
            </p>

            <p>
                <label>Nombre de imagen</label><br/>
                <input type="text" name="image" className="input" onChange={onChangeImage} />
            </p>

            <p>
                <label>Clasificación</label><br/>
                <select onChange={onChangeRating}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </p>
            <input type="submit" className="button btn-blue" value="Registrar libro"/>
            <input type="button" className="button btn-normal" onClick={props.oncancel} value="Cancelar"/>
        </form>
      </div>
    </div>
  );
}
