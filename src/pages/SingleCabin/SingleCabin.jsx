import "./SingleCabin.css"
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
  } from "@fortawesome/free-solid-svg-icons";

const SingleCabin = () => {

    const[slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://www.apartmanivikendice.com/images/smestaj/casa-dolce-vita-31.jpg",
        },
        {
            src: "https://www.apartmanivikendice.com/images/smestaj/casa-dolce-vita-46.jpg",
        },
        {
            src: "https://www.apartmanivikendice.com/images/smestaj/casa-dolce-vita-38.jpg",
        },
        {
            src: "https://www.apartmanivikendice.com/images/smestaj/casa-dolce-vita-43.jpg",
        },
        {
            src: "https://www.apartmanivikendice.com/images/smestaj/casa-dolce-vita-32.jpg",
        },
        {
            src: " https://www.apartmanivikendice.com/images/smestaj/casa-dolce-vita-48.jpg",
        },
        {
            src: " https://www.apartmanivikendice.com/images/smestaj/casa-dolce-vita-44.jpg",
        },
    ];
    
    const handleOpen= (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove= (direction) => {
        let newSlideNumber;

        if(direction==="l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1 //ako ej slidenumber 0 otici ce na 5 jer je to sesta slika poslednja pa ide u krug a ako nije nula onda ce se umanjiti za 1 samo 
        } else{
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
        }

        setSlideNumber(newSlideNumber)
    }

    return (
        <div>
            <NavBar />
            <Header type="list" />
            <div className="cabinContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("l")} />
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")}/>
                </div>}
                <div className="cabinWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="cabinTitle">Lux house</h1>
                    <div className="cabinAddress">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Alibegovac 102b, Novi Sad</span>
                    </div>
                    <span className="cabinDistance">
                        Great location - 7km from city center
                    </span>
                    <span className="cabinPriceHighlight">
                        Book a 2-day stay at this property and get a 50% discount on a local taxi ride
                    </span>
                    <div className="cabinImages">
                        {photos.map((photo,i) => (
                            <div className="cabinImgWrapper"> 
                                <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="cabinImg" />  
                            </div> //onClick event is gonna update our state and give its index
                        ))}
                    </div>
                    <div className="cabinDetails">
                        <div className="cabinDetailsTexts">
                            <h1 className="cabinTitle">Enjoy the peace of Novi Sad</h1>
                            <p className="cabinDesc">
                                Lux kuća "Casa Dolce Vita" Alibegovac - Novi Sad, sagrađena 2020. godine, namenski pravljena za dečije rođendane, devojačke večeri, proslave na otvorenom, mini moderne svadbe i team building-e(u objektu nije dozvoljena proslava 18-ih rodjendana!!!). Plac se prostire na 1200m2, dok sama kuća ima 120m2.
                                Sadržaji:

                                Kuća
                                - Kuća sa tri spavaće sobe sa tri bračna kreveta, dva preklopna ležaja i dečijom kolevkom. - Toalet unutar kuće sa Walk in tušem i tuš ružom. Dnevna soba sa kožnom ugaonom garniturom. Kuhinja u sklopu dnevne sobe sa svim neophodnim elementima. Podno grejanje u celom objektu - Multi split inverterske klime u svim sobama - Internet, kablovska, WiFi.


                                Dvorište
                                - Bazen, dimenzija 10x5 metara, dubine 160 cm. Jacuzzi, dimenzije 2mx1,5m za 4 osobe. Dečije igralište, Fire pit – sa 16 sedećih mesta, Saletla sa 4 sedeća mesta, Roštilj sa letnjom kuhinjom. Letnji šank pogodan za barmena. Spoljni toalet, Spoljni tuš. Terasa tj. ravan krov iznad objekta sa 20 sedećih mesta sa pogledom na dvorište. Veranda sa 12 sedećih mesta.


                                Parking
                                - Ispred objekta 8 parking mesta - Unutar objekta 2 parking mesta.


                                Kuća idealna za dečije rođendane, proslave do 50 ljudi na otvorenom, devojačke večeri, team building-e, vaše poslovne partnere koji zahtevaju luksuz, privatnost i komfor kuće, mini moderne svadbe.
                            </p>

                        </div>
                        <div className="cabinDetailsPrice">
                            <h1>Perfect for a weekend getaway!</h1>
                            <span>
                                Located in the suburbian area of Novi Sad, this property is very popular for gatherings!
                            </span>
                            <h2>
                                <b>126€</b> (per night)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}
export default SingleCabin // tacno odredjena vikendica neka