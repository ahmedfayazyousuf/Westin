// import logo2 from '../Styles&Assets/logo2.png';
import logo from '../Styles&Assets/logo.png';
import logo2 from '../Styles&Assets/logo2.png';
import '../Styles&Assets/style.css';

const Rajdeep = () =>{

    return(
        <div  className='back' style={{display:"flex", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center"}}>

            <div className="mainer">

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                    <img style={{width: '200px', marginTop: '50px'}} src={logo2} alt="Employee Logo"/>
                </div>

                <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}> 
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: '460px', marginTop: '10px'}}>
                        <p style={{color: 'black', margin: '15px', fontSize: '20px', fontWeight: '900'}}>RAJDEEP KAUR, ARM <span style={{fontSize: '10px', verticalAlign: 'super', marginLeft: '-4px'}}>®</span></p>
                        <p style={{color: 'black', fontSize: '16px', fontWeight: '300', fontStyle: 'italic', marginTop: '-15px'}}>Administration Manager</p>
                        <p style={{color: 'black', fontSize: '16px', fontWeight: '300', marginTop: '5px'}}>ORN: 32133</p>
                        <p style={{color: 'black', margin: '5px', fontSize: '14px'}}>Empire Arabia Real Estate Developers LLC<br></br>Westin Arabia Real Estate LLC<br></br>Sheikh Zayed Road - Business Bay,<br></br>Burlington Tower, 23rd Floor,<br></br>P.O. Box 118495, Dubai<br></br>United Arab Emirates<br></br><a href="https://empirearabia.com/" style={{color: 'black'}}>EmpireArabia.com</a><br></br><a href="https://westinarabia.com/" style={{color: 'black'}}> WestinArabia.com</a></p>
                        
                        <p style={{color: 'black', margin: '2px', fontSize: '14px'}}><a href="tel:971502838686" style={{color: 'black'}}>+971 50 283 8686</a><br></br><a href="tel:044573296" style={{color: 'black'}}>+971 4 457 3296</a></p>

                        <div style={{width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <p style={{color: 'black', marginTop: '25px', fontSize: '14px'}}><a href="mailto:rajdeep.kaur@empirearabia.com" style={{color: 'black'}}>rajdeep.kaur@empirearabia.com</a></p>
                            <p style={{color: 'black', marginTop: '-10px', fontSize: '14px'}}><a href="mailto:rajdeep.kaur@westinarabia.com" style={{color: 'black'}}>rajdeep.kaur@westinarabia.com</a></p>
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

export default Rajdeep