type SideBarRowProps = {
    title: string,
    Icon : any
}

const SideBarRow = ({title,Icon}:SideBarRowProps) => {

    return (<>
        <div className="flex gap-2 items-center hover:bg-gray-300 rounded-lg p-2">
            <Icon className='h-7'/>
            <h1>{title}</h1>
            
        </div>
    </>)

}

export default SideBarRow;