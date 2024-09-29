import React from "react";
import { Typography } from "@mui/material";
import { useProgressAnimation } from "../hooks/ProgressAnimation";
import {
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
} from "react-icons/fa6";

function ProgressBar({ targetValue, speed }) {
  const progress = useProgressAnimation(targetValue, speed);

  return (
    <div>
      <progress value={progress} max={100} />
    </div>
  );
}

const SocialIcon = ({ icon, path }) => (
  <a href={path} target="_blank" rel="noopener noreferrer">
    <div className="text-6xl md:text-8xl">{icon}</div>
  </a>
);

export const AboutMe = () => {
  return (
    <div className="bg-[#DDDDDD] min-h-screen p-8">
      {/* Main story */}
      <div className="text-2xl">O mnie</div>
      <br />
      <Typography>
        Cześć, jestem Mateusz, pracownik magazynu z pięcioletnim doświadczeniem,
        aspirujący do zostania programistą. Moja pasja do rozwiązywania
        problemów i programowania narodziła się dzięki samodzielnie przerabianym
        kursom online. Obecnie, po pracy, poświęcam się nauce HTML5, CSS i
        JavaScript, wierząc, że determinacja i dyscyplina doprowadzą mnie do
        udanej kariery w IT.
      </Typography>
      {/* Skills */}

      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 py-5">
        <div className="mainskills p-5">
          <b>Tych technologii się uczę:</b>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 h-full border-black border-solid border-2 p-3 mx-auto">
            <Typography>
              HTML5
              <ProgressBar targetValue={99} speed={10} />
            </Typography>
            <Typography>
              CSS3
              <ProgressBar targetValue={80} speed={6} />
            </Typography>
            <Typography>
              JavaScript
              <ProgressBar targetValue={50} speed={4} />
            </Typography>
            <Typography>
              React.JS
              <ProgressBar targetValue={50} speed={5} />
            </Typography>
            <Typography>
              Tailwind CSS
              <ProgressBar targetValue={65} speed={3} />
            </Typography>
            <Typography>
              Git i Github
              <ProgressBar targetValue={45} speed={10} />
            </Typography>
            <Typography>
              Responsywny
              <br /> Web Design
              <ProgressBar targetValue={80} speed={9} />
            </Typography>
            <Typography className="text-pretty">
              Zarządzanie stanem <br />
              (Redux, Context API)
              <ProgressBar targetValue={10} speed={9} />
            </Typography>
            <Typography>
              API (REST, GraphQL)
              <ProgressBar targetValue={25} speed={9} />
            </Typography>
          </div>
        </div>
        <div className="subskills p-5">
          <b>Umiejętności które również posiadam:</b>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 border-black border-solid border-2 h-full p-3">
            <Typography>
              Język angielski B1
              <ProgressBar targetValue={50} speed={9} />
            </Typography>
            <Typography>
              Prawo jazdy kat. B
              <ProgressBar targetValue={100} speed={3} />
            </Typography>
            <Typography>
              Komunikatywność
              <ProgressBar targetValue={100} speed={6} />
            </Typography>
          </div>
        </div>
      </div>
      {/* Zainteresowania */}
      <div className="p-5">
        <b>Co mnie interesuje:</b>
        <div className="grid p-5">
          <Typography>- Produkty Apple</Typography>
          <Typography>- Programowanie</Typography>
          <Typography>- Gotowanie</Typography>
          <Typography>- Japońska motoryzacja</Typography>
          <Typography>- Rozwój osobisty i poszerzanie horyzontów</Typography>
        </div>
        {/* Sociale */}
        <div>
          <b>Moje sociale:</b>
        </div>
        <div className="flex">
          <div>
            <SocialIcon
              path={"https://www.facebook.com/profile.php?id=100003395366627"}
              icon={<FaSquareFacebook />}
            />
          </div>

          <div>
            <SocialIcon
              path={"https://www.instagram.com/mateusz_mlodecki"}
              icon={<FaSquareInstagram />}
            />
          </div>
          <div>
            <SocialIcon
              path={"https://github.com/MateuszMlodecki"}
              icon={<FaSquareGithub />}
            />
          </div>
        </div>
      </div>
      <div className="pb-14"></div>
    </div>
  );
};
