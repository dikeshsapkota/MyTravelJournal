import { useState } from "react";
import Header from "./Components/header";
import Entry from "./Components/Entry";
import data from "./data";

function App() {
  const [entries, setEntries] = useState(data);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    googleMapsLink: "",
    startDate: "",
    endDate: "",
    description: "",
    imageUrl: "",
  });

  function handleChange(event) {
    const { name, value, files } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setEntries((prevEntries) => [formData, ...prevEntries]);
    setShowForm(false);

    setFormData({
      title: "",
      location: "",
      googleMapsLink: "",
      startDate: "",
      endDate: "",
      description: "",
      imageUrl: "",
    });
  }

  return (
    <>
      <Header setShowForm={setShowForm} />

      

      {showForm && (
        <form className="travel-form" onSubmit={handleSubmit}>
          <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
          <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
          <input name="googleMapsLink" placeholder="Google Maps Link" value={formData.googleMapsLink} onChange={handleChange} />
          <input name="startDate" placeholder="Start Date" value={formData.startDate} onChange={handleChange} />
          <input name="endDate" placeholder="End Date" value={formData.endDate} onChange={handleChange} />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <input type="file" name="imageUrl" accept="image/*" onChange={handleChange} required />

          <div className="btn-group">
            <button type="submit">Add Destination</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
          </div>
        </form>
      )}

      <main className="container">
        {entries.map((entry) => (
          <Entry key={entry.title} {...entry} />
        ))}
      </main>
    </>
  );
}

export default App;