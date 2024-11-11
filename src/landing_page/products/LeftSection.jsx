function LeftSection({imgUrl, productTitle, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container special">
            <div className="row text-muted">
                <div className="col-7">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="col-1"></div>
                <div className="col-4  pt-5">
                    <h1 className="mb-4">{productTitle}</h1>
                    <p className="fs-5">{productDescription}</p>
                    <div >
                        <a href={tryDemo} className='leftcls' style={{marginRight:'22%'}}> 
                            <span>Try demo →</span></a>
                        <a href={learnMore}className='leftcls'><span>Learn More →</span></a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay} style={{marginRight:'10%'}}><img src="media/images/googlePlayBadge.svg" alt="googlePlayStore" /></a>
                        <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="appStore" /></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;