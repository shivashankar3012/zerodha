function Team() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-5 text-center">
                    <img src="media/images/nithinKamath.jpg" alt="nithinKamath" style={{borderRadius:'50%', width:'65%', height:'65%',marginTop:'9%'}} />
                    <h4 className="mt-4">Nithin Kamath</h4>
                    <p className="mt-4">Founder CEO</p>
                </div>
                <div className="col-5 mr-5">
                    <h2 className="mb-5">People</h2>
                    <p className="mb-4">Nithin bootstrapped and founded zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, zerodha has changed the landscape of the Indian broking industry.</p>
                    <p className="mb-4">He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p className="mb-4">Playing basketball is his zen.</p>
                    <p className="mb-4">Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
     );
}

export default Team;