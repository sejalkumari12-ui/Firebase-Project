import  { useState } from "react";


function AddStudent() {
  const [name,setName] = useState("")
  const[phone , setPhone] =useState("")
  const[email , setEmail] = useState("")
  const [classroom,setClassroom] = useState ("")


 const submitHandler = (e) => {
    e.preventDefault(); 
  
    console.log(name,phone,email,classroom);     
  };



  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white rounded-lg p-6 w-full max-w-md space-y-4 shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add Student
        </h2>

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
          className="w-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400  text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
