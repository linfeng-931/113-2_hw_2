import Header from '../components/Header'
import Menu from '../components/Menu'
import Table from "../components/Table"
import Plastic_Intro from "../components/Plastic_Intro"
import Animal_Intro from "../components/Animal_Intro"
import Data_Intro from "../components/Data_Garbage"
import News_Intro from "../components/News_Intro"
import More from '../components/More'
import Footer from "../components/Footer";

function Fishing_Net(){
    return(
        <>
            <>
            <Header/>
            <Menu/>
            <Table/>
            <main>
                <Plastic_Intro/>
                <Animal_Intro/>
                <Data_Intro/>
                <News_Intro/>
                <More/>     
            </main>
            <Footer/>
            </>
        </>
    )
}
export default Fishing_Net;