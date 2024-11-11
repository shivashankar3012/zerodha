import "./Style.css"
function Hero() {
    return ( 
        <div className='supportHero mb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-7 p-5 mb-5">
                        <h4 className='mb-4'>Support Portal</h4>
                        <h4 className='mb-4 mt-5'>Search for an answer or browse help topics to create a ticket</h4>
                        <div className="input-group mt-5 mb-3">
                            <input className="form-control me-2 p-2" type="search" id='floatingInput' placeholder="Eg: how do i activate F&O, why is my order getting rejected...." aria-label="Search"></input>
                            <label for="floatingInput" className='px-1 my-auto fs-3'><i class="fa-solid fa-magnifying-glass"></i></label>
                        </div>
                        <a href="" className='fs-6 ' style={{marginRight:'4%'}}>Track account opening</a>
                        <a href="" style={{marginRight:'4%'}}>Track Segment activation</a>
                        <a href="">Intraday margin</a><br />
                        <a href="">Kite user manual</a>
                    </div>
                    <div className="col-5 p-5">
                        <a href="" className='fs-4 mb-5 p-0'>Track tickets</a>
                        <h4 className='mt-5'>Features</h4>
                        <p>Funds addition is blocked for the equity segment from 8 PM to 12 midnight due to the upcoming quarterly settlement. <a href="">Read more.</a></p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;