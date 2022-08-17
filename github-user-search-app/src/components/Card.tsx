import { userData } from "../App";

interface CardProps {
  userData: userData;
}

export const Card = ({
  userData: {
    avatar_url,
    bio,
    blog,
    company,
    created_at,
    email,
    followers,
    following,
    location,
    login,
    name,
    twitter_username,
  },
}: CardProps) => {
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const parsedDate = new Date(created_at);
  const formattedDate = `Joined ${parsedDate.getDate()} ${
    months[parsedDate.getMonth()]
  } ${parsedDate.getFullYear()}`;
  return (
    <div className="w-full h-auto bg-white mt-[16px] rounded-[15px] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.198567)]">
      <div>
        <div className="flex">
          <div>
            <img className="rounded-full w-[70px]" src={avatar_url} alt="pfp" />
          </div>
          <div>
            <h3>{name}</h3>
            <p>{`@${login}`}</p>
            <p>{formattedDate}</p>
          </div>
        </div>
        <p>
          {bio ??
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
        </p>
        <div></div>
      </div>
    </div>
  );
};
