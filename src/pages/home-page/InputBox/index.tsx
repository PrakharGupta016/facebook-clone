const InputBox = () =>{
        return(<div className="grid grid-cols-1 gap-2  p-2 shadow-md rounded-2xl text-gray-500 bg-white">
                <div className="flex gap-2 items-center ">
                    <img className='rounded-full' src={'https://links.papareact.com/l4v'} height={20} width={20}/>
                    <form className="flex flex-1">
                        <input placeholder="What's on you mind" className="bg-gray-100 rounded-full p-2 outline-none h-12"/>
                    </form>
                </div>
        </div>)
}
export default InputBox;