function Universe() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className='text-center text-muted'>
                <h1 className='mb-4'>The zerodha Universe</h1>
                <p className='mb-4'>Extend your trading and investment experience even further with our partner platforms
                </p>
                <div className="row text-center text-muted mt-5" style={{padding:'0 8%'}}>
                    <div className="col-4">
                        <img src="media/images/zerodhaFundhouse.png" alt="zerodhafundhouse" 
                        style={{width:'70%'}} className='mb-4'/>
                        <p style={{fontSize:'14px',padding:'0 8%'}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </div>
                    <div className="col-4 mt-4">
                        <img src="media/images/sensibullLogo.svg" alt="zerodhafundhouse" 
                        style={{width:'70%'}} className='mb-4'/>
                        <p style={{fontSize:'13px',padding:'0 8%'}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className="col-4">
                        <img src="media/images/goldenpiLogo.png" alt="zerodhafundhouse" 
                        style={{width:'70%'}} className='mb-4'/>
                        <p style={{fontSize:'14px',padding:'0 8%'}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    </div>
                </div>
                <div className="row text-center text-muted mb-5" style={{padding:'0 8%'}}>
                    <div className="col-4">
                        <img src="media/images/streakLogo.png" alt="zerodhafundhouse" 
                        style={{width:'60%'}} className='mb-4'/>
                        <p style={{fontSize:'14px',padding:'0 8%'}}>Systematic trading platformthat allows you to create and backtest strategies without coding.</p>
                    </div>
                    <div className="col-4 mt-4">
                        <img src="media/images/smallcaseLogo.png" alt="zerodhafundhouse" 
                        style={{width:'70%'}} className='mb-4'/>
                        <p style={{fontSize:'13px',padding:'0 8%'}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </div>
                    <div className="col-4">
                        <img src="media/images/dittoLogo.png" alt="zerodhafundhouse" 
                        style={{width:'50%'}} className='mb-4 mt-4'/>
                        <p style={{fontSize:'14px',padding:'0 8%'}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    </div>
                </div>
                <button className='btn btn-primary mb-5'><span>Sign up for free</span></button>
            </div>
        </div>
     );
}

export default Universe;