import React from "react";
import "../styles.css";

export function InfosUsuario() {
    const usuario = "Carlos Nogueira"

    return(
        <div className="autorContainer">
            <img className="autor" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt=""></img>
            <p>{usuario}</p>
        </div>
    )
}