function Education() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="" />
                </div>
                <div className="col-6 mt-5 text-muted">
                    <h3 className="mb-5">Free and open market education</h3>
                    <p className="mb-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" className="fs-5" style={{textDecoration:'none'}}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className="mb-3 mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" className="fs-5 mb-5" style={{textDecoration:'none'}}>TradingQ&A  <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;