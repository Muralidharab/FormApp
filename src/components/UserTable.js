import React from 'react'
import User from './User'

function UserTable({userFormData}) {
    return (
        <div>
            {
                userFormData.map((user,index)=>{
                    return <User key={index} user={user}/>
                })

            }
            
        </div>
    )
}
export default UserTable