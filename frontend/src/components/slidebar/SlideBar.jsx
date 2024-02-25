import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const SlideBar = () => {
  return (
    <div className="px-2 py-4 overflow-scroll  overflow-x-hidden">
      <SearchInput />
      <div className="divider px-2"></div>
      <div className="px-2">
        <Conversations />
        <LogoutButton />
      </div>
    </div>
  );
};

export default SlideBar;
