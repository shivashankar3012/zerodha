function Pricing() {
    return ( 
        <div className="conatainer mt-5">
            <div className="row">
                <div className="col-5 p-5" style={{marginLeft:'4rem'}}>
                    <h1 className="text-muted">Unbeatable pricing</h1>
                    <p className="mb-4 text-muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div><a href="" className="fs-5" style={{textDecoration:'none'}}>See pricing  <i class="fa-solid fa-arrow-right-long"></i></a></div>
                </div>
                <div className="col-6 mt-4 p-3">
                    <div className="row" style={{width:'100%'}}>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                     <img src="media/images/pricingEquity.svg" alt="" style={{width:'10rem',height:'10rem',margin:'0',padding:'0'}} />
                                </div>
                                <div className="col">
                                    <p className="my-lg-5 text-muted" style={{fontSize:'15px', marginLeft:'1px'}}>Free account opening</p>
                                 </div>
                            </div>   
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <img src="media/images/pricingMF.svg" alt="" style={{height:'10rem',width:'10rem'}}/>
                                </div>
                                <div className="col">
                                    <p className="my-5 text-muted" style={{fontSize:'12px'}}> Free equity delivery and direct mutual funds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
     );
}

export default Pricing;