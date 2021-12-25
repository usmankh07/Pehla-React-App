import React from 'react'

function Hi() {
    const formatUserName = () => {
        return user.firstName + " " + user.lastName;
    }

    const user = {
        firstName: 'Usman',
        lastName: 'Khan'
    }

    return (
        <div>
            <p>Hello , {formatUserName()}</p>
        </div>
    )
}

export default Hi
