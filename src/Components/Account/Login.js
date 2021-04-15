import React, { useState, useEffect } from 'react';

import AccountDetails from './AccountDetails'

function Login() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then((r) => r.json())
        .then(setUsers)
    }, [])

    function handleAccountUpdate(id) {
        const updatedUsersArray = users.map((user) => {
            if (user.id === id) {
                return user
            }
        })
    }

    const account = users.map((account) => 
    <AccountDetails
        key = {account.id}
        account = {account}
        handleAccountUpdate = {handleAccountUpdate}
    />)

    return (
        <section>
            {account}
            {/* {tickets} */}
        </section>
    )
}

export default Login