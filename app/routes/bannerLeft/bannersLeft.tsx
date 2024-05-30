import {Links, Meta, Scripts, ScrollRestoration, useLoaderData} from "@remix-run/react";

export default function bannersLeft(){

    return(
        <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Meta/>
                <Links/>
            </head>
            <body>
            <link href="./app/css/bannerLeft/bannerLeft.css" rel="stylesheet"/>
                <div className = "bannerLeft">
                    <h2>Filtros</h2>
                    <form>
                        <input type="checkbox" id="F1" value="F1"/>
                        <label htmlFor="F1">F1</label><br/>

                        <input type="checkbox" id="F2" value="F2"/>
                        <label htmlFor="F2">F2</label><br/>

                        <input type="checkbox" id="F3" value="F3"/>
                        <label htmlFor="F3">F3</label><br/>

                    </form>
                </div>
            <ScrollRestoration/>
            <Scripts/>
            </body>
        </html>
    )
}