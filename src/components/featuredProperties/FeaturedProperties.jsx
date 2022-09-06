import "./FeaturedProperties.css"

const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img src="https://www.gradnja.rs/wp-content/uploads/2022/02/2-22-22-House-cenej-novi-sad-vikendica-iznajmljivanje-gradnja.rs_.jpg" alt="" className="fpImg" />
                <span className="fpName">22:22 House</span>
                <span className="fpCity">Čenej, Novi Sad</span>
                <span className="fpPrice">Starting from 78€</span>
                <div className="fpRating">
                    <button>8.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://www.gradnja.rs/wp-content/uploads/2022/02/3-riverside-poll-villa-sremski-karlovci-vikendica-iznajmljivanje-gradnja.rs_.jpg" alt="" className="fpImg" />
                <span className="fpName">Riverside Pool Vila</span>
                <span className="fpCity">Sremski Karlovci, Novi Sad</span>
                <span className="fpPrice">Starting from 91€</span>
                <div className="fpRating">
                    <button>9.2</button>
                    <span>Exceptional</span>
                </div>
            </div>

            <div className="fpItem">
                <img src="https://www.apartmanivikendice.com/images/smestaj/villa-suburbia-01.jpg" alt="" className="fpImg" />
                <span className="fpName">Vila Suburbia</span>
                <span className="fpCity">Beograd</span>
                <span className="fpPrice">Starting from 109€</span>
                <div className="fpRating">
                    <button>9.6</button>
                    <span>Magnificient</span>
                </div>
            </div>


        </div>


    )
}

export default FeaturedProperties