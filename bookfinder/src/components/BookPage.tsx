"use client"

import Image from "next/image";
import BookDescription from "./BookDescription";
import BookAuthors from "./BookAuthors";

const BookPage = ({
    title,
    cover,
    author,
    publisher,
    description,
    identifier,
    date
}:{
    title: string;
    cover: string,
    author: string[];
    publisher: string;
    description: string;
    identifier: string;
    date: string;
}) => {
    
    return (
        <div className="grid grid-cols-[1fr,3fr] gap-4 p-3 bg-gray-100">
            <div className="flex flex-col gap-1">
                <Image
                    priority={true}
                    style={{ position: "static", boxShadow: "0 0 5px 1px gray" }}
                    width={"150"}
                    height={"200"}
                    src={cover ? cover : '/no-image.png'}
                    alt={title}
                />
                <div className="text-sm">{date}</div>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="w-full text-teal-600">
                    {title}
                </h1>
                <div>{author ? <BookAuthors author={author}/> : "Author not available"}</div>
                <div>{publisher ? publisher : "Publisher not available"}</div>
                <div>
                    {
                        description ?
                        <BookDescription description={description} /> :
                        "No description available."
                    }
                </div>
            </div>
        </div>
    );
}

export default BookPage;