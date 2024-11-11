function Awards() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="media/images/largestBroker.svg" alt="largestBroker" />
                </div>
                <div className="col-6 p-5 mt-3">
                    <h1>Largest Stock Broker in India</h1>
                    <p>2+ million zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row mt-5">
                        <div className="col-6">
                            <ul>
                                <li><p>Futures and options</p></li>
                                <li><p>Commodity derivaties</p></li>
                                <li><p>Currency derivaties</p></li>
                            </ul>
                        </div>
                        <div className="col-6 mb-3">
                            <ul>
                                <li><p>Stocks and IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. securities</p></li>
                            </ul>
                        </div>
                        <img src="media/images/pressLogos.png" alt="pressLogos" style={{width:'100%'}}/>
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Awards