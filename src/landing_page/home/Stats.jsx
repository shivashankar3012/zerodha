function Stats() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-5">
                    <h1 className="mb-5 fs-2">Trust with confidence</h1>
                    <h5 className="fs-4" style={{color:"GrayText"}}>Customer-first always</h5>
                    <p className="mb-4 text-muted">That's why 1.5+ crore customers trust zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <h5 className='fs-4' style={{color:"GrayText"}}>No spam or gimmicks</h5>
                    <p className="mb-4 text-muted" style={{fontSize:'1rem'}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h5 className='fs-4' style={{color:"GrayText"}}>The zerodha universe</h5>
                    <p className="mb-4 text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h5 className='fs-4' style={{color:"GrayText"}}>Do better with money</h5>
                    <p className="mb-4 text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className="col-7">
                    <img src="media/images/ecosystem.png" alt="ecosystem" style={{width:'100%'}} />
                    <div className="text-center" >
                        <a href="" className="mx-5" style={{textDecoration:'none'}}>Explore our products  <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href="" style={{textDecoration:'none'}}>Try Kite demo</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;