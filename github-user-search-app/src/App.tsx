import {useEffect, useState} from "react";
import {SearchBar} from "./components/SearchBar";
import {Card} from "./components/Card";

export const App = () => {
  const [gitUser, setGitUser] = useState<string>("dreyfus92")
  const [userData, setUserData] = useState<{}>({})

  useEffect(() => {
    const fetchUser = async (gitUser: string) => {
      const response = await fetch(`https://api.github.com/users/${gitUser}`);
      const user = await response.json();
      setUserData(user)
    }
    fetchUser(gitUser).catch(console.error);
  },[gitUser])
  console.log(userData)
  return (
    <div className="flex  h-screen justify-center items-center bg-[#F6F8FF]">
      <div className="w-[730px]">
        <div className="flex justify-between mb-[36px]">
          <h1>devfinder</h1>
          <div className="flex">
            <p className="text-[#697C9A]">light</p>
            <img
              className="ml-[15px]"
              alt="moon-icon"
              src="/assets/icon-moon.svg"
            />
          </div>
        </div>
        <SearchBar />
        <Card />
      </div>
    </div>
  );
};
