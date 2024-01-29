import axios from "axios";
import styles from "./ContactList.module.css";
import { toast } from "react-toastify";
import { FaUserEdit } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";

function ContactList(props) {

    const { contactList, setContactList, 
        setShowForm, setShowFullDetails, setEdit, setData } = props;

    const handleDelContact = (e, id) => {
        e.stopPropagation();
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                // You may want to update the contactList state to reflect the changes
                setContactList(prevList => prevList.filter(contact => contact.id !== id));
                toast.success("Contact Deleted Successfully");
            })
            .catch((error) => {
                console.error("Error deleting contact:", error);
                toast.error("Error while deleting contact");
            });
    };    

    const handleEditContact =(e, id) => {
        e.stopPropagation();
        setData(id);
        setShowForm(true);
        setEdit(true);
    }

    const handleOpenDetails = (e, contactId) => {
        setData(contactId);
        setShowFullDetails(true);
    };
    

    return (
        <>
            <table>
                <thead>
                    <tr className={styles.contactsHead}>
                        <td colSpan={5}> Contacts </td>
                    </tr>
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
                                        <FaUserEdit className={styles.editBtn} onClick={(e)=> handleEditContact(e, index)}  />
                                        <MdDelete className={styles.delBtn} onClick={(e)=> handleDelContact(e, list.id)} />
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