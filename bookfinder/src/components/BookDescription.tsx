import { useState } from "react";

const BookDescription = ({description}:{description: string}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const descriptionElement = (
        <div className="relative flex flex-col cursor-pointer">
            <div className="text-teal-600" onClick={() => setIsOpen(!isOpen)}>See less</div>
            <p className="absolute z-10 bg-white border border-teal-600 p-2 mt-6 max-h-40 overflow-y-auto">{description}</p>
        </div>
    );

    return (
        <>
        {
            isOpen ?
            descriptionElement :
            <button className="text-teal-600" onClick={() => setIsOpen(!isOpen)}>Full description</button>
        }
        </>
    )
}

export default BookDescription;