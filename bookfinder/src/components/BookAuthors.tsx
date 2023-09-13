"use client"

import { useState } from "react";

const BookAuthors = ({author}:{author:string[]}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
        {
            author ?
            (
                author.length > 1 ?
                (
                    isOpen ?
                    (
                        <div className="relative flex flex-col cursor-pointer">
                            <div className="text-teal-600" onClick={() => setIsOpen(!isOpen)}>See less</div>
                            <div className="absolute z-10 bg-white border border-teal-600 p-2 mt-6 max-h-20 overflow-y-auto">
                                {
                                    author.map((author, index) => <p key={index}>{author}</p>)
                                }
                            </div>
                        </div>
                    ) :
                    <button className="text-teal-600" onClick={() => setIsOpen(!isOpen)}>Authors</button>
                ):
                author
            ):
            null
        }
        </>
    )
}

export default BookAuthors;