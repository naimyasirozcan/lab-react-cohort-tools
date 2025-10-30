import { useState } from "react";
import StudentCard from "../components/StudentCard";
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import studentsData from "../assets/students.json";




function HomePage() {
  
  const [students, setStudents] = useState(studentsData);

  const [ searchParams, setSearchParams ] = useSearchParams()
  
  const handleFilterSelection = (event) => {
    const program = event.target.value //we are assigning current value to variable
    setSearchParams({program})

    if(program === "all"){
      setStudents(studentsData)
    } else {
      setStudents(studentsData.filter(s => s.program === program))
    }
  }


  return (
    <div className="border-2 border-rose-500 m-2">
        <h1>Home Page</h1>

        <div>
          <select onChange={handleFilterSelection} name="program" id="program-selection">
        
            <option value="all">All</option>
            <option value="Web Dev">Web Development</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="UX/UI">UI/UX</option>

          </select>
        </div>
        
        <div className="flex justify-between items-center p-2 font-bold border-b w-full">
          <span className="flex items-center justify-center" style={{ flexBasis: "20%" }}>Image</span>
          <span style={{ flexBasis: "20%" }}>Name</span>
          <span style={{ flexBasis: "20%" }}>Program</span>
          <span style={{ flexBasis: "20%" }}>Email</span>
          <span style={{ flexBasis: "20%" }}>Phone</span>
        </div>

      {students &&
        students.map((student) => {
          return (
              <Link key={student._id} to={`/students/${student._id}`}>
              <StudentCard {...student} />
              </Link>
          );
        })}
    </div>
  );
}

export default HomePage;
