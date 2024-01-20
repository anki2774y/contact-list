import axios from "axios";
import styles from "./ContactList.module.css";

// to do :: add border-box style and in circle form as i am using it in edit and delete button
function ContactList(props) {

    const { contactList, setContactList, 
        setShowForm, setInputValues, 
        setShowFullDetails, edit, setEdit, setData,  } = props;

    const handleDelContact = (e, id) => {
        e.stopPropagation();
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                console.log('Contact deleted successfully:', res.data);
                // You may want to update the contactList state to reflect the changes
                setContactList(prevList => prevList.filter(contact => contact.id !== id));
            })
            .catch((error) => {
                console.error("Error deleting contact:", error);
            });
    };    

    

    const handleEditContact =(e, id) => {
        e.stopPropagation();
        setData(id);
        setShowForm(true);
        setEdit(true);
    }

    const handleOpenDetails = (e, contactId) => {
        // console.log("ID :: ", contactList[contactId]);
        setData(contactId);
        setShowFullDetails(true);
    };
    

    return (
        <>
            <p> ContactList </p>
            <table>
                <thead>
                    <tr>
                        <td className={styles.cellNoIng}> ID </td>
                        <td className={styles.cell}> Name </td>
                        <td className={styles.cell}> Email </td>
                        <td className={styles.cell}> Number </td>
                        <td className={styles.action}> Action </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactList && contactList.map((list,index) => {
                            return (
                                <tr className={styles.row}>
                                    <td  className={styles.cellNoIng}> {index+1} </td>
                                    <td className={styles.cellList}> {list.name} </td>
                                    <td className={styles.cellList}> {list.email} </td>
                                    <td className={styles.cellList}> {list.phone} </td>
                                    <td className={styles.action}> 
                                        <img 
                                            className={styles.editBtn} 
                                            src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png" 
                                            onClick={(e)=> handleEditContact(e, index)}
                                        />
                                        <img 
                                            className={styles.delBtn} 
                                            src="https://cdn-icons-png.flaticon.com/128/6711/6711573.png"                                             
                                            onClick={(e)=> handleDelContact(e, list.id)}
                                        />
                                        <button className={styles.fullDetails} onClick={(e)=> handleOpenDetails(e, index)} > Check Full Details </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default ContactList;