import React from "react";

const StyleQ = ({
    style,
    onStyleChange, 
    onStepChange,
}) => {
return (
<form>
    <label>
        What style are you up for? 
        <select value={style} onChange={event => onStyleChange(event.target.value)}>
            <option value="scary">Scary</option>
            <option value="cute">Cute</option>
            <option value="sexy">Sexy</option>
            <option value="crazy">Crazy</option>
            </select>
            </label>
            <button onClick={onStepChange}>Next question</button>
</form> 
);
};


export default StyleQ;