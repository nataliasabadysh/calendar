// Core 
import React, { useState } from 'react';
import { uuid } from 'uuidv4';
// Components
import { NoteEditor } from './NoteEditor';
import { NoteItem } from './NoteItem';


export const Notes = () => {

    const [notes, setNotes] = useState([]);

    const [complited, setComplited] = useState([]);

    // const updateComplited = ({ target:{ checked }}, idNote )=> {
    //     // const update =  notes.map( ({ id, complited }) => {
    //     //     if(id === idNote){  (prev) => console.log("+",prev )  [{...prev, complited: !complited }])  };
    //     // }) 
    // }
    const updateCompleted = taskId => {
        this.setState(prevState => ({
            notes: prevState.notes.map(note => 
                note.id === taskId ? { 
                    ...note, 
                    completed: !note.completed 
                } : note,
          ),
        }));
      };


    const addNote = (text) => {
       const note = {
            id: uuid(),
            text,
            complited: false,
        };
        setNotes((prev) => [...prev, note])
    }

    const removeNote = ( idNote ) => {
        const remove =  notes.filter( ({ id }) => id !== idNote)
        setNotes([...remove])
    }
    return( 
        <>

        
            { /* NoteList */ notes.length > 0 && 
                <ul> { notes.map( ({ id, text, complited })=>  
                        <NoteItem 
                            key={id} 
                            onRemove={()=> removeNote(id)} 
                            handleComplited={() => updateCompleted(id)}
                            text={text} 
                            complited={complited} 
                        /> )} 
                </ul>
            }
            <NoteEditor onAddNote={addNote} />
    </>
 )};
  