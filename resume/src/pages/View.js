import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import UserContext from "../store/UserContext";
import Header from "../components/header"

export default function View(){

    let navigate = useNavigate()
    const params = useParams()
    const value = useContext(UserContext);
    const {isLogged,setIsLogged,currentUser} = value;
    const [view, setView] = useState()
    console.log(view);
    useEffect(()=>{
        getCurrentResume(params.id)
    },[params.id])

    let login = localStorage.getItem("login")
    useEffect(()=>{
        if(!login) 
            navigate('/')
        },[login])
    const getCurrentResume = async() => {
        const {data} = await axios.get(`https://karka.academy/api/action.php?request=get_react_resume_by_id&user=jaraldj&id=${params.id}`)
        setView(data.data);

    }
    console.log(view);
    
    return (
        <>
        <Header setIsLogged={setIsLogged}/>

        <div className="container">
            <h2 className="text-center pt-5 pb-3">Resume</h2>

            {view && <div className="container">
                <div className="row">
                    <div className="col-4 left-container left-section p-4 bg-light">
                        <h2>{JSON.parse(view.data).name}</h2>
                        <h5 className="pt-4">Email: {JSON.parse(view.data).email}</h5>
                        <h5 className="pt-4">Phone: {JSON.parse(view.data).phoneNumber}</h5>
                        <h5 className="pt-4">Role: {JSON.parse(view.data).role}</h5>
                        <h5 className="pt-4 pb-3">Skills: </h5><h6>{JSON.parse(view.data).skills.map((val, i)=>{
                            return(
                                <div>
                                    <ul>
                                        <li>{val}</li>
                                    </ul>
                                </div>
                            )
                        })}</h6>

                        <h5 className="pt-4 pb-3">Nationality:</h5><h6>{JSON.parse(view.data).personalDetails.nationality}</h6>

                        <h5 className="pt-4 pb-3">Addreess:</h5><h6>{JSON.parse(view.data).personalDetails.address}</h6>

                        <h5 className="pt-4 pb-3">Languages Known:</h5><h6>{JSON.parse(view.data).language.map((val, i)=>{
                            return(
                                <>
                                    <ul>
                                        <li>{val}</li>
                                    </ul>
                                </>
                            )
                        })}</h6>
                    </div>
                    <div className="col-8 pt-4">
                        <h3>Objective</h3>
                        <p>{JSON.parse(view.data).objective}</p>
                        <h3>Education: </h3>
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th scope="col">Study</th>
                                <th scope="col">Institute</th>
                                <th scope="col">Percentage</th>
                                <th scope="col">Year</th>
                            </tr>
                            </thead>
                            <tbody>
                                {JSON.parse(view.data).education.map((val, i)=>{
                                    return(
                                        <tr>
                                    <td>{val.course}</td>
                                    <td>{val.year}</td>
                                    <td>{val.institute}</td>
                                    <td>{val.percentage}</td>
                                    
                                </tr>
                                    )
                                    
                                })}
                            </tbody>
                        </table>
                        <h3>Project: </h3> 
                    
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Project Title</th>
                                    <th>Abstract</th>
                                </tr>
                            </thead>
                            <tbody>
                            {JSON.parse(view.data).project.map((val, i)=>{
                                return(
                                    <tr>
                                        <td className="col-4">{val.project_title}</td>
                                        <td className="col-8">{val.project_abstract}</td>
                                    </tr>
                                    
                                )
                                
                            })}
                            </tbody>
                        </table>

                        <h3>Experiance</h3>

                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Position</th>
                                    <th>Years</th>
                                </tr>
                            </thead>
                            <tbody>
                            {JSON.parse(view.data).experiance.map((val, i)=>{
                                return(
                                    <tr>
                                        <td>{val.company_name}</td>
                                        <td>{val.position}</td>
                                        <td>{val.years}</td>
                                    </tr>
                                    
                                )
                                
                            })}
                            </tbody>
                        </table>

                    </div>
                    </div>
                </div>
            }
        
        </div>
        <div className="text-center pb-5">
            <button className="btn btn-success" onClick={()=>{window.print()}}>Print</button>
        </div>
        </>

        
        
    )
}