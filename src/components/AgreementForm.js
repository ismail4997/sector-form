import React, { useState } from 'react';

const AgreementForm = () => {
  const [name, setName] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formComplete, setFormComplete] = useState(true);

  const handleSectorChange = (e) => {
    setSelectedSector(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const handleSubmit = () => {
    if (!name || !selectedSector || !agreeTerms) {
      setFormComplete(false);
      return;
    }

    const formData = {
      name: name,
      sector: selectedSector,
      agreed: agreeTerms,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    setName('');
    setSelectedSector('');
    setAgreeTerms(false);
    setFormComplete(true);

    alert('Form data saved to localStorage');
  };

  return (
    <div className='layout'>
      <div className='create'>
        <h2> Agreement Form </h2>
        <p>Please enter your name and pick the Sectors you are currently involved in.</p>

        <label>Full Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="user-name"
        />

        <label>Sectors:</label>
        <div className='custom-select'>
          <select
            value={selectedSector}
            onChange={handleSectorChange}
            required
          >
          <option value="None">None</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Construction Materials">Construction Materials</option>
          <option value="Food and Beverages">Food and Beverages</option>
          <option value="Bakery and Confectioners">Bakery and Confectioners</option>
          <option value="Beverages">Beverages</option>
          <option value="Fish and Fish Products">Fish and Fish Products</option>
          <option value="Milk and Diary Products">Milk and Diary Products</option>
          <option value="Meat and meat Products">Meat and meat Products</option>
          <option value="Sweets and Snack Products">Sweets and Snack Products</option>
          <option value="Furniture">Furniture</option>
          <option value="Bathroom/Sauna">Bathroom/Sauna</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Office">Office</option>
          <option value="Living Room">Living Room</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Machinery components">Machinery components</option>
          <option value="Project Furniture">Project Furniture</option>
          <option value="Machinery">Machinery</option>
          <option value="Machinery equipment">Machinery equipment</option>
          
          <option value="Maritime">Maritime</option>
          <option value="Aluminium and steel workboats">Aluminium and steel workboats</option>
          <option value="Boat/Yatch building">Boat/Yatch building</option>
          <option value="Ship repair and conversion">Ship repair and conversion</option>
          <option value="Metal Structures">Metal Structures</option>
          <option value="Others">Others</option>
          </select>
        </div>

        <div className='agree-box'>
          <input
            type='checkbox'
            value={agreeTerms}
            required
            onChange={handleCheckboxChange}
            className="input-2"
          />
          <span>Agree with Terms</span>
        </div>

        {!formComplete && (
          <p style={{ color: 'red' }}>Please fill in all fields before submitting.</p>
        )}

        <button onClick={handleSubmit}> Submit</button>
      </div>
    </div>
  );
};

export default AgreementForm;
