import React from 'react'

function User({user}) {
    return (
        <div className="table"> 
            <table cellSpacing="5px" cellPadding="5px" >
            <tr>
            <td> firstName <br/>{user.firstName}</td>
            <td>lastName <br/>{user.lastName}</td>
            <td>Age<br/>{user.age}</td>
            </tr>
            </table>
        </div>
    )
}

export default User
