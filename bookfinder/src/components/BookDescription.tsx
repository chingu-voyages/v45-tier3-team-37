import { useRef, useState } from "react";
import useIsTruncated from "@/hooks/useIsTruncated";

const BookDescription = ({description}:{description: string}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef<HTMLParagraphElement>(null);
    const isTruncated = useIsTruncated(ref);

    const descriptionElement = (
        <div className="relative flex flex-col cursor-pointer">
            <p className="absolute z-10 bg-white border border-teal-600 p-2 mt-1 max-h-40 overflow-y-auto">{description}</p>
        </div>
    );

    return (
        <>
            <div className="text-lg font-semibold">
                Description
            </div>
            <p ref={ref} className="line-clamp-3">
                {description}
            </p>
            {
                isTruncated && (
                    <button
                        className="text-teal-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {
                            isOpen ? "See less" : "Full description"
                        }
                    </button>
                )
            }
            {
                isOpen ? descriptionElement : null
            }
        </>
    )
}

export default BookDescription;