import { useState } from "react"

const App = () =>  {

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

    return (
        <div className="mainWrapper">
            
            <h2>Notes App React</h2>
            
            <div className="notesContainer">
                
                <div className="notes"> 
                    {notes.map(note=>(

                        <div className="singleNote" key={note.id}>
                            <h4>{note.title}</h4>
                            <p>{note.detail}</p>
                            <div>
                                <button className="btn-info" onClick={()=>handleEditMode(note)}>Edit</button>
                                <button className="btn-danger" onClick={()=>handleDeleteNotes(note.id)}>Delete</button>
                            </div>
                        </div>

                    ))}
                </div>

                <div className="addUpdateNote">
                    <h3>{editMode ? "Update" : "Add a New "} Note</h3>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            className="input"
                            placeholder="Note Title"
                            name="title"
                            value={formNoteField.title}
                            onChange={handleFormData}
                        />
                        <textarea
                            className="input"
                            rows="5"
                            placeholder="Note Details"
                            name="detail"
                            value={formNoteField.detail}
                            onChange={handleFormData}
                        ></textarea>
                        <button className="btn-primary" type="submit">{editMode ? "Update" : "Add"} Note</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default App
