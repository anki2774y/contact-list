import './App.css';
import Home from './Home/Home';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [contactList, setContactList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [showAdrsFrm, setShowAdrsFrm] = useState(false);      // show Address form
  const [showCmpnyFrm, setShowCmpnyFrm] = useState(false);    // show Company form
  // input state for form
  const [inputValues, setInputValues] = useState({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      phone: "",
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      latitude: "",
      longitude: "",
      compName: "",
      websiteUrl: "",
    }
  );

  const [showFullDetails, setShowFullDetails] = useState(false);
  const [edit, setEdit] = useState(false);

  const [editId, setEditId] = useState(null);

  useEffect(() => {    
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
          setContactList(res.data);
      })
      .catch((error) => {
          console.error("Error fetching data:", error);
      });
  }, []); 

  const setData = (contactId) => {
    setEditId(contactId);
    const contactName = contactList[contactId].name;

    const fullName = contactName;
    const nameParts = fullName.split(" ");

    let firstName, lastName;

    if (nameParts.length === 1) {
        firstName = nameParts[0];
    } else if (nameParts.length >= 2) {          
        if (['Mrs.', 'Mr.', 'Mr', 'Mrs'].includes(nameParts[0])) {
            firstName = nameParts[0] + ' ' + nameParts[1];
            lastName = nameParts[2];
        } else {
            firstName = nameParts[0];
            lastName = nameParts.slice(1).join(" ");
        }
    }

    setInputValues((prevValues) => ({
        ...prevValues,
        firstName: firstName || "",
        lastName: lastName || "",
        userName: contactList[contactId].username || "",
        email: contactList[contactId].email || "",
        phone: contactList[contactId].phone || "",
        street: contactList[contactId].address.street || "",
        suite: contactList[contactId].address.suite || "",
        city: contactList[contactId].address.city || "",
        zipcode: contactList[contactId].address.zipcode || "",
        latitude: contactList[contactId].address.geo.lat || "",
        longitude: contactList[contactId].address.geo.lng || "",
        compName: contactList[contactId].company.name || "",
        websiteUrl: contactList[contactId].website || "",
    }));
  }

  return (
    <>
      <div className="App">
        <Home 
          contactList={contactList} setContactList={setContactList}
          showForm={showForm} setShowForm={setShowForm} 
          showAdrsFrm={showAdrsFrm} setShowAdrsFrm={setShowAdrsFrm} 
          showCmpnyFrm={showCmpnyFrm} setShowCmpnyFrm={setShowCmpnyFrm}
          inputValues={inputValues} setInputValues={setInputValues} 
          showFullDetails={showFullDetails} setShowFullDetails={setShowFullDetails}
          edit={edit} setEdit={setEdit}
          setData={setData}
          editId={editId} setEditId={setEditId}
        />
      </div>
    </>
  );
}

export default App;
