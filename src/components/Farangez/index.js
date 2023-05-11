// import logo2 from '../Styles&Assets/logo2.png';
import logo from '../Styles&Assets/logo.png';
import whatstele from '../Styles&Assets/whatstele.png';
import Email from '../Styles&Assets/Email.png';
import Farangezz from '../Styles&Assets/Farangez.png';
import '../Styles&Assets/style.css';

const Farangez = () =>{

    return(
        <div  className='back' style={{display:"flex", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center"}}>

            <div className="mainer">

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                    <img style={{height: '180px', marginTop: '50px'}} src={Farangezz} alt="Employee Logo"/>
                </div>

                <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}> 
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: '460px', marginTop: '10px'}}>
                        <p style={{color: 'black', margin: '15px', fontSize: '20px', fontWeight: '900'}}>FARANGEZ SAIDAKBAROVA</p>
                        <p style={{color: 'black', fontSize: '16px', fontWeight: '300', fontStyle: 'italic', marginTop: '-15px'}}>Sales Agent</p>
                        <p style={{color: 'black', margin: '15px', fontSize: '14px'}}>Westin Arabia Real Estate LLC | ORN: 32133<br></br>Sheikh Zayed Road - Business Bay,<br></br>Burlington Tower, 23 Floor,<br></br>Office No. 2312 - 2316,<br></br>P.O. Box 118495, Dubai<br></br>United Arab Emirates | WestinArabia.com</p>
                        
                        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{width: '50%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <img style={{height: '30px'}} src={whatstele} alt="Westin Logo"/>
                            </div>

                            <div style={{width: '50%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <p style={{color: 'black', margin: '15px', fontSize: '14px'}}>971 50 183 1085<br></br>04 457 3296</p>
                            </div>
                        </div>

                        <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '-20px'}}>
                            <div style={{width: '30%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <img style={{height: '30px'}} src={Email} alt="Westin Logo"/>
                            </div>

                            <div style={{width: '70%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                                <p style={{color: 'black', margin: '15px', fontSize: '14px'}}>farangez.s@westinarabia.com</p>
                            </div>
                        </div>

                        
                    </div>

                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '150px'}}>
                    <img style={{width: '200px'}} src={logo} alt="Westin Logo"/>
                </div>

            </div>

        </div>
    )
}

export default Farangez