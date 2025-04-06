import { createContext, useState } from "react";

export const NoteContext = createContext();

const NoteProvider = (props) => {
    
    const {children} = props;

    // States
    const [notes,setNotes] = useState([
        {id:1,title:"Dummy Note 1",detail:"Dummy Note Detail 1"}
    ]);

    const [formNoteField,setFormNoteField] = useState({
        title:"",
        detail:"",
    });

    const [editMode,setEditMode] = useState(false);

    // Methods 
    const handleFormSubmit = (e) => { 
        e.preventDefault();

        if(formNoteField.title.trim() === "" || formNoteField.detail.trim() === ""){
            return alert("Please provide both Task Name and Detail!");
        }
        
        editMode ? handleUpdateNoteForm() : handleAddNoteForm();
        
        setFormNoteField({
            title:"",
            detail:"",
        });

    }
    
    const handleAddNoteForm = () => {
        const newNotes = {
            id: Date.now() + "",
            ...formNoteField
        }
        setNotes([newNotes,...notes]);
    }

    const handleUpdateNoteForm = () => {

        const updatedNotes = notes.map(note => 
            note.id === formNoteField.id ? { ...note, ...formNoteField } : note
        );
        setNotes(updatedNotes);
        setEditMode(false);
    }

    const handleFormData = (input) => {
        setFormNoteField({
            ...formNoteField,
            [input.target.name]: input.target.value,
        });

    }

    const handleEditMode = (note) => {
        setEditMode(true);
        const editNote = notes.filter(noteData=>{
            return note.id === noteData.id
        });
        setFormNoteField(...editNote)
    }

    const handleDeleteNotes = (note_id) => {
        if(confirm("Are you sure to Delete the Note!")){
            const updatedNotes = notes.filter(note=>{
               return note.id !== note_id;
            });
            setNotes(updatedNotes);
        };
    }

    const CtxValue = {
        notes,
        setNotes,
        formNoteField,
        setFormNoteField,
        editMode,
        setEditMode,
        handleFormSubmit,
        handleAddNoteForm,
        handleUpdateNoteForm,
        handleFormData,
        handleEditMode,
        handleDeleteNotes
    }

    return(
        <NoteContext.Provider value={CtxValue}>{children}</NoteContext.Provider>
    )

}

export default NoteProvider