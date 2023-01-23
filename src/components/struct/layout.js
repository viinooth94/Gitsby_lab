import React from "react";
import {Header} from "../struct/header";
import {Footer} from "../struct/footer";

export function Layout(props) {
    return (
        <div>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}