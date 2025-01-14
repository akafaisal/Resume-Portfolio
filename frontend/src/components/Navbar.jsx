import LetterF from "../assets/letterf.png";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md p-4 bg-gray-800 text-white">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src={LetterF} className="h-12 w-12" alt="Logo" />

          {/* Navigation Links */}
          <div className="flex-grow">
            <ul className="flex justify-center space-x-6">
              <li>
                <a href="#about" className="hover:text-blue-500 p-5 ">
                  About Us
                </a>
              </li>
              <li>
                <a href="#details" className="hover:text-blue-500 ">
                  Details
                </a>
              </li>
              <li>
                <a href="#other" className="hover:text-blue-500">
                  Other
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
