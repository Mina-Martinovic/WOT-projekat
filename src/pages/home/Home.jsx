
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import NavBar from "../../components/NavBar/NavBar";    
import PreferencesList from "../../components/preferencesList/preferencesList";
import "./home.css";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <div className="homeContainer">
                <Featured/>
                <h1 className="homeTitle">Browse by preferences</h1>
                <PreferencesList/>
                <h1 className="homeTitle">Properties guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
         </div>
    );
};
export default Home; //pravim funkciju gore kako bih imala home na home pageu, pozivam funkciju home onda u ROute path elementu