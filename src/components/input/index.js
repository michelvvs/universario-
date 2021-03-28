import React from 'react';

export default function Input () {

    return(
        <div>
            <input 
            name="data"
            type="text"
            className="userDate" 
            placeholder="digite sua data de nascimento" />
            
            <button type="submit" className="userDateSubmit"> Enviar</button>

        </div>
    )
}