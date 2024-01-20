import styles from "./Form.module.css";
import { IoChevronUpCircleSharp, IoChevronDownCircleSharp } from "react-icons/io5";
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import axios from "axios";

function Form(props) {
    debugger;
    const { contactList, setContactList, 
        showForm, setShowForm, 
        showAdrsFrm, setShowAdrsFrm, 
        showCmpnyFrm, setShowCmpnyFrm, 
        inputValues, setInputValues,
        edit, setEdit, setData, editId } = props;

    function setNewData() {
        return {
            id: contactList.length,
            name: inputValues.firstName + " " + inputValues.lastName,
            username: inputValues.userName,
            email: inputValues.email,
            address: {
                street: inputValues.street,
                suite: inputValues.suite,
                city: inputValues.city,
                zipcode: inputValues.zipcode,
                geo: {
                    lat: inputValues.latitude,
                    lng: inputValues.longitude
                }
            },
            phone: inputValues.phone,
            website: inputValues.websiteUrl,
            company: {
                name: inputValues.compName
            }
        }
    }

    let isValue = false;
    if(edit) {
        isValue = true;
    }
    
    // Submiting the form
    function handleFormSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const newData = setNewData();

        console.log("Edit :: ", edit);

        if (edit) {
            // If in edit mode, call handleEditForm
            handleEditForm(newData);
        } else {
            axios.post('https://jsonplaceholder.typicode.com/users', newData)
            .then(response => {
                console.log('Data added successfully:', response.data);
                setContactList(prevList => [...prevList, response.data]);
                // Handle the response as needed
            })
            .catch(error => {
                console.error('Error adding data:', error);
                // Handle the error
            });            
        }

        handleClearForm();
        setShowForm(false);
    }

    // Editing the Contact Details
    function handleEditForm(newData) {    
        axios.put(`https://jsonplaceholder.typicode.com/users/${editId+1}`, newData)
        .then(response => {    
            const updatedList = contactList;
            updatedList[editId] = response.data;  
            // Update the contactList with the modified array
            setContactList(updatedList);
            // Handle the response as needed
            setEdit(false);
        })
        .catch(error => {
            console.error('Error updating data:', error);
            // Handle the error
        });
    }
    

    function handleClearForm() {
        setInputValues("");
    }

    // handling when some one types in the form
    function handleInputChange(e) {
        const value = e.target.value;

        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [e.target.name]: value,
        }));
        // Check if there is any value in the input field
        const hasValue = e.target.value.trim() !== "";
        // Add a class to the parent container based on whether there is a value or not
        e.target.parentNode.classList.toggle(styles.hasValue, hasValue);
    }

    function setShow() {
        setShowForm(false);
        setEdit(false);
        setInputValues("");
    }

    return (
        <>
        <div className={styles.container}>
            <span className={styles.back} onClick={setShow}> <IoArrowUndoCircleOutline /> <span> Back to Home </span> </span>
            <form onSubmit={handleFormSubmit} >
                <h2> {edit ? "Edit Contact Details" : "Contact Details Form"} </h2>
                <div className={styles.row100}>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={edit ? styles.editBox : styles.inputBox}>
                                <input type="text" value={inputValues.firstName} name="firstName"
                                    onChange={(e) => handleInputChange(e)}
                                />
                                <span className={styles.text}> First Name </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={edit ? styles.editBox : styles.inputBox}>
                                <input type="text" value={inputValues.lastName} name="lastName" required="required" onChange={(e) => handleInputChange(e)} />
                                <span className={styles.text}> Last Name </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={edit ? styles.editBox : styles.inputBox}>
                                <input type="text" value={inputValues.userName} name="userName" required="required" onChange={(e) => handleInputChange(e)} />
                                <span className={styles.text}> Username </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={edit ? styles.editBox : styles.inputBox}>
                                <input type="email" value={inputValues.email} name="email" required="required" onChange={(e) => handleInputChange(e)} />
                                <span className={styles.text}> Email </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={edit ? styles.editBox : styles.inputBox}>
                                <input type="text" value={inputValues.phone} name="phone" required="required" onChange={(e) => handleInputChange(e)} />
                                <span className={styles.text}> Phone </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.form} onClick={()=>setShowAdrsFrm(!showAdrsFrm)}>
                        <p> Add Address Details 
                        <span className={styles.arrowIcon}>
                            {showAdrsFrm ? <IoChevronDownCircleSharp /> : <IoChevronUpCircleSharp /> } 
                        </span>
                        </p>
                    </div>
                    {
                        showAdrsFrm &&
                        <>
                                <div className={styles.nameCnt}>
                                <div className={styles.col}>
                                    <div className={edit ? styles.editBox : styles.inputBox}>
                                        <input type="text" value={inputValues.street} name="street" onChange={(e) => handleInputChange(e)} />
                                        <span className={styles.text}> Street </span>
                                        <span className={styles.line}></span>
                                    </div>
                                </div>
                                <div className={styles.col}>
                                    <div className={edit ? styles.editBox : styles.inputBox}>
                                        <input type="text" value={inputValues.suite} name="suite" onChange={(e) => handleInputChange(e)} />
                                        <span className={styles.text}> Suite </span>
                                        <span className={styles.line}></span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.nameCnt}>
                                <div className={styles.col}>
                                    <div className={edit ? styles.editBox : styles.inputBox}>
                                        <input type="text" value={inputValues.city} name="city" onChange={(e) => handleInputChange(e)} />
                                        <span className={styles.text}> City </span>
                                        <span className={styles.line}></span>
                                    </div>
                                </div>
                                <div className={styles.col}>
                                    <div className={edit ? styles.editBox : styles.inputBox}>
                                        <input type="text" value={inputValues.zipcode} name="zipcode" onChange={(e) => handleInputChange(e)} />
                                        <span className={styles.text}> Zipcode </span>
                                        <span className={styles.line}></span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.nameCnt}>
                                <div className={styles.col}>
                                    <div className={edit ? styles.editBox : styles.inputBox}>
                                        <input type="text" value={inputValues.latitude} name="latitude" onChange={(e) => handleInputChange(e)} />
                                        <span className={styles.text}> Latitude </span>
                                        <span className={styles.line}></span>
                                    </div>
                                </div>
                                <div className={styles.col}>
                                    <div className={edit ? styles.editBox : styles.inputBox}>
                                        <input type="text" value={inputValues.longitude} name="longitude" onChange={(e) => handleInputChange(e)} />
                                        <span className={styles.text}> Longitude </span>
                                        <span className={styles.line}></span>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    <div className={styles.form} onClick={()=>setShowCmpnyFrm(!showCmpnyFrm)}>
                        <p> Add Company Details
                        <span className={styles.arrowIcon}>
                            {showCmpnyFrm ? <IoChevronDownCircleSharp /> : <IoChevronUpCircleSharp /> }
                        </span>
                        </p>
                    </div>
                    {
                        showCmpnyFrm && 
                        <div className={styles.nameCnt}>
                            <div className={styles.col}>
                                <div className={edit ? styles.editBox : styles.inputBox}>
                                    <input type="text" value={inputValues.compName} name="compName" onChange={(e) => handleInputChange(e)} />
                                    <span className={styles.text}> Name </span>
                                    <span className={styles.line}></span>
                                </div>
                            </div>
                            <div className={styles.col}>
                                <div className={edit ? styles.editBox : styles.inputBox}>
                                    <input type="text" value={inputValues.websiteUrl} name="websiteUrl" onChange={(e) => handleInputChange(e)} />
                                    <span className={styles.text}> Website URL   </span>
                                    <span className={styles.line}></span>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className={styles.row100} id={styles.submitCnt}>
                    <div className={styles.col}>
                        <input type="submit" value={"Submit"} />
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default Form;