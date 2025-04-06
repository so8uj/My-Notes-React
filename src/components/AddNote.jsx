import { useContext } from "react";
import { NoteContext } from "../contexts/Notes";

const AddNote = () => {
    const {
        formNoteField,
        handleFormData,
        handleFormSubmit,
        editMode
    } = useContext(NoteContext)
    return (
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
    )

}

export default AddNote;