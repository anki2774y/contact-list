import { Bounce, ToastContainer } from "react-toastify";
import ContactDetails from "../ContactDetails/ContactDetails";
import ContactList from "../ContactList/ContactList";
import Form from "../Form/Form";
import styles from "./Home.module.css";

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

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme="light"
                    transition={Bounce}
                ></ToastContainer>
            </div>
        </>
    )
}

export default Home;