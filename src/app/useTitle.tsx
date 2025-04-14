import { useState, useEffect } from "react";

export default function useTitle() {
    const [title, setTitle] = useState("");

    useEffect(() => {
        setTitle(window.document.title);
    },[setTitle])

    return title;
}