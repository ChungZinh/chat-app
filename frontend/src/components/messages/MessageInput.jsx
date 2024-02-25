import {BsSend} from "react-icons/bs"
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Send a message"
          className="border text-sm rounded-lg block w-full p-2.5 bg-neutral-200 border-neutral-300 text-neutral-600"
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
            <BsSend/> 
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
