const initialState = [];

export function foldersReducer(state = initialState, action) {
  switch (action.type) {
    case 'folders/foldersLoaded': {
      return [...action.payload.folders];
    }
    case 'folders/folderAdded': {
      return [...state, action.payload.folder];
    }
    default: {
      return state;
    }
  }
}

// Thunk function
export async function fetchFolders(dispatch, getState) {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/folders`);
    if (!response.ok) throw new Error();
    const folders = await response.json();
    dispatch({
      type: 'folders/foldersLoaded',
      payload: { folders: folders },
    });
  } catch {
    console.error('Could not fetch folders from the server');
  }
}

export function selectFolderById(state, folderId) {
  return state.folders.find((folder) => folder.id === folderId);
}
