
export const Temperature = ({temperatureValue,temperatureLabel,temperatureChange}) => {
    return (
        <div className="
        flex flex-col 
        bg-white rounded-md shadow-md
        max-w-[15rem]  m-2 p-3 
        ">
            <label className="
            font-bold sm:text-lg text-md"
            htmlFor="temperature">{temperatureLabel}</label>
            <input className="
            border border-gray-800 rounded-md mt-1
            text-base
            p-1
            text-black"
            type="number" id="temperature" value={temperatureValue} onChange={temperatureChange} /> 
        </div>
    )
}