import { notesReducer } from 'features/notes/notesSlice';
import { foldersReducer } from 'features/folders/foldersSlice';

export function rootReducer(state = {}, action) {
  return {
    notes: notesReducer(state.notes, action),
    folders: foldersReducer(state.folders, action),
  };
}
