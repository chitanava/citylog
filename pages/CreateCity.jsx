export default function CreateCity() {
    return (<>
            <div className="h-[90px] flex items-center">
                <div className="px-4">
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li><a>Cities</a></li>
                            <li>Add City</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="px-12">
                <form action="">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">City name</legend>
                        <input type="text" className="input"/>
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Date</legend>
                        <input type="date" className="input"/>
                        <p className="label">When did you go to Milan?</p>
                    </fieldset>
                    <fieldset className="fieldset mb-8">
                        <legend className="fieldset-legend">Notes</legend>
                        <textarea className="textarea h-24"></textarea>
                        <div className="label">Notes about your trip to Milan</div>
                    </fieldset>
                    <div className="flex justify-between">
                        <button className="btn btn-ghost">Cancel</button>
                        <button className="btn btn-success">Add</button>
                    </div>
                </form>
            </div>
        </>
    )
}
