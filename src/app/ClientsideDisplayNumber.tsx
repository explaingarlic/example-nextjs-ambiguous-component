"use client"

import AmbiguousComponent from "./AmbiguousComponent";
import { useUseless } from "./provider";
import { useState } from "react";
import useTitle from "./useTitle";

export default function ClientsideDisplayNumber() {
    const { number } = useUseless();
    const title = useTitle();
    const [ isDisplayed, setIsDisplayed ] = useState(false);

    return (
        <div>
            <h1>Your number is: {number}</h1>
            <div>To prove this is a client component, you can see the window title: {title}</div>
            <button onClick={() => setIsDisplayed(true)}>
                click me to display the component dynamically
            </button>
            { isDisplayed ? <AmbiguousComponent/>: null }
        </div>
    )
}