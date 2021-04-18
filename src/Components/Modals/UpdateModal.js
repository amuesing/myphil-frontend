import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function UpdateModal({account, handleAccountUpdate}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isEmail, setEmail] = useState(account.email);
    const [isPassphrase, setPassphrase] = useState(account.passphrase);
    const [isFirstName, setFirstName] = useState(account.first_name);
    const [isLastName, setLastName] = useState(account.last_name);
    const [isAddress1, setAddress1] = useState(account.address1);
    const [isAddress2, setAddress2] = useState(account.address2);
    const [isCity, setCity] = useState(account.city);
    const [isState, setState] = useState(account.state);
    const [isZip, setZip] = useState(account.zip);
    // const [userInfo, setUserInfo] = useState({'passphrase': account.passphrase})

    const id = account.id

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/users/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: isEmail,
            passphrase: isPassphrase,
            first_name: isFirstName,
            last_name: isLastName,
            address1: isAddress1,
            address2: isAddress2,
            city: isCity,
            state: isState,
            zip: isZip
          }),
        })
          .then((r) => r.json())
          .then(handleAccountUpdate(id));
      }

    function toggleModal() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button onClick={toggleModal}> 
                Update Information 
            </button>
            <Modal isOpen={isOpen} onRequestClose={toggleModal} className="modal">
                <div className="modal-content">
                    <h2>Update Account Information</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                        type="text"
                        name="name"
                        placeholder={account.email}
                        value={isEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        // onChange={(e) => setUserInfo({...userInfo, 'email': e.target.value})}
                        />
                        <input
                        type="text"
                        name="passphrase"
                        placeholder={account.passphrase}
                        value={isPassphrase}
                        onChange={(e) => setPassphrase(e.target.value)}
                        />
                        <input
                        type="text"
                        name="first_name"
                        placeholder={account.first_name}
                        value={isFirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                        type="text"
                        name="last_name"
                        placeholder={account.last_name}
                        value={isLastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                        <input
                        type="text"
                        name="address1"
                        placeholder={account.address1}
                        value={isAddress1}
                        onChange={(e) => setAddress1(e.target.value)}
                        />
                        <input
                        type="text"
                        name="address2"
                        placeholder={account.address2}
                        value={isAddress2}
                        onChange={(e) => setAddress2(e.target.value)}
                        />
                        <input
                        type="text"
                        name="city"
                        placeholder={account.city}
                        value={isCity}
                        onChange={(e) => setCity(e.target.value)}
                        />
                        <input
                        type="text"
                        name="state"
                        placeholder={account.state}
                        value={isState}
                        onChange={(e) => setState(e.target.value)}
                        />
                        <input
                        type="number"
                        name="zip"
                        step="0.01"
                        placeholder={account.zip}
                        value={isZip}
                        onChange={(e) => setZip(parseFloat(e.target.value))}
                        />
                        <button type="submit">Update Account</button>
                        <button onClick={toggleModal}>Close</button>
                    </form>
                </div>           
            </Modal >
        </div>
    )
}

export default UpdateModal