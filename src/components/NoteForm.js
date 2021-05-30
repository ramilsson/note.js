import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const defaultFormData = {
  id: '',
  title: '',
  body: '',
  folderId: 0,
  createdAt: '',
};

export default function NoteForm({ formData, onSubmit, folders }) {
  const [form, setForm] = useState(formData || defaultFormData);
  const history = useHistory();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function submitForm(e) {
    e.preventDefault();
    console.log(form);
    onSubmit(form);
  }

  return (
    <form onSubmit={submitForm}>
      <div className='field'>
        <div className='control'>
          <input
            name='title'
            onChange={handleChange}
            value={form.title}
            className='input is-large'
            type='text'
            placeholder='Title'
          />
        </div>
      </div>
      <div className='field'>
        <div className='control'>
          <textarea
            name='body'
            onChange={handleChange}
            value={form.body}
            className='textarea'
            placeholder='...'
            rows='20'
          ></textarea>
        </div>
      </div>
      <hr />
      <div className='level'>
        <div className='level-left'>
          <button type='button' onClick={() => history.goBack()} className='button is-white'>
            <span className='icon'>
              <FontAwesomeIcon icon={faChevronLeft}/>
            </span>
            <span>Back</span>
          </button>
        </div>
        <div className='level-right'>
          <div className='field is-grouped is-grouped-right'>
            <div className='control has-icons-left'>
              <div className='select is-medium'>
                <select name='folderId' value={form.folderId} onChange={handleChange}>
                  <option value='0' disabled>
                    Select folder
                  </option>
                  {folders.map((folder) => (
                    <option key={folder.id} value={folder.id}>
                      {folder.title}
                    </option>
                  ))}
                </select>
                <span className='icon is-small is-left'>
                  <FontAwesomeIcon icon={faFolder} />
                </span>
              </div>
            </div>
            <div className='control'>
              <button className='button is-medium is-link'>Save</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
