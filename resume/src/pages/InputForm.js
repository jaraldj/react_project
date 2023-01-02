import React,{useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function InputForm(){

    const [resumePost, setResumePost] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        role: '',
        skills: [],
        education : [],
        project : [],
        experiance : [],
        personalDetails : {},
        language : []
    })
    const [resumes, setResumes] = useState({
        request: "create_react_resume",
        user : "jaraldj",
        resume : ''
    })
    console.log(resumes)

    const [viewResumeData, setViewResumeData] = useState()

    const [resumeSkills, setResumeSkills] = useState([])
    const [languages, setLangages] = useState([])
    // console.log(resumeSkills);

    const [resumeEducation, setResumeEducation]= useState({
        // course: "",
        // year: "",
        // institute: "",
        // percentage: ""
    })

    const [resumeProject, setResumeProject] = useState({})

    const [resumeExperiance, setResumeExperiance] = useState({})

    useEffect(()=>{
        resumeUpdate()
        // getApi()
    },[resumePost])

    useEffect(()=>{
        getApi()
    },[])

    const resumeUpdate = () => {
        setResumes({...resumes,resume:resumePost})
    }

    const onResumeUpdate = (Key, value) => {
        let update;
        
       update={...resumePost,[Key]:value}
       setResumePost(update)
   

    }
    const addSkills = () =>{
        let skillLi = [...resumePost.skills,resumeSkills]
        setResumePost({...resumePost,skills:skillLi})
        setResumeSkills('')
    }

    const deleteItem = (index,val) => {
        let del_item = resumePost[val].filter((value, id)=> id !== index)
        setResumePost({...resumePost,[val]:del_item})
    }

    // console.log(resumePost);

    const add_Education = (key, value) => {
        setResumeEducation({...resumeEducation,[key]:value})
    }
    const addEducation = () =>{
        let educationLi = [...resumePost.education,resumeEducation]
        setResumePost({...resumePost,education:educationLi})
        setResumeEducation({...resumePost.education,course:'',year:'',institute:'',percentage:''})
    }
    


    const add_Project = (key, value) => {
        setResumeProject({...resumeProject,[key]:value})
    }

    const addProject = () => {
        let projectLi = [...resumePost.project, resumeProject]
        setResumePost({...resumePost,project:projectLi})
        setResumeProject({...resumePost.project,project_title:'',project_abstract:''})
    }


    const add_Experiance = (key,value) => {
        setResumeExperiance({...resumeExperiance,[key]:value})
    }

    const addExp = () => {
        let expLi = [...resumePost.experiance, resumeExperiance]
        setResumePost({...resumePost, experiance:expLi})
        setResumeExperiance({...resumePost.experiance,company_name:'', position:'',years:''})
    }
    

    const personalDetails_fun = (key, value) =>{
        let personalLi={...resumePost.personalDetails,[key]:value}
            setResumePost({...resumePost,personalDetails:personalLi})
    }

    const addLanguages=()=>{
        let languagesArr = [...resumePost.language, languages]
        setResumePost({...resumePost,language:languagesArr})
        setLangages('')
    }

    

    

    const submitResume = async() =>{
        console.log(resumes);
        const responce = await axios.post('http://karka.academy/api/action.php',JSON.stringify(resumes))
        console.log(responce.data);
        setResumePost({...resumePost,name:'',email:'',phoneNumber:'',role:''})
    }



    const getApi = async() => {
        const {data} = await axios.get('http://karka.academy/api/action.php?request=get_user_react_resume&user=jaraldj')
        setViewResumeData(data.data)
        console.log(data.data);
    }
    // console.log(JSON.parse(viewResumeData.data).name);

    // console.log(...viewResumeData.email)

    const delete_resume = async(id) => {
        const del_id=await axios.get(`http://karka.academy/api/action.php?request=delete_react_user_resume&user=jaraldj&id=${id}`)
        getApi()
    }

    return (
        <div className="container">
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name : </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control w-25" value={resumePost.name} onChange={(e)=>onResumeUpdate('name', e.target.value)}/><br/><br/>
                    </div>
            
                    <label className="col-sm-2 col-form-label">Email : </label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control w-25" onChange={(e)=>onResumeUpdate('email', e.target.value)}/><br/><br/>
                    </div>
                </div>
            
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Phone number : </label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control w-25" onChange={(e)=>onResumeUpdate('phoneNumber', e.target.value)}/><br/><br/>
                    </div>
                    <label className="col-sm-2 col-form-label">Role : </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control w-25" onChange={(e)=>onResumeUpdate('role', e.target.value)}/><br/><br/>
                    </div>

                    <label className="col-sm-2 col-form-label">Objective : </label>
                    <div className="col-sm-10">
                        <textarea className="form-control w-25" onChange={(e)=>onResumeUpdate('objective', e.target.value)}/><br/><br/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Skills : </label>
                    <div className="col-sm-2">
                        <input type="text" className="form-control" value={resumeSkills} onChange={(e)=>setResumeSkills(e.target.value)}/>
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-primary" onClick={addSkills}>+</button><br/><br/>
                    </div>
                </div>
                
                

                {resumePost.skills.map((data,index)=>{
                    return (
                        <div key={index}>
                            <table className="table">
                            {/* <p>{data} </p> */}
                                <tbody>
                                    <tr>
                                        <td className="col-2">{index + 1}</td>
                                        <td className="col-6">{data}</td>
                                        <td className="col-2"><button type="button" className="btn btn-danger" onClick={()=>deleteItem(index, 'skills')}>Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })}

<div className="form-group row">
            <label>Education : </label>
                <table>
                    <thead>
                        <tr className="form-group row">
                            <th className="col">Course</th>
                            <th className="col">Year</th>
                            <th className="col">Institute</th>
                            <th className="col">Percentage</th>
                            <th className="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="form-group row">
                        <td className="col"><input className="form-control" type="text" value={resumeEducation.course} onChange={(e)=>add_Education('course', e.target.value)}/></td>
                        <td className="col"><input className="form-control" type="number" value={resumeEducation.year} onChange={(e)=>add_Education('year', e.target.value)}/></td>
                        <td className="col"><input className="form-control" type="text" value={resumeEducation.institute} onChange={(e)=>add_Education('institute', e.target.value)}/></td>
                        <td className="col"><input className="form-control" type="text" value={resumeEducation.percentage} onChange={(e)=>add_Education('percentage', e.target.value)}/></td>
                        <td className="col"><button type="button" className="btn btn-primary" onClick={addEducation}>+</button></td>
                        
                    </tr>
                </tbody>
                </table>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Year</th>
                            <th>Institute</th>
                            <th>Percentage</th>
                            <th>Action</th>
                        </tr>
                    </thead>


                    {resumePost.education.map((value,index)=>{
                        return (
                            <>
                                    <tbody key={index}>
                                        <tr>
                                            <td className="col-3">{value.course}</td>
                                            <td className="col-2">{value.year}</td>
                                            <td className="col-4">{value.institute}</td>
                                            <td className="col-2">{value.percentage}</td>
                                            <td><button type="button" className="btn btn-danger" onClick={()=>deleteItem(index, "education")}>Delete</button></td>
                                        </tr>
                                    </tbody>
                            </>
                        )
                    })}
                </table>

            <label>Project</label>
                    <table>
                        <thead>
                            <tr className="form-group row">
                                <th className="col">Project Title</th>
                                <th className="col">Abstract</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="form-group row">
                                <td className="col"><input className="form-control" type="text" value={resumeProject.project_title} onChange={(e)=>add_Project('project_title', e.target.value)} /></td>
                                <td className="col"><input className="form-control" type="text" value={resumeProject.project_abstract} onChange={(e)=>add_Project('project_abstract', e.target.value)} /></td>
                                <td className="col"><button type="button" className="btn btn-primary" onClick={addProject}>+</button></td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Abstract</th>
                            <th>Action</th>
                        </tr>
                    </thead>


                    {resumePost.project.map((value, index)=>{
                        return (
                            <>
                                    <tbody key={index}>
                                        <tr>
                                            <td className="col-5">{value.project_title}</td>
                                            <td className="col-6">{value.project_abstract}</td>
                                            <td><button type="button" className="btn btn-danger" onClick={()=>deleteItem(index, "project")}>Delete</button></td>
                                        </tr>
                                    </tbody>
                            </>
                        )
                    })}
                </table>

            <label>Experiance</label>
            <table>
                        <thead>
                            <tr className="form-group row">
                                <th className="col">Company Name</th>
                                <th className="col">Position</th>
                                <th className="col">Experiance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="form-group row">
                                <td className="col"><input className="form-control" type="text" value={resumeExperiance.company_name} onChange={(e)=>add_Experiance('company_name', e.target.value)} /></td>
                                <td className="col"><input className="form-control" type="text" value={resumeExperiance.position} onChange={(e)=>add_Experiance('position', e.target.value)} /></td>
                                <td className="col"><input className="form-control" type="text" value={resumeExperiance.years} onChange={(e)=>add_Experiance('years', e.target.value)} /></td>
                                <td className="col"><button type="button" className="btn btn-primary" onClick={addExp}>+</button></td>
                            </tr>
                        </tbody>
                    </table>


                    <table className="table">
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Position</th>
                            <th>Experiance</th>
                            <th>Action</th>
                        </tr>
                    </thead>


                    {resumePost.experiance.map((value, index)=>{
                        return (
                            <>
                                    <tbody key={index}>
                                        <tr>
                                            <td className="col-4">{value.company_name}</td>
                                            <td className="col-4">{value.position}</td>
                                            <td className="col-2">{value.years}</td>
                                            <td><button type="button" className="btn btn-danger" onClick={()=>deleteItem(index, "experiance")}>Delete</button></td>
                                        </tr>
                                    </tbody>
                            </>
                        )
                    })}
                </table>

        

                <label>Personal Details</label>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Nationality :</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control w-25" onChange={(e)=>personalDetails_fun('nationality', e.target.value)}/><br/><br/>
                        </div>
                        <label className="col-sm-2 col-form-label">Address :</label>
                        <div className="col-sm-10">
                            <textarea className="form-control w-25" onChange={(e)=>personalDetails_fun('address', e.target.value)}></textarea><br/><br/>
                        </div>

                        <label className="col-sm-2 col-form-label">DOB :</label>
                        <div className="col-sm-10">
                            <input type="date" className="form-control w-25" placeholder="mm/dd/yyyy" onChange={(e)=>personalDetails_fun('dob', e.target.value)}/><br/><br/>
                        </div>
                        <label className="col-sm-2 col-form-label">Languages Known :</label>
                        <div className="col-sm-2">
                            <input type="text" className="form-control" value={languages} onChange={(e)=>setLangages(e.target.value)}/><br/><br/>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-primary" onClick={addLanguages}>+</button><br/><br/>
                        </div>
                    </div>

                    {resumePost.language.map((data,index)=>{
                    return (
                        <div key={index}>
                            <table className="table">
                            {/* <p>{data} </p> */}
                                <tbody>
                                    <tr>
                                        <td className="col-2">{index + 1}</td>
                                        <td className="col-6">{data}</td>
                                        <td className="col-2"><button type="button" className="btn btn-danger" onClick={()=>deleteItem(index,'language')}>Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })}
        
        </div><br/>

        <button type="button" className="btn btn-success" onClick={()=>{submitResume();getApi()}}>Submit</button><br/><br/>


        </form>

         {/* <button type="button" onClick={getApi}>Get Resume</button> */}

        {viewResumeData && viewResumeData.map((val, index)=>{
        return (
            <div key={index}>
    
                <table className='table'>
                          <tbody >
                         
                            <tr >
                                <td>
                                    {index+1}
                                </td>
                                <td className='col-5'>
                                    {JSON.parse(val.data).name}
                                </td>
                                <td>
                                    <button type="button" className='btn btn-danger' onClick={()=>delete_resume(val.id)}>Delete</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-success btnLink"><Link to={`/view/${val.id}`}>View</Link></button>
                                </td>
                            </tr>
                          </tbody>
                       </table>
            </div>
        )
    })}
        </div>
    )
    

   
}