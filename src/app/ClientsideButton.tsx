"use client"

import { useUseless } from "./provider"
import useTitle from "./useTitle";

export default function ClientsideButton() {
    const { setNumber } = useUseless();
    const title = useTitle();

    return (
        
        <button
            className="bg-white text-black hover:text-blue hover:shadow-md hover:px-5 px-2 py-1 transition-all"
            onClick={() => {
                setNumber(Math.random());
            }}
        >
            This is a clientside button!

            Look, we have a window title: {title}
        </button>
    )
}