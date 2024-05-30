import {
    Links,
    Link,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import type {LinksFunction} from "@remix-run/node";
import dropdownStyles from "./app/css/dropdown.css";
import headerStyling from "./app/css/logoStyler.css";

{/*
export const links: LinksFunction = () => [
    {rel: "stylesheet", href: dropdownStyles},
    {rel: "stylesheet", href: headerStyling},
];
*/}

export default function Header() {
    return(
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
            {
                //anton ttf
            }
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>

            {
                //avenir light
            }

            <link href="./app/resources/fonts/Avenir-Light.ttf" rel="font"/>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css"
                  integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls"
                  crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css"/>


        </head>
        <body>
        {/*header*/}
        <div className="pure-g" id="topnavHeader">
            {/*icon*/}
            <div className="pure-u-1 pure-u-lg-1-6 pure-u-md-1-3" id="icon">
                <link rel="stylesheet" type="text/css" href="./app/css/header/logoStyler.css"/>
                <img src="./app/resources/icons/logo-active-transp.svg" alt="Active Games Logo"/>
            </div>

            {/*searchbar*/}
            <div className="pure-u-1 pure-u-lg-1-6 pure-u-md-1-3" id="searchBar">
                <link rel="stylesheet" type="text/css" href="./app/css/header/searchBar.css"/>
                <form>
                    <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit">
                        <i className="" id="fa fa-search">
                            <img src="./app/resources/icons/icons8-search.svg" alt="searchIcon" id="searchIcon"/>
                        </i>
                    </button>
                </form>
            </div>




            <div className="pure-u-1 pure-u-lg-1-6 pure-u-md-1-3" id="separator">
            </div>

            {/*dropdowns*/}

            <div className="pure-u-1 pure-u-lg-1-6 pure-u-md-1-3" id="dropdown1">
                <link rel="stylesheet" type="text/css" href="./app/css/header/dropdown.css"/>
                <button className="dropbtn1">
                    Pokémon
                </button>
                <div className="pure-u-1 pure-u-lg-1-6 pure-u-md-1-3" id="dropdown-content1">
                    <a href="./app/routes/searchEngine/mainEngine.tsx?game=pokemon edition=SV6">Twilight Masquerade</a>{/*SV6*/}
                    <a href="./app/routes/searchEngine/mainEngine.tsx?game=pokemon edition=SV5">Temporal Forces</a>{/*SV5*/}
                    <a href="./app/routes/searchEngine/mainEngine.tsx?game=pokemon edition=SV4_5">Paldean Fates</a>{/*SV4.5*/}
                    <a href="./app/routes/searchEngine/mainEngine.tsx?game=pokemon edition=SV4">Paradox Rift</a>{/*SV4*/}
                    <a href="./app/routes/searchEngine/mainEngine.tsx?game=pokemon edition=SV3_5">151</a>{/*SV3.5*/}
                    <a href="./app/routes/searchEngine/mainEngine.tsx?game=pokemon edition=SV3">Obsidian Flames</a>{/*SV3*/}
                    <a href="./app/routes/searchEngine/mainEngine.tsx?game=pokemon edition=SV2">Paldea Evolved</a>{/*SV2*/}
                    <a href="./app/routes/searchEngine/mainEngine.tsx?game=pokemon edition=SV1">Scarlet & Violet</a> {/*SV1*/}
                </div>
            </div>

        </div>


        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    )
}
