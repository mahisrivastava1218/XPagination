
export default function Pagination({currentPage,setCurrentPage,totalPage}){
    
  const handlePrevious=()=>{
    if(currentPage>1)setCurrentPage(prev=>(prev-1));
  }
  const handleNext=()=>{
    if(currentPage<totalPage)setCurrentPage(next=>(next+1));
  }
    return(
    <div className="pagination" style={{display:"flex",justifyContent:"center",marginTop:"30px", marginBottom:"30px",gap:"20px"}}>
      <button style={{backgroundColor:"green",color:"white",padding:"12px",border:"none"}} onClick={handlePrevious}>Previous</button>
      <button  style={{backgroundColor:"green",color:"white",padding:"10px",border:"none"}}>{currentPage}</button>
      <button style={{backgroundColor:"green",color:"white",padding:"10px",border:"none"}} onClick={handleNext}>Next</button>
    </div>
    )
}