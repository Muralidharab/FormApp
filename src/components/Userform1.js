import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Userform1(props) {
	 const[userData, setuserData] = useState( {
            firstName: '',
            lastName: '',
            age:null,
        } )
    
        // state for firstName
        // username changes so 
        const [firstNameError, setfirstNameError] = useState( false );
        
        const [firstNameErrorCharacter, setfirstNameErrorCharacter] = useState( false );
    
        // state for lastName
        const [lastNameError, setlastNameError] = useState( false );
        const [lastNameErrorCharacter, setlastNameErrorCharacter] = useState( false );
    
        // state for age
        const [ageError, setageError] = useState( false );
        const [ageErrorCharacter, setageErrorCharacter] = useState( false );
    
       
        const updateuserData = (event) => {
            setuserData( {
                ...userData,
                [event.target.name]: event.target.value,
            } );
        }
    
        const saveData = ( event ) => {
            event.preventDefault();

            // Form Validation for firstName
            const { firstName, lastName, age } = userData;
            console.log(userData);
            if ( firstName ) {
                setfirstNameError( false )
                if ( firstName.search( /[^a-zA-Z]+/ )) {
                    setfirstNameErrorCharacter(false)
                } else {
                    setfirstNameErrorCharacter(true)
                }
            } else {
                setfirstNameErrorCharacter( false )
                setfirstNameError(true)
            }
    
            // Form Validation for lastName
            if ( lastName ) {
                setlastNameError( false )
                if ( lastName.search( /[^a-zA-Z]+/ )) {
                    setlastNameErrorCharacter(false)
                } else {
                    setlastNameErrorCharacter(true)
                }
            } else {
                setlastNameErrorCharacter( false )
                setlastNameError(true)
            }
    
            // Form Validation for age
            if ( age ) {
                setageError( false )
                if ( age >0 ) {
                    setageErrorCharacter(false)
                } else {
                    setageErrorCharacter(true)
                }
            } else {
                setageErrorCharacter( false )
                setageError(true)
            }
            props.getUserData(userData)
        }

    return (
        <div>
          <form name="Userform1">
            <h1>Login Form</h1>
            <lable> First Name:</lable>

            <input type="text" placeholder="Enter FirstName" name="firstName"
                 value={ userData.firstName } onChange={ (event)=>{updateuserData(event)}}/>

                {firstNameError && <p style={{ color:'red' }}>Please enter firstName</p>}
                {firstNameErrorCharacter && <p style={{ color:'red' }}>Only characters are allowed</p>}
                <br />
                

            <label>Last Name:</label> <input type="text" placeholder="Enter LastName"name="lastName"
                    value={userData.lastName} onChange={ (event)=>{updateuserData(event)} } />

                {lastNameError && <p style={{ color:'red' }}>Please enter lastName</p>}
                {lastNameErrorCharacter && <p style={{ color:'red' }}>Only characters are allowed</p>}
                <br />
                

                <label>Age:</label> 
                <input type="number" placeholder="Enter Age" name="age"  value={userData.age}
                    onChange={ (event)=>{updateuserData(event)} } />
                {ageError &&   <p style={{ color:'red' }}>Please enter age</p>}
                {ageErrorCharacter && <p style={{ color:'red' }}>Age should be greater than 0 and less than 100</p>}
                <br />
                
                <button onClick={saveData}>Submit</button>
            </form>
            
        </div>
    )
}

export default Userform1
