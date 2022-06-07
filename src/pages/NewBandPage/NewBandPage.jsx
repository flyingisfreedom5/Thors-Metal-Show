import { useState, useRef, useEffect } from 'react';
import * as photosAPI from '../../utilities/photos-api';
import BandList from '../../components/BandList/BandList';

export default function NewBandPage({ handleAddBand }) {
  const [newBand, setNewBand] =useState({
    title: "",
    members: "",
    albumsList: ""
  });
 console.log(newBand);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddBand(newBand);
    this.setNewBand({isSubmitted: true});
  }

  function handleChange(evt) {
    setNewBand({... newBand, [evt.target.name] : evt.target.value})
  }

  const [title, setTitle] = useState('');
  const [photos, setPhotos] = useState([]);
  const fileInputRef = useRef();

  useEffect(function() {
    photosAPI.getAll().then(photos => setPhotos(photos));
  }, []);
  async function handleUpload() {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('photo', fileInputRef.current.files[0]);
    const newPhoto = await photosAPI.upload(formData);
    setPhotos([newPhoto, ...photos]);
    // Clear the description and file inputs
    setTitle('');
    fileInputRef.current.value = '';
  }
  return (
    <>
    <h2>New Band</h2>
    <form onSubmit={handleSubmit}>
        <textarea onChange= {handleChange}
          value={newBand.title}
          name = 'title'
          placeholder="New Band"
          required
        />
         <textarea onChange= {handleChange}
          value={newBand.members}
          name = 'members'
          placeholder="Members"
          required
        />
        <textarea onChange= {handleChange}
          value={newBand.albumsList}
          name = 'albumsList'
          placeholder="Albums List"
          required
        />
        <button type="submit">ADD BAND</button>
      </form>
    <main className="App flex-ctr-ctr">
      <section className="flex-ctr-ctr">
        <input type="file" ref={fileInputRef} />
        <input value={title} onChange={(evt) => setTitle(evt.target.value)} 
        placeholder="Photo Title" />
        <button onClick={handleUpload}>Upload Photo</button>
      </section>
      <section>
        {photos.map(p => <BandList photo={p} key={p._id} />)}
      </section>
    </main>
    </>
  );
}