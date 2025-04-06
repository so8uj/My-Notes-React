import { useContext } from "react";
import { NoteContext } from "../contexts/Notes";

const AllNotes = () => {
    const {
        notes,
        handleEditMode,
        handleDeleteNotes
    } = useContext(NoteContext)
    return (
        <div className="notes">
            {notes.map(note => (

                <div className="singleNote" key={note.id}>
                    <h4>{note.title}</h4>
                    <p>{note.detail}</p>
                    <div>
                        <button className="btn-info" onClick={() => handleEditMode(note)}>Edit</button>
                        <button className="btn-danger" onClick={() => handleDeleteNotes(note.id)}>Delete</button>
                    </div>
                </div>

            ))}
        </div>
    )

}

export default AllNotes;