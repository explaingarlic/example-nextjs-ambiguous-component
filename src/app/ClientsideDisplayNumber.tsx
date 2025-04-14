"use client"

import { useUseless } from "./provider";
import useTitle from "./useTitle";

export default function ClientsideDisplayNumber() {
    const { number } = useUseless();
    const title = useTitle();

    return (
        <div>
            <h1>Your number is: {number}</h1>
            <div>To prove this is a client component, you can see the window title: {title}</div>
        </div>
    )
}