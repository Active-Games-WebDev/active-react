import {
    Links,
    Link,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import type {LinksFunction} from "@remix-run/node";

// @ts-ignore
import Header from './app/routes/header.tsx';
// @ts-ignore
import GalleryBoxes from './app/routes/gallery/galleryBoxes.tsx';
//@ts-ignore
import BannersLeft from './app/routes/bannerLeft/bannersLeft.tsx';
//@ts-ignore
import BannersRight from './app/routes/bannerRight/bannersRight.tsx';
export default function App() {
    return(
        <html lang="en">
        <link href="./app/css/horizontalScrollbarRes.css" rel="stylesheet"/>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/pure-min.css"
                  integrity="sha384-X38yfunGUhNzHpBaEBsWLO+A0HDYOQi8ufWDkZ0k9e0eXz/tH3II7uKZ9msv++Ls"
                  crossOrigin="anonymous"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css"/>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            .
            <Meta/>
            <Links/>
        </head>
        <body>
        <Header/> {/*const header*/}

        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    )
}
