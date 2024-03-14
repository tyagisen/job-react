import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

const baseUrl = 'http://127.0.0.1:8000/api'

const JobCreate = ()=>{
    // const [job, setJob] = useState({
    //     jobTitle:'',
    //     companyLogo:'',
    //     companyName:'',
    //     location:'',
    //     postCode:'',
    //     jobDescription:'',
    //     payRate:'',
    //     imageOne:'',
    //     imageTwo:'',
    //     imageThree:'',
    // })
    const [jobTitle, setJobTitle] = useState("")
    const [companyLogo, setCompanyLogo] = useState(null)
    const [companyName, setCompanyName] = useState("")
    const [location, setLocation] = useState("")
    const [postCode, setPostCode] = useState("")
    const [jobDescription, setJobDescription] = useState("")
    const [payRate, setPayRate] = useState("")
    const [imageOne, setImageOne] = useState(null)
    const [imageTwo, setImageTwo] = useState(null)
    const [imageThree, setImageThree] = useState(null)


    const AddJob =async() =>{
        let formField = new FormData()
        formField.append('job_title', jobTitle)
        formField.append('company_name', companyName)
        formField.append('location', location)
        formField.append('post_code', postCode)
        formField.append('job_description', jobDescription)
        formField.append('pay_rate', payRate)
        formField.append('job_image_one', imageOne)
        formField.append('job_image_two', imageTwo)
        formField.append('job_image_three', imageThree)
        if (companyLogo !==null){
            formField.append('company_logo', companyLogo)
        }
        console.log(formField)
        axios.post(baseUrl+'/jobpost/create', formField, {
            headers:{
                'content-type':'multipart/form-data'
            }
        })
        .then((res) =>{
            console.log(res.data)
        })
        
        // await axios({
        //     method:'post',
        //     url:baseUrl+'/jobpost/create',
        //     data: formField
        // },
        // {
        //     headers:{
        //         'Content-Type': 'multipart/form-data'
        //     }
        // }
        // ).then((response)=>{
        //     console.log(response.data)
        // })
        // .catch((error)=>{
        //     if (error.response) {
        //         console.log('Server responded with status code:', error.response.status);
        //         console.log('Response data:', error.response.data);
        //       } else if (error.request) {
        //         console.log('No response received:', error.request);
        //       } else {
        //         console.log('Error creating request:', error.message);
        //       }
        // })
            
    }

    return(
        <div>
                <input type="text" name="jobTitle" value={jobTitle} onChange={(e)=>setJobTitle(e.target.value)} placeholder="Enter Job Title" />
                <input type="file" name="companyLogo" onChange={(e)=>setCompanyLogo(e.target.files[0])} placeholder="Enter companyLogo" />
                <input type="text" name="companyName" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} placeholder="Enter companyName" />
                <input type="text" name="location" value={location} onChange={(e)=>setLocation(e.target.value)} placeholder="Enter location" />
                <input type="text" name="postcode" value={postCode} onChange={(e)=>setPostCode(e.target.value)} placeholder="Enter Post Code" />
                <input type="text" name="jobDescription" value={jobDescription} onChange={(e)=>setJobDescription(e.target.value)} placeholder="Enter Job Description" />
                <input type="text" name="payRate" value={payRate} onChange={(e)=>setPayRate(e.target.value)} placeholder="Enter Pay Rate" />
                <input type="file" src={imageOne} name="imageOne" onChange={(e)=>setImageOne(e.target.files)} placeholder="Enter Image One" />
                <input type="file" src={imageTwo} name="imageTwo" onChange={(e)=>setImageTwo(e.target.files)} placeholder="Enter Image Two" />
                <input type="file" src={imageThree} name="imageThree" onChange={(e)=>setImageThree(e.target.files)} placeholder="Enter Image Three" />
                <button onClick={AddJob}>Add Job</button>
        </div>
    )
}
export default JobCreate;