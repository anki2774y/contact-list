import styles from "./ContactDetails.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactDetails({ inputValues, setInputValues, setShowFullDetails, setEdit, setShowForm }) {

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
                                <input className={styles.inputDetail} type="text" value={inputValues.firstName} name="firstName" autoComplete="off" />
                                <span className={styles.text}> First Name </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input className={styles.inputDetail} type="text" value={inputValues.lastName} name="lastName" autoComplete="off" />
                                <span className={styles.text}> Last Name </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input className={styles.inputDetail} type="text" value={inputValues.userName} name="userName" required="required" autoComplete="off" />
                                <span className={styles.text}> Username </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input className={styles.inputDetail} type="email" value={inputValues.email} name="email" required="required" autoComplete="off" />
                                <span className={styles.text}> Email </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input className={styles.inputDetail} type="text" value={inputValues.phone} name="phone" required="required" autoComplete="off" />
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
                                <input className={styles.inputDetail} type="text" value={inputValues.street} name="street" autoComplete="off" />
                                <span className={styles.text}> Street </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input className={styles.inputDetail} type="text" value={inputValues.suite} name="suite" autoComplete="off" />
                                <span className={styles.text}> Suite </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input className={styles.inputDetail} type="text" value={inputValues.city} name="city" autoComplete="off" />
                                <span className={styles.text}> City </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input className={styles.inputDetail} type="text" value={inputValues.zipcode} name="zipcode" autoComplete="off" />
                                <span className={styles.text}> Zipcode </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input className={styles.inputDetail} type="text" value={inputValues.latitude} name="latitude" autoComplete="off" />
                                <span className={styles.text}> Latitude </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input className={styles.inputDetail} type="text" value={inputValues.longitude} name="longitude" autoComplete="off" />
                                <span className={styles.text}> Longitude </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.form} >
                        <p> Company Details </p>
                    </div>
                    <div className={styles.nameCnt}>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input className={styles.inputDetail} type="text" value={inputValues.compName} name="compName" autoComplete="off" />
                                <span className={styles.text}> Name </span>
                                <span className={styles.line}></span>
                            </div>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.inputBox}>
                                <input className={styles.inputDetail} type="text" value={inputValues.websiteUrl} name="websiteUrl" autoComplete="off" />
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