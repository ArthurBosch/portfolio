export interface linksObj {
  live: string;
  github: string;
}

export interface dataItem {
  id: number;
  imageSrcs: string[];
  title: string;
  paragraph: string;
  icons: Array<string | string[]>;
  isHorizontal: boolean;
  links: linksObj;
}

export const mockups: dataItem[] = [
  {
    id: 0,
    title: "Simple Timekeeper",
    paragraph:
      "Progressive web application for keeping track of your work hours. Developed using classic React + Redux Toolkit for frontend, Express + Postgres database for back-end. Hosted with Hekoku (back) and Vercel (front) ",
    icons: ["React", "Express", "Postgres", "Heroku", "Vercel"],
    imageSrcs: [
      "/mockups/project1/SimpleTimekeeper1H.png",
      "/mockups/project1/SimpleTimekeeper2H.png",
      "/mockups/project1/SimpleTimekeeper3H.png",
    ],
    isHorizontal: false,
    links: {
      github: "https://github.com/ArthurBosch/simple-timekeeper-react",
      live: "https://simple-timekeeper-react.vercel.app/",
    },
  },
  {
    id: 1,
    title: "Online Cinema",
    paragraph:
      "Stylish and extremely fast clone of Netflix. Developed using full power of NextJS SSR features, Tailwind CSS styling and NestJS as a back-end technology.",
    icons: ["NextJS", "NestJS", "Mongo", "Heroku", "Vercel"],

    imageSrcs: [
      "/mockups/project2/Cinema1.png",
      "/mockups/project2/Cinema2.png",
      "/mockups/project2/Cinema3.png",
    ],
    isHorizontal: true,
    links: {
      github: "https://github.com/ArthurBosch/online-cinema-front",
      live: "https://arthur-bosch-cinema.vercel.app/",
    },
  },
];
