function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-4 shadow-md shadow-neutral-300 rounded-lg bg-[#B6C4B6]">
        <h1 className="text-2xl font-bold text-center text-[#304D30]">
          Login
        </h1>
        <form>
          {/* USERNAME */}
          <div>
            <label className="label text=[#304D30] font-semibold p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="label text=[#304D30] font-semibold p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <a
            href="#"
            className="text-sm text-white hover:underline hover:text-[#304D30] mt-2 inline-block ]"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-block btn-md py-2 mt-2 font-bold text-[#304D30]">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
