import { useEffect, useState } from "react";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { app } from "../../Firebase";

function StudentList() {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const db = getDatabase(app);
    const studentRef = ref(db, "student");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setStudentData(data);
    });
  }, []); 
  const deleteData = (key) =>{
 const db = getDatabase(app)
   const studentRef = ref(db, "student/" + key)
   remove(studentRef)

  }

  return (
    <div className="min-h-screen  flex justify-center items-center p-6 ">
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🎓 Student List
        </h1>

        {studentData ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(studentData).map(([key, value]) => (
              <div
                key={key}
                className="p-4 bg-gradient-to-r from-indigo-100 to-pink-100 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-1">
                  {value.studentName}
                </h2>
                {value.studentPhone && (
                  <p className="text-gray-600 text-sm">
                    📞 {value.studentPhone}
                  </p>
                )}
                {value.studentEmail && (
                  <p className="text-gray-600 text-sm">
                    ✉️ {value.studentEmail}
                  </p>
                  
                )}
                <button 
                onClick={()=>{deleteData(key)}}
                    className="mt-3 w-full bg-red-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-red-600 hover:shadow-lg transition-all duration-300"
                >Remove</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Loading student data...</p>
        )}
      </div>
    </div>
  );
}

export default StudentList
