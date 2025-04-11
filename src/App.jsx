import React, { useState } from "react";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <a href="/" className="hover:text-pink-700">
        Poetic Sceneries
      </a>
      <div className="text-gray-600 text-2xl font-primary grid grid-cols-7">
        <div>
          <div className="col-span-1 md:flex md:justify-end">
            {/* Hamburger Menu Button */}
            <div className="flex justify-between items-center">
              <div
                className="px-1 ml-0 cursor-pointer relative z-40"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>

            {/* Sidebar Drawer */}
            <div
              className={`fixed inset-0 z-30 bg-gray-50 bg-opacity-100 transition-opacity duration-300 ${
                menuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
              }`}
              onClick={toggleMenu}
            ></div>

            <aside
              className={`fixed top-0 left-0 z-30 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <ul className="text-sm mt-16 p-4">
                <li className="text-gray-700 font-bold py-1">
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-red-500"
                  >
                    <span>Home</span>
                    <svg
                      className="w-5 ml-3 size-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-white"
                  >
                    <span>About</span>
                    <svg
                      className="w-5 ml-3 size-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                      />
                    </svg>
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="#"
                    className="px-4 flex justify-end border-r-4 border-white"
                  >
                    <span>Contact</span>
                    <svg
                      className="w-5 ml-3 size-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        {/* Rest of your content remains the same */}
        <div className="col-span-6 px-4">
          <h3 className="font-semibold text-sm uppercase text-green-500 sm:text-red-500 lg:text-blue-500 text-center ">
            A postcard
          </h3>

          <div className="px-10 py-4 mt-8  bg-gray-100">
            <div className="flex justify-center md:justify-end text-red-500 ">
              <a
                href="#"
                className="btn border-red border-2 hover:bg-red-500 hover:text-white transition ease-out duration-500"
              >
                Log in
              </a>
              <a
                href="#"
                className="ml-2 btn border-red border-2 hover:bg-red-500 hover:text-white transition ease-out duration-500"
              >
                Sign up
              </a>
            </div>
            <div className="flex items-end justify-center">
              <div className="bg-red-500 h-4 w-6"></div>
              <div className="bg-blue-500 h-8 w-6"></div>
              <div className="bg-green-500 h-12 w-6"></div>
            </div>
            {/* cards go here */}
            <div className=" grid lg:grid-cols-3 gap-10">
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=1200&q=80"
                  alt="A dreamy sunrise over rolling hills, capturing the spirit of a quiet escape"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="mt-5 pb-2 border-gray-50">
                  <div className="md:text-xl font-bold">Whispers of Dawn</div>

                  <div className="text-gray-500 text-sm m-4">
                    As morning light kisses the silent meadow,
                    <br />
                    a breeze hums lullabies to the waking world.
                    <br />
                    Pause, breathe, and dream on.
                  </div>
                </div>
                <div className="badge">
                  <svg
                    className="w-4 inline-block size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <span>Nairobi</span>
                </div>
              </div>

              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=1200&q=80"
                  alt="Dreamy landscape"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="mt-5 pb-2 border-gray-50">
                  <div className="md:text-xl font-bold">WanderLight</div>
                  <div className="text-gray-500 text-sm m-4">
                    Beneath the golden sky, forgotten paths awaken.
                    <br />
                    Let your heart drift where maps dare not go,
                    <br />
                    and chase the light that only wanderers know.
                  </div>
                </div>
                <div className="badge">
                  <svg
                    className="w-4 inline-block size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <span>Eldoret</span>
                </div>
              </div>
              <div className="card">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
                  alt="A tranquil lake reflecting a misty mountain at dawn"
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="mt-5 pb-2 border-gray-50">
                  <div className="md:text-xl font-bold">Winds of Stillness</div>
                  <div className="text-gray-500 text-sm m-4">
                    Beneath the hush of morning air,
                    <br />
                    The sky reflects a quiet prayer.
                    <br />
                    No rush, no sound, no race to run—
                    <br />
                    Just breath and breeze beneath the sun.
                  </div>
                </div>
                <div className="badge">
                  <svg
                    className="w-4 inline-block size-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  <span>Kisumu</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-gray-300 text-black btn hover:shadow-inner transform hover:scale-125 hover:opacity-50 transition ease-out duration-300">
                Load more
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;