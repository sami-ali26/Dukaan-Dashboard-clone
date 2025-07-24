import { LeftBar } from "../components/LeftBar";
import { RightBar } from "../components/RightBar";

export const MainPage = () => {
  return (
    <div className="w-full grid grid-cols-12 overflow-x-hidden">
      <LeftBar />
      <RightBar />
    </div>
  );
};
