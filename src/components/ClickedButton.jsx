export const ClickedButton = ({ title, svg }) => {
  return (
    <div className="flex flex-coloumn content-start px-2 py-2 m-1 items-center w-[100%] gap-2 bg-gray-600 rounded-md">
      <div>{svg}</div>
      <div className="text-gray-300 font-semibold">{title}</div>
    </div>
  );
};
