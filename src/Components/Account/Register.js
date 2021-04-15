import React, { useState } from "react";

function Register() {
    const [email, setEmail] = useState("")
    const [passphrase, setPassphrase] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            passphrase: passphrase,
            credit:0
          }),
        })
          // .then((r) => r.json())
        //   .then((newUser) => onAddUser(newUser));
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                 type="text"
                 name="name"
                 placeholder="Set Email"
                 onChange={(e) => setEmail(e.target.value)}
                />
                <input
                 type="text"
                 name="name"
                 placeholder="Set Password"
                 onChange={(e) => setPassphrase(e.target.value)}
                />
                {/* <input
                 type="text"
                 name="name"
                 placeholder="Confirm Password"
                 onChange={(e) => setUsername(e.target.value)}
                /> */}
                <button type="submit"> Register </button>
            </form>
        </div>
    )
}

export default Register