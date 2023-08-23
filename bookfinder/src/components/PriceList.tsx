const PriceList = () => {

    const books = [
        {price: "19,00", rating: "", stock: true, seller: "Amazon"},
        {price: "18,00", rating: "", stock: true, seller: "Amazon"},
        {price: "19,50", rating: "", stock: false, seller: "Amazon"},
        {price: "17,00", rating: "", stock: true, seller: "Amazon"},
        {price: "19,90", rating: "", stock: true, seller: "Amazon"}
    ];

    const currency = "€"

    return (
        <div className="flex flex-col p-3">
            <div className="pb-2 self-end">
                <select name="sort" id="sort" className="p-1 bg-white">
                    <option value="">sort</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
            {
                books.map((book, index) => (
                    <div key={index} className="grid grid-cols-[2fr,1fr,1fr,1fr] border box-border p-2 mb-2">
                        <div className="grid sm:grid-cols-2 grid-cols-1">
                            <div className="flex">
                                <div>{currency}</div>
                                <div>{book.price}</div>
                            </div>
                            <div className="">⭐⭐⭐⭐⭐</div>
                        </div>
                        <div>{book.stock ? "in stock" : "out of stock"}</div>
                        <div>{book.seller}</div>
                        <div className="flex justify-end">
                            <button className="bg-teal-600 text-white w-full md:w-[70%]">Go to seller</button>
                        </div>
                    </div>
                ))
            }
            <div className="flex font-semibold self-end">
                <div className="pl-1">1</div>
                <div className="pl-1">2</div>
                <div className="pl-1">3</div>
            </div>
        </div>
    )
}

export default PriceList;