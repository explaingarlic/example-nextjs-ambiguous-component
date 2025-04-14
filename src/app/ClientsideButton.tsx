"use client"

import { useUseless } from "./provider"
import useTitle from "./useTitle";

export default function ClientsideButton() {
    const { setNumber } = useUseless();
    const title = useTitle();

    return (
        <button
            onClick={() => {
                setNumber(Math.random());
            }}
        >
            This is a clientside button!

            Look, we have a window title: {title}
        </button>
    )
}