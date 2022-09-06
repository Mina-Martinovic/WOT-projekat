import "./SearchItem.css"

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://www.apartmanivikendice.com/images/smestaj/casa-dolce-vita-01-24014994.jpg"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Casa Dolce Vita</h1>
                <span className="siDistance">7km from city center</span>
                <span className="siParkingOp">8 outside parking spots + 2 inside</span>
                <span className="siSubtitle">
                    Lux house, 120m2
                </span>
                <span className="siFeatures">
                    For events • property area 1200m2 • 3 bedrooms with 3 king beds 
                </span>
                <span className="siCancelOp">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    Cancel anytime, but first make sure to lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailText">
                    <span className="siPrice">112€</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    )
}

export default SearchItem