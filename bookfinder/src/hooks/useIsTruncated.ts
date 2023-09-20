import { RefObject, useState, useEffect } from "react";

const useIsTruncated = (element: RefObject<HTMLParagraphElement>) => {
    const determineIsTruncated = () => {
        if (!element.current) return false;
        return element.current.scrollHeight > element.current.clientHeight;
    };
    const [isTruncated, setIsTruncated] = useState(determineIsTruncated());

    useEffect(() => {
        const resizeListener = () => setIsTruncated(determineIsTruncated());
        window.addEventListener("resize", resizeListener);
        return () => {
        window.removeEventListener("resize", resizeListener);
        };
    }, []);
    return isTruncated;
};

export default useIsTruncated;