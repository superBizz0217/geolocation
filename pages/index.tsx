import Image from "next/image";
import map from "../public/map.svg";
import { Layout } from "@vercel/examples-ui";
import { useState } from "react";

// Forward properties from `middleware.ts`
// When support for configuring gSSP to use Edge Functions lands,
// We could add that logic here directly.
export const getServerSideProps = ({ query }) => ({
  props: query,
});

export default function Index({
  name,
  languages,
  city,
  region,
  country,
  currencyCode,
  currencySymbol,
}) {
  name = decodeURIComponent(name);
  city = decodeURIComponent(city);

  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <div className="fixed inset-0 overflow-hidden opacity-75 bg-[#f8fafb]">
        <Image alt="World Map" src={map} fill={true} quality={100} />
      </div>
      <main className="z-10 flex flex-col items-center flex-1 px-4 pt-8 text-center sm:px-20 sm:pt-20">
        <h1 className="text-5xl font-extrabold text-transparent sm:text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Katrina Sten
        </h1>
        <p className="mt-4 text-gray-700 text-md sm:text-xl">
          Personal Fitness Trainer in London{" "}
          <Image
            alt={`${country} flag`}
            //src={`https://flagcdn.com/96x72/gb.png`}
            src={`https://flagcdn.com/gb.svg`}
            width={24}
            height={4}
            className="inline-block h-3 "
          />
          , Dubai{" "}
          <Image
            alt={`${country} flag`}
            // src={`https://flagcdn.com/96x72/ae.png`}
            src={`https://flagcdn.com/ae.svg`}
            width={24}
            height={4}
            className="inline-block h-4 "
          />{" "}
          and {city}{" "}
          <Image
            alt={`${country} flag`}
            src={`https://flagcdn.com/${country.toLowerCase()}.svg`}
            // src={`https://flagcdn.com/${country.toLowerCase()}.svg`}
            width={24}
            className="inline-block h-4 "
            height={4}
          />{" "}
          I'm obsessed with hugs, travel and fitness 😊🏝️.
        </p>

        <section className="w-full mt-16 transition bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl">
          <div className="flex justify-center p-4 border-b items-between">
            <div className="self-center">
              <span className="relative inline-block">
                <img
                  className="w-12 h-12 rounded-full"
                  // please make this image be profile.png in the /public folder
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span className="flex h-3 w-3 absolute top-0 right-0">
                  <span className="animate-ping duration-150 absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex  rounded-full h-3 w-3 bg-green-400"></span>
                </span>{" "}
              </span>
            </div>
            <div className="ml-4 mr-auto text-left">
              <h4 className="font-semibold">
                Katrina Sten{" "}
                <span className="px-2 py-1 text-sm text-green-500 bg-green-100 rounded-full shadow-green-400">
                  Online Now
                </span>
              </h4>
              <p className="text-gray-500 text-md sm:text-lg">
                I do daily livestreams on my OnlyFans
              </p>
            </div>
            <p className="self-center text-gray-700">{country}</p>
          </div>

          <div className="p-4 space-y-4 rounded-b-lg flexborder-b bg-gray-50">
            <h4 className="font-semibold text-left">Main Accounts</h4>
            <button className="z-10 w-full py-3 font-medium tracking-wide text-white transform shadow bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 rounded-lg hover:-translate-y-0.5 duration-150 hover:shadow-xl">
              Instagram (Cam 2)
            </button>
            <button className="z-10 w-full py-3 font-medium tracking-wide text-white transform shadow  bg-sky-500 rounded-lg hover:-translate-y-0.5 duration-150 hover:shadow-xl">
              OnlyFans (Cam 3)
            </button>
            <div>
              <h4 className="font-semibold text-left">Backup TikToks</h4>
              <p className="text-sm text-left text-gray-700 sm:text-lg">
                Follow ALL my Backup TikToks then DM me on Instagtam with
                screenshots for a <strong>FREE GIFT</strong> 😉
              </p>
            </div>
            // Make this a toggle button to show/hide the div below
            <button
              onClick={handleClick}
              className="z-10 w-full py-3 font-medium tracking-wide text-white transform shadow bg-black rounded-lg hover:-translate-y-0.5 duration-150 hover:shadow-xl"
            >
              Show / Hide Backup Accounts
            </button>
            {isShow && (
              <div>
                <button className="z-10 w-full opacity-30 py-3 font-medium tracking-wide text-white transform shadow bg-black rounded-lg hover:-translate-y-0.5 duration-150 hover:shadow-xl">
                  TikTok #1
                </button>
                <button className="z-10 w-full py-3 font-medium tracking-wide text-white transform shadow bg-black rounded-lg hover:-translate-y-0.5 duration-150 hover:shadow-xl">
                  TikTok #2
                </button>
                <button className="z-10 w-full py-3 font-medium tracking-wide text-white transform shadow bg-black rounded-lg hover:-translate-y-0.5 duration-150 hover:shadow-xl">
                  TikTok #3
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

Index.Layout = Layout;
