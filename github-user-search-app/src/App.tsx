import { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Card } from "./components/Card";

export type gitHubData = {
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string | null;
  created_at: string;
  email: string | null;
  followers: number;
  following: number;
  location: string | null;
  login: string | null | undefined;
  name: string;
  public_repos: string;
  twitter_username: string;
};

export const App = () => {
  const [gitUser, setGitUser] = useState<string>("Octocat");
  const [userData, setUserData] = useState<{}>({});
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async (gitUser: string) => {
      const response = await fetch(`https://api.github.com/users/${gitUser}`);
      const user = await response.json();
      setUserData(user);
    };
    fetchUser(gitUser).catch(console.error);
  }, [gitUser]);

  return (
    <div
      className={`flex h-screen justify-center items-center ${
        isDark ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
      }`}
    >
      <div className="w-[327px]">
        <div className="flex justify-between mb-[36px]">
          <h1 className={`font-bold text-[26px] ${isDark ? "text-white" : ""}`}>
            devfinder
          </h1>
          {!isDark ? (
            <button
              className="group flex items-center text-[#697C9A] hover:text-black fill-[#697C9A] "
              onClick={() => setIsDark(!isDark)}
            >
              DARK
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="fill-[#697C9A] ml-[15px] group-hover:fill-black"
              >
                <path d="M19.513 11.397a.701.701 0 00-.588.128 7.496 7.496 0 01-2.276 1.336 7.101 7.101 0 01-2.583.462 7.505 7.505 0 01-5.32-2.209 7.568 7.568 0 01-2.199-5.342c0-.873.154-1.72.41-2.49a6.904 6.904 0 011.227-2.21.657.657 0 00-.102-.924.701.701 0 00-.589-.128C5.32.61 3.427 1.92 2.072 3.666A10.158 10.158 0 000 9.83c0 2.8 1.125 5.342 2.967 7.19a10.025 10.025 0 007.16 2.98c2.353 0 4.527-.822 6.266-2.183a10.13 10.13 0 003.58-5.624.623.623 0 00-.46-.796z"></path>
              </svg>
            </button>
          ) : (
            <button
              className="group flex items-center text-[#697C9A] hover:text-white"
              onClick={() => setIsDark(!isDark)}
            >
              LIGHT
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="fill-[#697C9A] ml-[15px] group-hover:fill-white"
              >
                <path d="M13.545 6.455c-.9-.9-2.17-1.481-3.545-1.481a4.934 4.934 0 00-3.545 1.481c-.9.9-1.481 2.17-1.481 3.545 0 1.376.582 2.646 1.481 3.545.9.9 2.17 1.481 3.545 1.481a4.934 4.934 0 003.545-1.481c.9-.9 1.481-2.17 1.481-3.545a4.934 4.934 0 00-1.481-3.545zM10 3.413a.7.7 0 00.688-.688V.688A.7.7 0 0010 0a.7.7 0 00-.688.688v2.037a.7.7 0 00.688.688zm5.635 1.931l1.455-1.455a.67.67 0 000-.952.67.67 0 00-.952 0l-1.455 1.455a.67.67 0 000 .952c.238.264.66.264.952 0zm3.677 3.968h-2.037a.7.7 0 00-.688.688.7.7 0 00.688.688h2.037A.7.7 0 0020 10a.7.7 0 00-.688-.688zm-3.704 5.344a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455a.67.67 0 00.952 0 .67.67 0 000-.952l-1.455-1.455zM10 16.587a.7.7 0 00-.688.688v2.037A.7.7 0 0010 20a.7.7 0 00.688-.688v-2.037a.7.7 0 00-.688-.688zm-5.635-1.931L2.91 16.111a.67.67 0 000 .952.67.67 0 00.952 0l1.455-1.455a.67.67 0 000-.952c-.238-.264-.66-.264-.952 0zM3.413 10a.7.7 0 00-.688-.688H.688A.7.7 0 000 10a.7.7 0 00.688.688h2.037A.7.7 0 003.413 10zm.952-4.656a.67.67 0 00.952 0 .67.67 0 000-.952L3.862 2.937a.67.67 0 00-.952 0 .67.67 0 000 .952l1.455 1.455z"></path>
              </svg>
            </button>
          )}
        </div>
        <SearchBar setGitUser={setGitUser} isDark={isDark} />
        <Card userData={userData} isDark={isDark} />
      </div>
    </div>
  );
};
