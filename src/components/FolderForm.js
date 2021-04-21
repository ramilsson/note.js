import React, { useState } from 'react';
import Dropdown from './Dropdown';

const DEFAULT_FORM = {
  id: null,
  title: '',
  parent: 0,
};

export default function FolderForm({ formData, onSubmit, folders }) {
  const [form, setForm] = useState(formData || DEFAULT_FORM);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <Dropdown className='button is-small' text='Create Folder'>
      <div className='dropdown-item'>
        <form id='folderForm' onSubmit={submitForm}>
          <div className='field'>
            <label className='label is-small'>Title:</label>
            <div className='control'>
              <input
                value={form.title}
                onChange={handleChange}
                name='title'
                className='input is-small'
                type='text'
                placeholder='New folder'
              />
            </div>
          </div>

          <div className='field'>
            <label className='label is-small'>Parent folder:</label>
            <div className='control'>
              <div className='select is-small'>
                <select value={form.parent} onChange={handleChange} name='parent'>
                  <option disabled>Parent folder:</option>
                  {folders.map((folder) => (
                    <option key={folder.id} value={folder.id}>
                      {folder.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
      <hr className='dropdown-divider' />
      <div className='dropdown-item'>
        <p className='has-text-right'>
          <button form='folderForm' className='button is-small is-link'>
            Save
          </button>
        </p>
      </div>
    </Dropdown>
  );
}
