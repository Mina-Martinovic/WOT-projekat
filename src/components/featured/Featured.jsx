import "./Featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2019/06/24104538/Belgrade-Night-Panorama.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Beograd</h1>
                    <h2>375 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://ychef.files.bbci.co.uk/960_540/p0btlr60.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Novi Sad</h1>
                    <h2>96 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://www.turizamuzica.org.rs/wp-content/uploads/2015/01/tara-38-1024x683.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Tara</h1>
                    <h2>178 properties</h2>
                </div>
            </div>
          
            
            
        </div>
    )
}

export default Featured