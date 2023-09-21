import { RefObject, useState, useEffect } from "react";

const useIsTruncated = (element: RefObject<HTMLParagraphElement>) => {

    const [isTruncated, setIsTruncated] = useState<boolean>(false);

    const determineIsTruncated = () => {
        if (!element.current) return false;
        setIsTruncated(element.current.scrollHeight > element.current.clientHeight);
    };

    useEffect(() => {
        determineIsTruncated()
        const resizeListener = () => determineIsTruncated();
        window.addEventListener("resize", resizeListener);
        return () => {
        window.removeEventListener("resize", resizeListener);
        };
    }, []);
    return isTruncated;
};

export default useIsTruncated;