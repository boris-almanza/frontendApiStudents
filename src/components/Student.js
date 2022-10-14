import React from 'react';
import {useState,useEffect} from 'react';

 const Student = ()=>{

const [name,setName] = useState("");
const [adress , setAdress] = useState("");
const [students, setStudents] = useState([]);



//llamamos a api backend 
/*
useEffect(()=>{

	const fetchData = async ()=>{
	const url = "http://localhost:8080/student/getAll";
	const response =  await fetch(url);
	
	console.log(response.json())
	setStudents(response.json());
}

	fetchData()
		.catch(console.error)
},[])*/
useEffect(()=>{
  fetch("http://localhost:8080/student/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setStudents(result);
  }
)
},[])

// handle click event to send data 

const handleClick = (e) => {

e.preventDefault()
const student = { name, adress};

    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
  	console.log(student)
    console.log("New Student added")
  })
}


// retornamos el componente
	return (
		<>
		<div className="container border" >
		<br/><br/>
			<div className="row">
				<div className="input-group flex-nowrap">
  					<input type="text" className="form-control" placeholder="Student Name" aria-label="Student Name" onChange={(e)=> setName(e.target.value)}/>
  				</div>
			</div>

<br/>
			<div className="row">
				<div className="input-group flex-nowrap">
  					<input type="text" className="form-control" placeholder="Student Adress" aria-label="Student Adress" onChange={(e)=> setAdress(e.target.value)}/>
  				</div>
			</div>
<br/>
			<button type="button" className="btn btn-outline-primary" onClick={handleClick}>Submit</button>
			<br/><br/>
		</div><br/><br/>

		<div className="container border">

			{students.map((s)=>(

				<span> {s.name}</span>

				)
			)}
		</div>
	</>
	)
}

export default Student;