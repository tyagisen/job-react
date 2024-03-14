import './App.css';
import React, {useState, useEffect} from 'react';
import JobList from './components/JobList';
import axios from "axios";
import JobCreate from './components/JobCreate';


const App = () =>{
  const [jobs, setJob] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/jobpost/list')
            .then(response => {
                setJob(response.data)
                console.log(response.data)
                // console.log(jobs)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
  return (
    <>
      <JobCreate/>
      <JobList jobs = {jobs}/>
    </>
  )
}


export default App;
