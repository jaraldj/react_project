import React, {useState, useContext} from 'react'
import axios from 'axios'
import UserContext from "../store/UserContext";

export default function Form(){

    const value = useContext(UserContext);
    const {isLogged,setIsLogged,currentUser} = value;

    const [form, setForm] = useState({
        
    })

    const [resumePost, setResumePost] = useState({
        requsest: "create_react_resume",
        user : "jarald",
        resume : form
    })


   

    let resumeNew = {
        skills : [],
        cetification : [],
        areaOfInterest : [],
        personalDetails : {},
        languages : []
    }
    console.log(resumeNew)
    
    
    const addobj=(key, value, index = null, indexkey = null)=>{
        if(index == null){
            resumeNew[key] = value;
        }else if(key == "education" || key == "experiance"){
            if(!resumeNew[key]){
                resumeNew[key] = []
            }
            if(!resumeNew[key][index]){
                resumeNew[key][index] = {}
            }
            resumeNew[key][index][indexkey] = value;
        }else{
            resumeNew[key][index] = value;
        }
        }
        console.log(resumeNew);
        const subForm = async() =>{
            setResumePost(resumeNew)

            const responce = await axios.post(' http://karka.academy/api/action.php',JSON.stringify(resumePost))

            console.log(responce)

            console.log(resumePost);
        }
        console.log(resumePost);

    return (
        <>
            <form>
                <label>Name :</label>
                <input type="text" onChange={(e)=>addobj('fname', e.target.value)}/><br/>
                <label>Email :</label>
                <input type="email" onChange={(e)=>addobj('email', e.target.value)}/><br/>
                <label>Phone number :</label>
                <input type="number" onChange={(e)=>addobj('phoneNumber', e.target.value)}/><br/>
                <label>Role :</label>
                <input type="text" onChange={(e)=>addobj('role', e.target.value)}/><br/>
                <label>Skills :</label>
                <input type="text" onChange={(e)=>addobj('skills', e.target.value, 0)}/>
                <input type="text" onChange={(e)=>addobj('skills', e.target.value, 1)}/>
                <input type="text" onChange={(e)=>addobj('skills', e.target.value, 2)}/>
                <input type="text" onChange={(e)=>addobj('skills', e.target.value, 3)}/>
                <input type="text" onChange={(e)=>addobj('skills', e.target.value, 4)}/><br/>

                <label>Objective</label>
                <textarea cols="30" rows="10" onChange={(e)=>addobj('objective', e.target.value)}></textarea><br/>

                <label>Education :</label>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Course</th>
                        <th scope="col">Year</th>
                        <th scope="col">Insttute</th>
                        <th scope="col">Percentage</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><input type="text" onChange={(e)=>addobj('education', e.target.value, 0, 'course')}/></td>
                        <td><input type="number" onChange={(e)=>addobj('education', e.target.value, 0 ,'year')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('education', e.target.value, 0, 'institute')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('education', e.target.value, 0, 'percentage')}/></td>
                        
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td><input type="text" onChange={(e)=>addobj('education', e.target.value, 1, 'course')}/></td>
                        <td><input type="number" onChange={(e)=>addobj('education', e.target.value, 1 ,'year')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('education', e.target.value, 1, 'institute')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('education', e.target.value, 1, 'percentage')}/></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td><input type="text" onChange={(e)=>addobj('education', e.target.value, 2, 'course')}/></td>
                        <td><input type="number" onChange={(e)=>addobj('education', e.target.value, 2 ,'year')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('education', e.target.value, 2, 'institute')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('education', e.target.value, 2, 'percentage')}/></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td><input type="text" onChange={(e)=>addobj('education', e.target.value, 3, 'course')}/></td>
                        <td><input type="number" onChange={(e)=>addobj('education', e.target.value, 3 ,'year')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('education', e.target.value, 3, 'institute')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('education', e.target.value, 3, 'percentage')}/></td>
                    </tr>
                    </tbody>
                </table>

                <label>Certificate :</label>
                <input type="text" onChange={(e)=>addobj('cetification', e.target.value, 0)}/>
                <input type="text" onChange={(e)=>addobj('cetification', e.target.value, 1)}/>
                <input type="text" onChange={(e)=>addobj('cetification', e.target.value, 2)}/><br/>

                <label>Area Of Interest :</label>
                <input type="text" onChange={(e)=>addobj('areaOfInterest', e.target.value, 0)}/>
                <input type="text" onChange={(e)=>addobj('areaOfInterest', e.target.value, 2)}/>
                <input type="text" onChange={(e)=>addobj('areaOfInterest', e.target.value, 1)}/><br/>

                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Organisation</th>
                        <th scope="col">Role</th>
                        <th scope="col">Year Of Experiance</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td><input type="text" onChange={(e)=>addobj('experiance', e.target.value, 0, 'organisation')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('experiance', e.target.value, 0,'roles')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('experiance', e.target.value, 0, 'years')}/></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td><input type="text" onChange={(e)=>addobj('experiance', e.target.value, 1, 'organisation')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('experiance', e.target.value, 1,'roles')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('experiance', e.target.value, 1, 'years')}/></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td><input type="text" onChange={(e)=>addobj('experiance', e.target.value, 2, 'organisation')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('experiance', e.target.value, 2,'roles')}/></td>
                        <td><input type="text" onChange={(e)=>addobj('experiance', e.target.value, 2, 'years')}/></td>
                    </tr>
                    </tbody>
                </table>

                <label>Personal Details</label>
                <label>Father Name :</label>
                    <input type="text" onChange={(e)=>addobj('personalDetails', e.target.value, 'fatherName')}/><br/>
                    <label>Gender :</label>
                    <input type="text" onChange={(e)=>addobj('personalDetails', e.target.value, 'gender')}/><br/>
                    <label>Nationality :</label>
                    <input type="text" onChange={(e)=>addobj('personalDetails', e.target.value, 'nationality')}/><br/>
                    <label>dob :</label>
                    <input type="date" onChange={(e)=>addobj('personalDetails', e.target.value, 'dob')}/><br/>
                    <label>Address</label>
                    <textarea cols="30" rows="10" onChange={(e)=>addobj('personalDetails', e.target.value, 'address')}></textarea><br/>
                    <label>Languages</label>
                    <input type="text" onChange={(e)=>addobj('languages', e.target.value, 0)}/>
                    <input type="text" onChange={(e)=>addobj('languages', e.target.value, 1)}/>
                    <input type="text" onChange={(e)=>addobj('languages', e.target.value, 2)}/><br/>

                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Number</th>
                        <th scope="col">Action</th>
                        <th scope="col">View</th>
                        </tr>
                    </thead>
                    <tbody id="tblData">
                    
                    </tbody>
                    </table>

                    <button onClick={subForm}><label>Submit</label></button> 
                    {/* <!-- <button id="getResume"><label>Get Resume</label></button> --> */}
            </form>
        </>
    )
}