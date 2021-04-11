import React, { useState, useEffect } from 'react';

import AccountDetails from './AccountDetails/AccountDetails'

function Login() {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then((r) => r.json())
        .then(setUser)
    }, [])


    const account = user.map((account) => 
    <AccountDetails
        key = {account.id}
        account = {account}
    />)

    return (
        <div>
            {account}
        </div>
    )
}

export default Login