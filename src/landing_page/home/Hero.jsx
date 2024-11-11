function Hero() {
    return ( 
        <div className="container p-5 text-center text-muted">
            <div className="row">
                <img src="media/images/homeHero.png" alt="homeHero" className="mb-5" />
                <h1 className="mt-5 mb-4">Invest in everything</h1>
                <p style={{fontSize:'larger'}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button style={{width:'20%',height:'3rem',margin:'auto'}} className="btn btn-primary mt-4 p-1 fs-5 mb-5">Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;