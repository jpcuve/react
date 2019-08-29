import React from 'react'
import Welcome from "./Welcome";
import AnotherWelcome from "./AnotherWelcome";

export default function Home() {
    return (
        <div>
            <div>Home</div>
            <Welcome name="jp"/>
            <br/>
            <AnotherWelcome name="Annie"/>
        </div>
    )
}