

const HeaderIcon = ({ Icon,active }: any) => {
  return (
    // group is used for styling based on state of parent element
    <div className="flex group items-center active:border-b-2 active:border-blue-500 cursor-pointer md:hover:bg-gray-100 md:px-10 rounded-xl h-10">
      <Icon className={`h-7 text-gray-500 group-hover:text-blue-500 ${active && 'text-blue-500'}`} />
    </div>
  );
};
export default HeaderIcon;
