export const Footer = ({ name }) => {
  return (
    <div className="flex justify-center items-center m-8">
      <div className="text-gray-500 mr-2 text-normal">Made with ❤️ by</div>
      <a
        href="https://www.linkedin.com/in/samiali26/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-gray-500 text-lg font-bold"
      >
        {name}
      </a>
    </div>
  );
};
