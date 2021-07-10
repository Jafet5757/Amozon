import React, { useState } from 'react'
import Search from './Search'
import './../Menu.css'
import PanelAdd from './PanelAdd'

export default function Menu(props) {

    const [statePanel, setPanel] = useState(false);
    const add = ()=>{
        setPanel(true)
    }

    const onCancel = (e) =>{
        setPanel(false)
    }

    return (
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    Logo
                </div>

                <div className="search">
                    <Search onsearch={props.onsearch}/>
                </div>

                <div className="actions">
                    <button onClick={add} className="button btn-blue">Añadir nuevo libro</button>
                </div>
            </div>

            {
                statePanel ? <PanelAdd oncancel={onCancel} onadd={props.onadd} /> : ''
            }
        </div>
    )
}
