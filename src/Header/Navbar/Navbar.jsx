const Navbar = () => {
  return (
    <div className="w-8/12 mx-auto ">
      <div className="flex items-center justify-around bg-base-100">
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className="font-semibold text-[#000000]">
                <a> HOME</a>
              </li>
              <li className="font-semibold text-[#000000]">
                <a> ABOUT US</a>
              </li>
              <li className="font-semibold text-[#000000]">
                <a> PORTFOLIO</a>
              </li>
              <li className="font-semibold text-[#000000]">
                <a> ABOUT US</a>
              </li>
              <li className="font-semibold text-[#000000]">
                <a> CONTACT US</a>
              </li>
            </ul>
          </div>
          <h1 className="font-bold  text-[#FF4A17] text-3xl w-28 h-11 hover:text-red-700">
            LOGO
          </h1>
        </div>
        <div className=" hidden lg:flex h-11">
          <ul className="menu menu-horizontal px-1">
            <li className="font-semibold text-[#000000]">
              <a> HOME</a>
            </li>
            <li className="font-semibold text-[#000000]">
              <a> ABOUT US</a>
            </li>
            <li className="font-semibold text-[#000000]">
              <a> PORTFOLIO</a>
            </li>
            <li className="font-semibold text-[#000000]">
              <a> ABOUT US</a>
            </li>
            <li className="font-semibold text-[#000000]">
              <a> CONTACT US</a>
            </li>
          </ul>
        </div>
        <div className="">
          <button className=" bg-[#FF4A17] text-[#FFFFFF] w-28 h-11 rounded-lg hover:bg-red-700">
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
