import  { useState } from "react";
import { getDatabase, ref, set } from "firebase/database"
import { app } from "../../Firebase";
import { useNavigate,useLocation } from "react-router-dom";

function UpdateStudent() {
    
  const navigate = useNavigate()
  const location = useLocation()
 console.log(location)

  const [name,setName] = useState(location.state[1].studentName)
  const[phone , setPhone] =useState(location.state[1].studentPhone)
  const[email , setEmail] = useState(location.state[1].studentEmail)
  const [classroom,setClassroom] = useState (location.state[1].studentClassroom)
  const [admissionNo,setAdmissionNo] = useState(location.state[1].studentAdmissionNo)

  

 const submitHandler = (e) => {
    e.preventDefault(); 
    const db = getDatabase(app)  
    set(ref(db,"student/"+admissionNo),{
     studentName:name,
     studentPhone:phone,
     studentEmail: email,
     studentClassroom: classroom,
     studentAdmissionNo:admissionNo
    })
    .then(res =>{
      navigate("/studentList") //after successful data save, move the user to the Student List page.

    })
     .catch(err=>{
       console.log("err") //.catch() runs only if something goes wrong (like network issue or Firebase permission error).
     })
         
  };



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white rounded-lg p-6 w-full max-w-md space-y-4 shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add Student
        </h2>

        <input
        disabled
        value={admissionNo}
        onChange={(e) =>setAdmissionNo(e.target.value)}
          type="number"
          placeholder="Admission No."
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <input
        value={name}
        onChange={(e) =>setName(e.target.value)}
          type="text"
          placeholder="Student Name"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <input
        value={classroom}
         onChange={(e) =>setClassroom(e.target.value)}
          type="number"
          placeholder="Classroom"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <input
        value={email}
         onChange={(e) =>setEmail(e.target.value)}
          type="text"
          placeholder="Email ID"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <input
        value={phone}
         onChange={(e) =>setPhone(e.target.value)}
          type="number"
          placeholder="Phone Number"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <button
        onClick={submitHandler}
          type="submit"
          className="w-full  bg-gradient-to-r from-indigo-100 to-pink-100  text-black font-semibold py-2 rounded hover:bg-blue-600 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateStudent;
