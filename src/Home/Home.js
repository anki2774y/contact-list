import ContactDetails from "../ContactDetails/ContactDetails";
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";
import styles from "./Home.module.css";
import { IoArrowRedoCircleOutline  } from "react-icons/io5";



function Home(props) {
    
    const { contactList, setContactList,
        showForm, setShowForm, 
        showAdrsFrm, setShowAdrsFrm, 
        showCmpnyFrm, setShowCmpnyFrm, 
        inputValues, setInputValues, 
        showFullDetails, setShowFullDetails,
        edit, setEdit, setData, editId, setEditId } = props;


    return (
        <>
            <div className={styles.homeCnt}>
                <div className={styles.goForm} onClick={()=>setShowForm(!showForm)}>
                    <IoArrowRedoCircleOutline  /> 
                    <span> 
                        Create new Contact details 
                    </span> 
                </div>
                <ContactList 
                    contactList={contactList} setContactList={setContactList}
                    showForm={showForm} setShowForm={setShowForm} 
                    showAdrsFrm={showAdrsFrm} setShowAdrsFrm={setShowAdrsFrm} 
                    showCmpnyFrm={showCmpnyFrm} setShowCmpnyFrm={setShowCmpnyFrm}
                    inputValues={inputValues} setInputValues={setInputValues} 
                    showFullDetails={showFullDetails} setShowFullDetails={setShowFullDetails}
                    edit={edit} setEdit={setEdit} setData={setData} editId={editId} setEditId={setEditId}
                />  

                {
                    showForm &&
                    (
                        <div className={styles.carouselOverlay}>
                            <Form 
                                contactList={contactList} setContactList={setContactList}
                                showForm={showForm} setShowForm={setShowForm} 
                                showAdrsFrm={showAdrsFrm} setShowAdrsFrm={setShowAdrsFrm} 
                                showCmpnyFrm={showCmpnyFrm} setShowCmpnyFrm={setShowCmpnyFrm}
                                inputValues={inputValues} setInputValues={setInputValues} 
                                edit={edit} setEdit={setEdit} setData={setData} editId={editId} setEditId={setEditId}
                            />
                        </div>
                    )
                }

{
                    showFullDetails &&
                    (
                        <div className={styles.carouselOverlay}>
                            <ContactDetails inputValues={inputValues} setInputValues={setInputValues} setShowFullDetails={setShowFullDetails} setData={setData} setEdit={setEdit} setShowForm={setShowForm} />
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Home;