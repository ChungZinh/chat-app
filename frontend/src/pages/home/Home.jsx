import MessageContainer from "../../components/messages/MessageContainer";
import SlideBar from "../../components/slidebar/SlideBar";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden shadow-md shadow-neutral-300  bg-[#B6C4B6]">
        <SlideBar />
        <MessageContainer/>
      </div>
    </div>
  );
}

export default Home;
