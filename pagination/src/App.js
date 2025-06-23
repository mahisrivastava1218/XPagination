import Pagination from "./components/Pagination";
import {useState } from "react";
import Employeeapi from "./components/api/api";
function App() {
  const employeeData = Employeeapi();
  const[currentPage,setCurrentPage]=useState(1);
  const itemsPerPage=10;
  
  const totalPage=Math.ceil(employeeData.length/itemsPerPage); //48/10=>4.8=4
  // calculate start index and end index to show on particular page
  //2-> 1*10->startIndex 2*10->end index
  const startIndex= (currentPage-1)*itemsPerPage;
  const endIndex = startIndex+itemsPerPage;
  // show data
  const currentData= employeeData.slice(startIndex,endIndex);

  return (
   <div style={{backgroundColor:"#f4f4f4",width:"100vw",height:"100vh",margin:"0",padding:"0",boxSizing:"border-box"}}>
   <header style={{textAlign:"center",paddingTop:"20px"}}>
        <h1>Employee Data Table</h1>
   </header>
   <section  style={{width:"100%",height:"100%"}}>
    <table style={{width:"100%",height:"70%"}}>
     <thead>
      <tr style={{color:"white",backgroundColor:"#009879"}}>
        <td>ID</td>
        <td>Name</td>
        <td>Email</td>
        <td>Role</td>
      </tr>
        </thead>
        <tbody>
          {currentData.map((item)=>(
            <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.role}</td>
            </tr>
              ))}
        </tbody>
    </table>
    <hr color="green"/>
    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage}/>
   </section>
   </div>
  );
}

export default App;
