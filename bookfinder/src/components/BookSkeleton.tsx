const BookSkeleton = () => (
    <>
    <button type="button" className="bg-teal-600 text-white ..." disabled>
        Processing...
    </button>
    <div className="flex p-[10px] justify-center bg-zinc-100 border border-black overflow-hidden animate-pulse">
		<div className="flex flex-col w-full">
			<div className="h-6 mb-6 bg-teal-600"></div>
			<div className="relative pb-[130%] shadow-[0_5px_10px_0_rgba(0,0,0,0.3)] bg-gray-200"></div>
			<div className="h-6 my-4 bg-gray-400"></div>
			<div className="h-6 mb-8 bg-gray-400"></div>
			<div className="h-8 bg-teal-600 shadow-[0_3px_5px_0_rgba(0,0,0,0.3)]"></div>
		</div>
	</div>
    </>
)

export default BookSkeleton;