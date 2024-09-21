type SideBarRowProps = {
    title: string,
    Icon : any
}

const SideBarRow = ({title,Icon}:SideBarRowProps) => {

    return (<>
        <div className="flex gap-2 items-center hover:bg-gray-300 rounded-lg p-2">
            <Icon className='h-7 text-blue-400'/>
            <h1 className="hidden sm:inline-flex font-medium">{title}</h1>
            
        </div>
    </>)

}

export default SideBarRow;