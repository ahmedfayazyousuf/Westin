import logo2 from '../Styles&Assets/logo2.png';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import firebase from '../../firebase';
import '../Styles&Assets/style.css';
import logo from '../Styles&Assets/logo.png';

const Guest = () =>{

    const history = useNavigate();

    const [select, setSelect] = useState('')

    // eslint-disable-next-line
    let firstname, value, gender;

    // eslint-disable-next-line
    function onlyOnetwo(e) {
        var checkm = document.getElementById('checkmd');
        var checkf = document.getElementById('checkfd');
        // checkm.checked = !checkm.checked 
        // checkf.checked = !checkf.checked 
        // console.log(checkbox)

        if(e === 'm'){
            console.log("lol")
            
            checkf.checked = false
            
            firstname = "gender";
            value = "Male";

            setSelect(value)
    
        }

        if(e === 'f'){
            console.log("lil")
            
            checkm.checked = false
            firstname = "gender";
            value = "Female";
            setSelect(value)
            
        }



    }

    function handleSubmit(){

        const Users = firebase.firestore().collection("Guest");

        const name = document.getElementById('Name').value
        const email = document.getElementById('email').value
        const number = document.getElementById('no').value
        // const Gender = document.getElementById('work').value
        // eslint-disable-next-line
        const type = "Guest"

        var length = document.getElementById("Name").value.length
        var validRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if (document.getElementById("Name").value === "" ||  length < 3)
        {
            document.getElementById("error").innerHTML = "PLEASE ENTER A VALID NAME"
            return;
        }

        if (document.getElementById("email").value === "" || document.getElementById("email").value.match(!validRegex))
        {
            document.getElementById("error").innerHTML = "PLEASE ENTER A VALID EMAIL"
            return;
        }

        // if (document.getElementById("work").value === "")
        // {
        //     document.getElementById("error").innerHTML = "PLEASE SELECT A GENDER"
        //     return;
        // }

        if (document.getElementById("no").value === "" || document.getElementById("no").value.length > 13 || document.getElementById("no").value.length < 9)
        {
            document.getElementById("error").innerHTML = "PLEASE ENTER A VALID PHONE NUMBER";
            return;
        }

        else{
            Users.add({
                Name:name,
                Email:email,
                Number:number,
                // Gender:Gender
            })
            console.log(name,email,number,select)
            history("/success");

            fetch('https://geelyrsvpserver.azurewebsites.net/send_mail', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({ 
                    // name: name doesnt need to be written because its the same name
                    type,email
                })
            })
        }
    
    }

    return(
        <>
            <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                        <img style={{width: '320px'}} src={logo} alt="Geely Logo"/>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom:'10px'}}>
                        <h1 className="header" >REGISTRATION FORM</h1>
                    </div>

                    <div className="inputdiv">
                        <input type="text" placeholder='NAME' id="Name" style={{textAlign: 'center', background:"transparent", border:"1px solid black", marginBottom:'15px', width:"100%", height:'35px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white'}}/> 
                    </div>
                    
                    <div className="inputdiv">
                        <input type="email" placeholder='EMAIL' id='email' style={{textAlign: 'center',background:"transparent", border:"1px solid black", marginBottom:'15px', width:"100%", height:'35px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
                    </div>

                    {/* <div className="inputdiv2">
                        <select name="work" id="work" type="text" required style={{textAlign: 'center',background:"transparent", border:"1px solid black", marginBottom:'15px', width:"100%", height:'37px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }}>
                            <option selected disabled value="">GENDER</option>
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                        </select>
                    </div> */}

                    <div className="inputdiv">
                        <input  type="number" placeholder='971 xx xxx xxxx' id='no' style={{textAlign: 'center', background:"transparent", border:"1px solid black", width:"100%", height:'35px', color:"black", paddingLeft: '10px', paddingRight: '10px', backgroundColor: 'white' }} />
                    </div>

                    <div style={{width: '300px', height: '20px', padding: '0', margin: '0'}}>
                        <p id="error" style={{color: 'red', padding: '0', margin: '0', fontSize: '10px'}}></p>
                    </div>

                    <button onClick={handleSubmit} style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}}>
                        SUBMIT
                    </button>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                        <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Guest