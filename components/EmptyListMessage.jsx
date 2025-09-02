export default function EmptyListMessage() {
    return (
        <div className="my-8 px-6">
            <div className="text-center flex justify-center mb-2">
                    <span className="text-base-content/60">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-10"><path strokeLinecap="round"
                                                                             strokeLinejoin="round"
                                                                             d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                    </span>
            </div>
            <p className="text-center">Your list is empty</p>
            <p className="text-sm text-base-content/60 text-center">Click the map to start your journey!</p>
        </div>
    )
}
