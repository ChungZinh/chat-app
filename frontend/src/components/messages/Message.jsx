
const Message = () => {
  return (
    <div>
       <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img
                    alt="avatar"
                    src="https://randomuser.me/api/portraits"

                />
            </div>
        </div>

        <div className={`chat-bubble text-white bg-[#88AB8E]`}>
            Hi! What is up?
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12.42</div>
    </div>
    </div>
  )
}

export default Message
