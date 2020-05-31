import React from "react";

export const NoteItem = ({ onRemove, text, complited, handleComplited }) => <>
<li> 
   <p>{ text }</p>
   <label> { complited ? 'complited' : 'not complited' } </label>

   <input type="checkbox" onChange={handleComplited} checked={complited} />

   <button className="btn" onClick={onRemove}>delete</button>
</li>
</>
