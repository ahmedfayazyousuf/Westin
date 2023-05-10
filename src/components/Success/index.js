import '../Styles&Assets/style.css';
import logo from '../Styles&Assets/logo.png';
import logo2 from '../Styles&Assets/logo2.png';
import tick from '../Styles&Assets/tick.png';

const Success = () =>{

    return(
        <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>

            <div style={{display: 'flex', flexDirection: 'column', width: '40%', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                    <img style={{width: '320px'}} src={logo} alt="Geely Logo"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw'}}>
                    <h1 className="header" >SUCCESSFUL</h1>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginTop: '-20px'}}>
                    <p style={{color: 'white'}}>Thank you for providing your details. <br></br>You will receive a confirmation email with a QR code and location pin shortly.</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80vw', marginTop: '-20px'}}>
                    <p style={{color: 'white', fontStyle:'italic', fontSize: '12px'}}>Kindly check your spam folder should you not receive the email within 5 minutes</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <img style={{width: '130px', marginTop: '30px'}} src={tick} alt="Geely Logo"/>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                    <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
                </div>

            </div>
        </div>
    )
}

export default Success