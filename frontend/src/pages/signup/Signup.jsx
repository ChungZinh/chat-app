import GenderCheckBox from "./GenderCheckBox";

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-4 shadow-md shadow-neutral-300 rounded-lg bg-[#B6C4B6]">
        <h1 className="text-2xl font-bold text-center text-[#304D30]">
          Signup
        </h1>

        <form>
          <div>
            <label className="label text-[#304D30] font-semibold p-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Chung Vinh"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label text-[#304D30] font-semibold p-2">
              Username
            </label>
            <input
              type="text"
              placeholder="chungvinh"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label text-[#304D30] font-semibold p-2">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label text-[#304D30] font-semibold p-2">
              Confirm Password
            </label>
            <input
              type="text"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckBox/>

          <a href="#" className="text-sm text-white hover:underline hover:text-[#304D30] mt-2 inline-block ]">
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-md py-2 mt-2 font-bold text-[#304D30]">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
