import React from "react";

const backgroundStyle = {
  backgroundImage: `url('/coffee-beans-bg.png')`, // Background image from the public folder
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const AppStore = () => {
  return (
    <>
      <div className="py-14" style={backgroundStyle}>
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              {/* text section */}
              <h1 className="text-xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3">
                Coffee Cafe is available for Android also and  IOS
              </h1>
              {/* img section */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center">
                <a href="#">
                  <img
                    src="/play_store.png" // Image path from the public folder
                    alt="Play store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src="/app_store.png" // Image path from the public folder
                    alt="App store"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
            {/* Empty div */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
