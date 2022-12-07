

export const Pagination = ({pageNumbers, paginate, paginateNext, paginatePrev, paginattion}) => {
    
    return (
        <>
            { paginattion === false
                ? <></>
                : <nav className="flex w-[max-content] py-10 max-w-[1290px] mx-auto relative lg:max-w-[940px] lg:py-[30px] md:max-w-[690px] sm:max-w-[420px] sm:py-[20px] xs:max-w-[290px] xs:py-5">
                    <ul className="flex items-center space-x-1 text-xl text-grey sm:text-sm xs:text-sm">
                        <li className="flex">
                            <button onClick={() => paginatePrev()}>
                                <svg className="rotate-90 sm:w-3 xs:w-3 h-auto" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 -1.90735e-06L9 10L-8.74228e-07 -3.33739e-07L18 -1.90735e-06Z" fill="#4D8BBE"/>
                                </svg>
                            </button>
                        </li>
                        {pageNumbers.map(num => (
                            <li key={num} className="group flex">
                                <button className="group-hover:bg-blue group-hover:text-white px-1 group-active:bg-blue" onClick={() => paginate(num)}>{num}</button>
                            </li>
                        ))}
                        <li className="flex">
                            <button onClick={() => paginateNext()}>
                                <svg className="-rotate-90 sm:w-3 xs:w-3 h-auto" width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 -1.90735e-06L9 10L-8.74228e-07 -3.33739e-07L18 -1.90735e-06Z" fill="#4D8BBE"/>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </nav>
            }
        </>
    )
}