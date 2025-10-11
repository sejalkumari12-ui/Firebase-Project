import  { useState } from "react";
import { getDatabase, ref, set } from "firebase/database"
import { app } from "../../Firebase";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [name,setName] = useState("")
  const[phone , setPhone] =useState(null)
  const[email , setEmail] = useState("")
  const [classroom,setClassroom] = useState (null)
  const [admissionNo,setAdmissionNo] = useState(null)
  const navigate = useNavigate()


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
        onChange={(e) =>setAdmissionNo(e.target.value)}
          type="number"
          placeholder="Admission No."
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <input
        onChange={(e) =>setName(e.target.value)}
          type="text"
          placeholder="Student Name"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <input
         onChange={(e) =>setClassroom(e.target.value)}
          type="number"
          placeholder="Classroom"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <input
         onChange={(e) =>setEmail(e.target.value)}
          type="text"
          placeholder="Email ID"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />

        <input
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
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
