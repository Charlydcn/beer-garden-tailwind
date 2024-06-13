// ----------------------------------------------------------------------------------------------
// ----------------------------------------- img import -----------------------------------------
import headerBg from "../src/assets/img/header-bg.jpg";
import headerText from "../src/assets/img/header-text.png";
import bestBeer from "../src/assets/img/best-beer-tradition.png";
import barChairs from "../src/assets/img/bar-chairs.jpg";
import barTable from "../src/assets/img/bar-table.jpg";
import drinkBeer from "../src/assets/img/drink-beer.png";
import barDudes from "../src/assets/img/bar-dudes.jpg";
import barBeers from "../src/assets/img/bar-beers.jpg";
import barCounter from "../src/assets/img/bar-counter.jpg";
import barFriends from "../src/assets/img/bar-friends.jpg";
import grapeIcon from "../src/assets/img/grape.png";
import barrelIcon from "../src/assets/img/barrel.png";
import beerGlassIcon from "../src/assets/img/beer-glass.png";
import beerGlassBottleIcon from "../src/assets/img/beer-glass-bottle.png";
import footerLogo from "../src/assets/img/footer-logo.png";
// ----------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------
// ----------------------------------------- components ----------------------------------
import Nav from "./components/nav/Nav";
import BigArticle from "./components/articles/BigArticle";
import Button from "./components/Button";
import SmallArticle from "./components/articles/SmallArticle";
import HoverableImg from "./components/HoverableImg";
import GoogleMap from "./components/GoogleMap";
// ----------------------------------------------------------------------------------------------

function App() {
    return (
        <>
            <Nav />

            <header className="double-img-container h-screen">
                <img className="h-full w-screen object-cover" src={headerBg} alt="" />
                <img className="h-full object-scale-down max-w-[80vw]" src={headerText} alt="" />
            </header>

            <section className="bg-gold text-slate-100 text-2xl font-extrabold text-center py-20 md:text-4xl xl:text-6xl">
                <p className="flex items-center justify-center max-w-[90vw] mx-auto">
                    &quot;LOVE AND MAGIC HAVE A GREAT DEAL IN COMMON.. THEY
                    ENRICH THE SOUL, DELIGHT THE HEART. AND THEY BOTH TAKE
                    PRACTICE.&quot;
                </p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-4">
                <BigArticle
                    className="col-span-1 order-1 aspect-square lg:col-span-2"
                    title="BEER TRADITION"
                    smallText="Tons of shortcodes provide countless options"
                    text="Edge Themes give you everything you need to create an amazing website. Designed and built with care, filled
                        with creative elements and useful options, and completely user-friendly. Set up your website quickly
                        and with ease. From image galleries to various
                        interactive features you can mix and match all elements."
                    btn={<Button text="READ MORE"/>}
                />

                <div className="double-img-container aspect-square col-span-1 order-3 min-h-[50svh] lg:col-span-2 lg:order-2">
                    <img className="h-full w-full object-cover" src={barChairs} alt="" />
                    <img src={bestBeer} alt="" />
                </div>

                <div className="double-img-container aspect-square col-span-1 order-4 min-h-[50svh] lg:order-3 lg:col-span-2">
                    <img className="h-full w-full object-cover" src={barTable} alt="" />
                    <img src={drinkBeer} alt="" />
                </div>

                <BigArticle
                    className="col-span-1 order-3 aspect-square lg:order-4 lg:col-span-2"
                    title="PUB STORY"
                    smallText="Tons of shortcodes provide countless options"
                    text="Edge Themes give you everything you need to create an amazing website. Designed and built with care, filled
                        with creative elements and useful options, and completely user-friendly. Set up your website quickly
                        and with ease. From image galleries to various
                        interactive features you can mix and match all elements."
                    btn={<Button text="READ MORE"/>}
                />

                <div className="flex flex-wrap lg:flex-nowrap col-span-1 w-full lg:col-span-4 order-5">
                    <HoverableImg className="w-full" src={barDudes} />
                    <HoverableImg className="w-full" src={barBeers} />
                    <HoverableImg className="w-full" src={barCounter} />
                    <HoverableImg className="w-full" src={barFriends} />
                </div>
            </section>

            <section className="grid grid-cols-1 w-full py-10 max-w-[50rem] gap-8 justify-items-center sm:grid-cols-2 sm:w-11/12 sm:mx-auto xl:flex xl:max-w-screen-2xl xl:justify-center">
                <SmallArticle
                    className="col-span-2 md:col-span-1"
                    img={grapeIcon}
                    title="SETCH IS THE FIRST"
                    text="Lorem ipsum dolor sit amet, consectetur apidiscing elit. Etiam fermentum nulla tincidunt amet malesuada."
                />

                <SmallArticle
                    className="col-span-2 md:col-span-1"
                    img={barrelIcon}
                    title="SECOND CHANCE"
                    text="Lorem ipsum dolor sit amet, consectetur apidiscing elit. Etiam fermentum nulla tincidunt amet malesuada."
                />

                <SmallArticle
                    className="col-span-2 md:col-span-1"
                    img={beerGlassIcon}
                    title="TEST IT ALL"
                    text="Lorem ipsum dolor sit amet, consectetur apidiscing elit. Etiam fermentum nulla tincidunt amet malesuada."
                />

                <SmallArticle
                    className="col-span-2 md:col-span-1"
                    img={beerGlassBottleIcon}
                    title="REFRESH YOUR TIME"
                    text="Lorem ipsum dolor sit amet, consectetur apidiscing elit. Etiam fermentum nulla tincidunt amet malesuada."
                />
            </section>

            <section className="bg-parallax bg-fixed bg-no-repeat bg-cover bg-right h-80 text-gray-50 flex items-center justify-center flex-col gap-4">
                <h3 className="text-4xl text-center md:text-6xl">THIS IS OUR OFFER</h3>
                <p className="times-new text-lg italic text-center max-w-[80%]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Earum in quibusdam veniam ratione adipisci?
                </p>
            </section>

            <footer className="relative">
                <div className="relative">
                    <GoogleMap
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.712649398462!2d7.7459198761867585!3d48.55789807129299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c9da44b3eb1f%3A0xbecc22aa6cf3a756!2sElan%20Formation%20202%20avenue%20de%20Colmar!5e0!3m2!1sfr!2sfr!4v1718282372900!5m2!1sfr!2sfr"
                        className="w-full h-screen pointer-events-none grayscale invert"
                    />
                    <div className="w-full h-full absolute top-0 bg-custom-gradient"></div>
                </div>
                <img className="absolute bottom-10 left-1/2" src={footerLogo} alt=""/>
            </footer>
        </>
    );
}

export default App;
