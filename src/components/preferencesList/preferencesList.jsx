import "./preferencesList.css"

const PreferencesList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img src="https://info365.xyz/wp-content/uploads/2021/09/vikendice.jpeg" alt="" className="pListImg" />
                <div className="pListImgTitles">
                    <h1>Modern</h1>
                    <h2>63 properties</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.apartmanivikendice.com/images/smestaj/galerija-vikendice-aleksandrija-01.jpg" alt="" className="pListImg" />
                <div className="pListImgTitles">
                    <h1>Rustic</h1>
                    <h2>134 properties</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://zadovoljna.nova.rs/wp-content/uploads/2022/04/22/1650626006-profimedia-0153852900-750x455.jpg" alt="" className="pListImg" />
                <div className="pListImgTitles">
                    <h1>Family</h1>
                    <h2>156 properties</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://www.gradnja.rs/wp-content/uploads/2022/02/4-casa-dolce-vita-luksuzna-vikendica-iznajmljivanje-novi-sad-gradnja.rs_.jpg" alt="" className="pListImg" />
                <div className="pListImgTitles">
                    <h1>Lux</h1>
                    <h2>17 properties</h2>
                </div>
            </div>
        </div>
    )
}

export default PreferencesList