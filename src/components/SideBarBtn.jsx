export const SideBarBtn = ({ title, svg }) => {
  return (
    <div className="flex flex-coloumn justify-start px-4 py-2 m-1 items-center  gap-3 hover:bg-gray-600 rounded-md">
      <div>{svg}</div>
      <div className="text-gray-300 font-semibold">{title}</div>
    </div>
  );
};
