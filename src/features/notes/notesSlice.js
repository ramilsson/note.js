const initialState = [];

export function notesReducer(state = initialState, action) {
  switch (action.type) {
    case 'notes/notesLoaded': {
      return [...action.payload.notes];
    }
    case 'notes/noteAdded': {
      return [...state, action.payload.note];
    }
    default: {
      return state;
    }
  }
}

// Thunk function
export async function fetchNotes(dispatch, getState) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/notes`);
    if (!response.ok) throw new Error();
    const notes = await response.json();
    dispatch({
      type: 'notes/notesLoaded',
      payload: { notes: notes },
    });
  } catch {
    console.error('Could not fetch notes from the server');
  }
}

export function selectNoteById(state, noteId) {
  return state.notes.find((note) => note.id === noteId);
}
