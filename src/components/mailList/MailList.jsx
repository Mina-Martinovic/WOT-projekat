import "./MailList.css"

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">It's all in the details!</h1>
            <span className="mailDesc">Sign up and we'll make sure you get the best deals</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default MailList