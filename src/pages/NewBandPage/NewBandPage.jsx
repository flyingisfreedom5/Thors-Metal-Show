import { useState, useRef, useEffect } from 'react';
import * as photosAPI from '../../utilities/photos-api';
import BandList from '../../components/BandList/BandList';

export default function NewBandPage({ addBand }) {
  const [newBand, setNewBand] =useState({
    title: "",
    members: "",
    albumsList: ""
  });

  function handleAddBand(evt) {
    evt.preventDefault();
    addBand(newBand);
    setNewBand({
      title: "",
      members: "",
      albumsList: ""
    });
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
    <form onSubmit={handleAddBand}>
        <input
          value={newBand.title}
          onChange={(e) => setNewBand(e.target.value)}
          placeholder="New Band"
          required
        />
         <input
          value={newBand.members}
          onChange={(e) => setNewBand(e.target.value)}
          placeholder="Members"
          required
        />
        <input
          value={newBand.albumsList}
          onChange={(e) => setNewBand(e.target.value)}
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