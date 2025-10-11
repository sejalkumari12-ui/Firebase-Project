import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <div className="flex flex-col md:flex-row h-screen font-semibold text-black bg-gradient-to-r from-indigo-100 to-pink-100">
    
      <header className="flex justify-between items-center p-4 text-black md:hidden">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      
      <aside
        className={`fixed  bg-gradient-to-r from-indigo-100 to-pink-100  md:static top-0 left-0 h-full md:h-auto w-3/4 sm:w-2/5 md:w-1/5 bg-blue-400 text-black flex flex-col items-start p-6 shadow-lg transform md:transform-none transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="mb-8 mt-10 md:mt-0">
          <h2 className="text-2xl font-bold tracking-wide">Dashboard</h2>
          <p className="text-sm mt-1 opacity-75">Welcome, Admin!</p>
        </div>

        <nav className="flex flex-col gap-4 w-full">
          <Link
            to="/addstudent"
            onClick={() => setIsOpen(false)}
            className="block w-full py-2 px-3 rounded-lg hover:bg-pink-400 transition"
          >
            ➕ Add Student
          </Link>

          <Link
            to="/studentlist"
            onClick={() => setIsOpen(false)}
            className="block w-full py-2 px-3 rounded-lg hover:bg-pink-400 transition"
          >
            📋 Student List
          </Link>
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      

     
      <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
