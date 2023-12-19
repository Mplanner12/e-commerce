




const AddToBagButton = () => {
  return (
    <div className="rounded-lg p-2 flex flex-col gap-3  bg-blue-gray-800/50 absolute left-6 bottom-10">
        <p className="text-xs text-white">ANORAK STALKER</p>
        <div className="flex items-center gap-14">
            <button className="py-1 px-2 text-xs bg-orange-900 rounded-xl">ADD TO BAG</button>
            <span className="flex items-center gap-1">
                <p className="text-xs text-white">$380</p>
                <p className="text-xs text-gray-500">$450</p>
            </span>
        </div>
    </div>
  )
}

export default AddToBagButton