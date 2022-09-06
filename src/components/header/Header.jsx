import { faCalendarDays, faFaceAngry, faPaste, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faBed, faBicycle, faBuildingColumns, faCampground, faCar, faHouseMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css"
import { DateRange } from 'react-date-range';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false) //kako ne bi pri pocetnom ekranu videli odmah otvoren kalendar dole isto promenjeno
    const [destination, setDestination] = useState(""); /*prvo je empty string ali kad god se promeni input menja se i state*/
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false); /*ovo je za menajnje br osoba dece i soba*/
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        rooms: 2,
    });

    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev, [name]: operation === "inc" ? options[name] + 1 : options[name] - 1   /*uporedjujem prvo name u arrayu ce naci ime dal je adult child il room zatimimam uslov ovo da je operacija bas increase ako jeste uvecace broj onong name-a tj objekta koji je pronadjen a ako je razlicito od toga onda ce ga umanjiti, a prev mi je previous state tog mog obelezja tj ako nista jos nismo uneli onda je to pocetno stanje a to je da je audlt 1 child 0 a rooms 2 */
            };
        });
    };

    const handleSearch = () => {
        navigate("/cabins", { state: { destination, date, options } });
    };

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerConatiner"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faHouseMedical} />
                        <span>Facilities</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCampground} />
                        <span>Campground</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBuildingColumns} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBicycle} />
                        <span>Bike rentals</span>
                    </div>
                </div>
                {type !== "list" && /*ovo znaci da se ovo dole nece prikazati u local3000/cabins prozoru nego u home kao prozoru */
                    <>
                        <h1 className="headerTitle">Looking for an escape from all the city madness? We're open!</h1>
                        <p className="headerDescription">
                            Enjoy being a part of our big family - get discounts up to 15% all around the globe with a free Siestabooking account
                        </p>
                        <button className="headerBtn">Sign in / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input type="text"
                                    placeholder="Where to?"
                                    className="headerSearchInput"
                                    onChange={e => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                                {openDate && (<DateRange /* && znaci is true, ovo gore onclick znaci da se kalendar pojavi kad kliknemo ovo ! je opposite od opendate ako je true bice false itd ako nema ga kliknem pojavice se ako opet klknem nestace */
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                    minDate={new Date()}
                                />
                                )}
                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPenToSquare} className="headerIcon" />
                                <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult · ${options.children} children · ${options.rooms} rooms`} </span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button disabled={options.adult <= 1}
                                                className="optionCounterButton" onClick={() => handleOption("adult", "neg")}>-</button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("adult", "inc")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button disabled={options.children <= 0}
                                                className="optionCounterButton" onClick={() => handleOption("children", "neg")}>-</button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("children", "inc")}>+</button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Rooms</span>
                                        <div className="optionCounter">
                                            <button disabled={options.rooms <= 2}
                                                className="optionCounterButton" onClick={() => handleOption("rooms", "neg")}>-</button>
                                            <span className="optionCounterNumber">{options.rooms}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption("rooms", "inc")}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={handleSearch}>Search</button>
                            </div>
                        </div> </>}
            </div>
        </div>

    );
};

export default Header;