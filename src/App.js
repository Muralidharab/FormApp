import React,{useState} from 'react'
import './App.css';
import UserForm from './components/Userform1';
import UserTable from './components/UserTable';


// =============== Getting Data From Local Storage =================
const getLocalData = ()=>{
  let data = localStorage.getItem('userData')
  if(data){
    return JSON.parse(localStorage.getItem('userData'))
  }
  else{
    return []
  }
}

function App() {
  const [userFormData, setuserFormData] = useState(getLocalData())
  const getUserData =(userData)=>{ 
    const userFormDataCopy = [...userFormData]
    
    userFormDataCopy.push(userData)
    
    setuserFormData(userFormDataCopy)

// ================== Setting Data From Local Storage ====================
    localStorage.setItem('userData',JSON.stringify(userFormDataCopy))

  }
  return (
    <div className="App">
    <UserForm getUserData={getUserData}/>
    <UserTable userFormData={userFormData}/>

    </div>
  );
}

export default App;
