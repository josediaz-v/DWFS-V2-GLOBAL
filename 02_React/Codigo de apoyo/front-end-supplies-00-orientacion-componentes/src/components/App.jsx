import React from "react";
import MainContent from "./MainContent/MainContent.jsx";
import Footer from "./Footer/Footer.jsx";
import Menu from "./Menu/Menu.jsx";
import MainContentFragmentExplicito from "./MainContent/MainContentFragmentExplicito.jsx";
import MenuProps from "./Menu/MenuProps.jsx";
import MainContentFragmentImplicito from "./MainContent/MainContentFragmentImplicito.jsx";
import Select from "./Select/Select.jsx";

export default function App() {

    return (
        <div className="app-layout">

            { /*<Navbar/> */}
            <MenuProps backgroundColor="red"/>
            {/*{<MenuPropsDestructuring backgroundColor="orange"/>}*/}

            {  /* <PageLayout/> */ }
            { /* <MainContentFragmentExplicito/> */}
            { <MainContentFragmentImplicito/> }
            {/*{<Extra backgroundColor="bg_red" textColor="text_orange" textSize="large"/> }*/}
            {<Select/> }
            <Footer/>
        </div>
    );
}