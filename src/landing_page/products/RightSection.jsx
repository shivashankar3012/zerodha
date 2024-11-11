function RightSection({imgUrl, productTitle, productDescription, learnMore}) {
    return ( 
        <div className="container special" >
            <div className="row text-muted">
                <div className="col-4 mt-5">
                    <h1 className='mb-4'>{productTitle}</h1>
                    <p className='fs-5'>{productDescription}</p>
                    <a href={learnMore} className='rightcls'><span>Learn More →</span></a>
                </div>
                <div className="col-1"></div>
                <div className="col-7">
                    <img src={imgUrl} alt="Console" />
                </div>
            </div>
        </div>
     );
}

export default RightSection;