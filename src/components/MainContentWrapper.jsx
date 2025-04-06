import AddNote from './AddNote';
import AllNotes from './AllNotes';

const MainContentWrapper = () => {

    return(
        <div className="mainWrapper">
            <h2>Notes App React</h2>
            <div className="notesContainer">
                <AllNotes />
                <AddNote />
            </div>
        </div>
    )

}

export default MainContentWrapper;