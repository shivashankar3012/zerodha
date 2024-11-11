import "./CreateTicket.css"
function CreateTicket() {
    return ( 
        <div className="container create mt-5 text-muted ">
            <h4 className='mb-4'>To create a ticket, select a relevant topic</h4>
            <div className="row mt-5 ">
                <div className="col">
                    <h3 className='mb-4'>Account Opening</h3>
                    <a href="">Getting started</a><br />
                    <a href="">Online</a><br />
                    <a href="">Offline</a><br />
                    <a href="">Charges</a><br />
                    <a href="">Company, Partnership and HUF</a><br />
                    <a href="">Non Resident Indian (NRI)</a><br />
                </div>
                <div className="col">
                <h3 className='mb-4'>Your zerodha Account</h3>
                    <a href="">Login credentials</a><br />
                    <a href="">Your Profile</a><br />
                    <a href="">Account modification and segment addition</a><br />
                    <a href="">CMR & DP ID</a><br />
                    <a href="">Nomination</a><br />
                    <a href="">Transfer and conversion of shares</a><br />
                </div>
                <div className="col">
                <h3 className='mb-4'> Trading and Markets</h3>
                    <a href="">Trading FAQs</a><br />
                    <a href="">Kite</a><br />
                    <a href="">Margins</a><br />
                    <a href="">Product and order types</a><br />
                    <a href="">Corporate actions</a><br />
                    <a href="">Kite features</a><br />
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col">
                    <h3 className='mb-4'>Funds</h3>
                    <a href="">Fund withdrawal</a><br />
                    <a href="">Adding funds</a><br />
                    <a href="">Adding bank accounts</a><br />
                    <a href="">eMandates</a><br />
                </div>
                <div className="col">
                <h3 className='mb-4'>Console</h3>
                    <a href="">IPO</a><br />
                    <a href="">Portfolio</a><br />
                    <a href="">Funds statement</a><br />
                    <a href="">Profile</a><br />
                    <a href="">Reports</a><br />
                    <a href="">Referral program</a><br />
                </div>
                <div className="col">
                <h3 className='mb-4'>Coin</h3>
                    <a href="">Understanding mutual funds and Coin</a><br />
                    <a href="">Coin app</a><br />
                    <a href="">Coin web</a><br />
                    <a href="">Transactions and reports</a><br />
                    <a href="">National Pension Scheme (NPS)</a><br />
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;