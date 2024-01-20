import styles from "./ContactDetails.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactDetails({ inputValues, setInputValues, setShowFullDetails, setEdit, setShowForm }) {

    const hasValue = inputValues.firstName.trim() !== "";

    function handleCloseDetails() {
        setShowFullDetails(false);
        setInputValues("");
    }

    function handleEditDetails(e) {
        e.preventDefault();
        setShowFullDetails(false);
        setEdit(true);
        setShowForm(true);
    }

    return (
        <div className={styles.container}>
            <form>
                <h2> Contact Details of : {inputValues.firstName + " " + inputValues.lastName} </h2>
                <div className={styles.row100}>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="text" value={inputValues.firstName} name="firstName" />
                                <span className={styles.text}> First Name </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="text" value={inputValues.lastName} name="lastName" />
                                <span className={styles.text}> Last Name </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="text" value={inputValues.userName} name="userName" required="required" />
                                <span className={styles.text}> Username </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="email" value={inputValues.email} name="email" required="required" />
                                <span className={styles.text}> Email </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="text" value={inputValues.phone} name="phone" required="required"  />
                                <span className={styles.text}> Phone </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.form}>
                        <p> Address Details </p>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="text" value={inputValues.street} name="street" />
                                <span className={styles.text}> Street </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="text" value={inputValues.suite} name="suite" />
                                <span className={styles.text}> Suite </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="text" value={inputValues.city} name="city" />
                                <span className={styles.text}> City </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="text" value={inputValues.zipcode} name="zipcode" />
                                <span className={styles.text}> Zipcode </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="text" value={inputValues.latitude} name="latitude" />
                                <span className={styles.text}> Latitude </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="text" value={inputValues.longitude} name="longitude" />
                                <span className={styles.text}> Longitude </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.form} >
                        <p> Add Company Details </p>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="text" value={inputValues.compName} name="compName"  />
                                <span className={styles.text}> Name </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input type="text" value={inputValues.websiteUrl} name="websiteUrl" />
                                <span className={styles.text}> Website URL   </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row100} id={styles.submitCnt}>
                    <div className={styles.edit}>
                        <input type="submit" value="Edit" onClick={handleEditDetails} />
                    </div>
                    <div className={styles.col}>
                        <input type="submit" value="Close" onClick={handleCloseDetails} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactDetails;