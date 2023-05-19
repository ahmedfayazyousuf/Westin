// import logo2 from '../Styles&Assets/logo2.png';
import logo from '../Styles&Assets/logo.png';
import whatstele from '../Styles&Assets/whatstele.png';
import Email from '../Styles&Assets/Email.png';
import logo2 from '../Styles&Assets/logo2.png';
import '../Styles&Assets/style.css';

const Farangez = () =>{

    return(
        <div  className='back' style={{display:"flex", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center"}}>

            <div className="mainer">

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
                    <img style={{width: '200px', marginTop: '50px'}} src={logo2} alt="Employee Logo"/>
                </div>

                <div style={{display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center'}}> 
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: '460px', marginTop: '10px'}}>
                        <p style={{color: 'black', margin: '15px', fontSize: '20px', fontWeight: '900'}}>ZAHID H. REHMAN</p>
                        <p style={{color: 'black', fontSize: '16px', fontWeight: '300', fontStyle: 'italic', marginTop: '-15px'}}>General Manager</p>
                        <p style={{color: 'black', margin: '15px', fontSize: '14px'}}>Empire Arabia Real Estate Developers LLC<br></br>Westin Arabia Real Estate LLC<br></br>Sheikh Zayed Road - Business Bay,<br></br>Burlington Tower, 23 Floor,<br></br>Office No. 2312 - 2316,<br></br>P.O. Box 118495, Dubai<br></br>United Arab Emirates | <a href="https://westinarabia.com/" style={{color: 'black'}}> WestinArabia.com</a></p>
                        
                        <p style={{color: 'black', margin: '15px', fontSize: '14px'}}><a href="tel:971501831085" style={{color: 'black'}}>+971 50 183 1085</a><br></br><a href="tel:044573296" style={{color: 'black'}}>+971 4 457 3296</a></p>

                        <div style={{width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                            <p style={{color: 'black', marginTop: '25px', fontSize: '14px'}}><a href="mailto:zahid.rehman@empirearabia.com" style={{color: 'black'}}>zahid.rehman@empirearabia.com</a></p>
                            <p style={{color: 'black', marginTop: '-10px', fontSize: '14px'}}><a href="mailto:zahid.rehman@westinarabia.com" style={{color: 'black'}}>zahid.rehman@westinarabia.com</a></p>
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