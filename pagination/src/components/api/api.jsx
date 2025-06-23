import { useState,useEffect } from "react";
export default function Employeeapi(){
 const [employeeData,setEmployeeData] = useState([]);
 const fetchEmployeeDetails=()=>{
         fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
         .then(response=>{
          if(!response.ok){
           throw new Error("failed to fetch data") ;

          }
          return response.json();
         })
         .then(data=>{
          setEmployeeData(data);
        console.log(data);
         })
         .catch(error => console.log("failed to fetch data",error));
  }
  useEffect(()=>{
    fetchEmployeeDetails();
  },[]);
  return employeeData;
 }