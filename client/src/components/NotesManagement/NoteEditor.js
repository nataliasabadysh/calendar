import React, { useState } from "react";



export const NoteEditor = () => <>Note Editor</>

// const NORMAL = '1';

// const PrioritySelector = ({ options, value, onChange }) => (
//     <select name="priority" value={value} onChange={onChange}>
//       {options.map(option => <option key={option} value={option}>{option} </option>)}
//     </select>
//   );
  

// export const NoteEditor = ({ onAddNote }) => {
//     const [text, setText] = useState('');
//     const [priority, setPriority] = useState(NORMAL);

//     const handleChange = e => {
//         setText(e.target.value)
//     }

//     const onSubmitForm = e => {
//         e.preventDefault();

//         const note = {
//             text,
//             priority: NORMAL,
//         }

//         onAddNote(note);
//         setText('')
//     }

//   return(  
//       <>
//       <form onSubmit={onSubmitForm}>    
//             <label> Name 
//                 <input 
//                     type="text" 
//                     value={text} 
//                     name="name"
//                     onChange={handleChange}
//                     />
//             </label>
//             <label className={styles.label}>
//                 Select task priority:
//                     <PrioritySelector
//                         options={options}
//                         value={priority}
//                         onChange={this.handleChange}
//                     />
//                 </label>

//         </form>

//         <button className="btn" type="submit">Add note</button>
//       </>
//   )
// }

