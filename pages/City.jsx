export default function City() {
    return (
        <>
            <div className="h-[90px] flex items-center">
                <div className="px-4 flex items-center gap-4">
                    <img
                        className="mask mask-squircle w-14"
                        src="https://api-ninjas-data.s3.us-west-2.amazonaws.com/flags/4x3/8L07WqeX/us.svg"
                        alt=""
                    />
                    <div>
                        <h1 className="font-bold text-lg inline">Milan.</h1>
                        <span className="text-sm text-base-content/60">Italy</span>
                    </div>
                </div>
            </div>
            <div className="px-6 space-y-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam at consequuntur excepturi ipsum
                    minima sed tenetur. Cumque delectus enim ex hic impedit, molestiae non quis ratione sed sint.
                    Numquam?</p>

                <ul>
                    <li className="flex gap-1 text-base-content/80">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"/>
                        </svg>
                        <span className="text-sm">22 jul 2025</span>
                    </li>
                </ul>

                <button className="btn btn-block">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd"
                              d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                              clipRule="evenodd"/>
                    </svg>

                    <span>Back to Cities</span>
                </button>
            </div>
        </>
    )
}
