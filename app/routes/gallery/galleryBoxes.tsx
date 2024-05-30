import {Links, Meta, Scripts, ScrollRestoration, useLoaderData} from "@remix-run/react";
import {Form} from "@remix-run/react";
import {json} from "@remix-run/node";
import type {FunctionComponent, JSXElementConstructor, ReactElement, ReactNode, ReactPortal} from "react";

//@ts-ignore
import database from './database/testData.json';

export default function GalleryBoxes() {
    const prodDatabase = database.members.map((product: { prodCode: string; pictureSrc: string; prodName: string; prodGame: string; prodStock: string;  prodPrice: string ; }) =>

        <div>
            <div className="galleryElement" id={product.prodCode}>
                <a target="_blank" href="#">
                    <img src={product.pictureSrc} alt="kittens4" width="200" height="auto"
                         id={product.prodCode}/>
                </a>
                <div className="prodInfo">
                    <p id="prodTitle">{product.prodName}</p>
                    <p id="prodGame">{product.prodGame}</p>
                    <p id="prodStock">{product.prodStock}</p>
                    <p id="prodPrice">{product.prodPrice}</p>
                </div>

            </div>


        </div>
    );

    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body>

        <div className="landingBody">
            <link href="./app/css/gallery/galleryStyler.css" rel="stylesheet"/>
            <div className="galleryShopContainer">
                {prodDatabase}
            </div>

        </div>
        <ScrollRestoration/>
        <Scripts/>
        </body>
        </html>
    )
}