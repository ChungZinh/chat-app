const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center bg-[#EEF0E5] hover:bg-[#304D30] rounded-md  p-2 py-1 cursor-pointer shadow-md shadow-neutral-350">
        <div className="avatar outline">
          <div className="w-12 rounded-full">
            <img src="" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
            <p className="font-bold text-neutral-300 ">Chung Vinh</p>
            <span className="text-xl">V</span>
        </div>
      </div>
      </div>

      
    </>
  );
};

export default Conversation;
