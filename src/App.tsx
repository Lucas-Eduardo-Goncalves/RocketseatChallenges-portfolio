import { GlobalStyles } from "./global";

import {
  BsFillBagFill,
  BsGithub,
  BsGlobe,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { MdOutlineMailOutline, MdWork } from "react-icons/md";
import { Post, Project } from "./components";

import { Grid } from "./styles/Grid";
import {
  AvatarArea,
  MyProjects,
  Links,
  RecentPosts,
  Tecnologies,
} from "./styles/components";

export function App() {
  const avatarURL = "https://avatars.githubusercontent.com/u/92813658?v=4";

  return (
    <>
      <GlobalStyles />

      <Grid>
        <AvatarArea className="blockComponent">
          <img src={avatarURL} alt="Foto de avatar" />
          <h1>Lucas Gonçalves</h1>
          <p>Fullstack Developer</p>
        </AvatarArea>

        <MyProjects className="blockComponent">
          <h4>My Projects</h4>
          <a href="#">veja todos</a>
        </MyProjects>

        <Project
          data={{
            name: "my-onix",
            lenguage: "Javasctript",
            stars: 100,
            branchs: 100,
            description:
              "Consulte os códigos de erro que aparecem no painel do veículo Onix.",
          }}
          className="blockComponent"
          style={{ gridColumn: "2", gridRow: "2 / 4" }}
        />

        <Project
          data={{
            name: "my-onix2",
            lenguage: "Javasctript",
            stars: 100,
            branchs: 100,
            description:
              "Consulte os códigos de erro que aparecem no painel do veículo Onix.",
          }}
          className="blockComponent"
          style={{ gridColumn: "3", gridRow: "2 / 4" }}
        />

        <Links className="blockComponent">
          <div>
            <MdWork />
            Freelancer
          </div>
          <div>
            <BsGithub />
            <a href="#" target="_blank">
              lucas-eduardo-goncalves
            </a>
          </div>
          <div>
            <BsLinkedin />
            <a href="#" target="_blank">
              LucasEduGoncalves
            </a>
          </div>
          <div>
            <BsTwitter />
            <a href="#" target="_blank">
              Lucas Gonçalves
            </a>
          </div>
          <div>
            <BsGlobe />
            <a href="#" target="_blank">
              https://lucasegoncalves.dev
            </a>
          </div>
          <div>
            <MdOutlineMailOutline />
            <a href="#" target="_blank">
              lucasedugoncalves123@gmail.com
            </a>
          </div>
        </Links>

        <RecentPosts className="blockComponent">
          <h4>Recent Posts</h4>
          <a href="#">veja todos</a>
        </RecentPosts>

        <Post
          imageURL={avatarURL}
          index={1}
          data={{
            description: "Um projeto pika",
            lastModification: "2 last years",
            tags: ["react", "typescript"],
            title: "ProjectScrum",
          }}
        />

        <Tecnologies className="blockComponent">
          <h2>Linguagens</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
          <h2>Ferramentas</h2>
          <ul>
            <li>GIT</li>
            <li>Github</li>
            <li>ReactJS</li>
            <li>NodeJS</li>
            <li>NextJS</li>
            <li>RemixJS</li>
            <li>React Native</li>
          </ul>
          <h2>ORM's / Database</h2>
          <ul>
            <li>Prisma</li>
            <li>TypeORM</li>
            <li>Firebase</li>
            <li>Supabase</li>
            <li>MongoDB</li>
          </ul>
          <h2>Estilização / ui</h2>
          <ul>
            <li>MUI</li>
            <li>Tailwind</li>
            <li>Stitches</li>
            <li>ChakraUI</li>
            <li>Ant Design</li>
            <li>Framer Motion</li>
            <li>Styled Components</li>
          </ul>
          <h2>Hospedagem</h2>
          <ul>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>Fly.io</li>
          </ul>
          <h2>Utilidades</h2>
          <ul>
            <li>Scrum</li>
            <li>Stripe</li>
            <li>Linux</li>
            <li>Vite</li>
            <li>React Query</li>
          </ul>
        </Tecnologies>
        <Post
          imageURL={avatarURL}
          index={1}
          data={{
            description: "Um projeto pika",
            lastModification: "2 last years",
            tags: ["react", "typescript"],
            title: "ProjectScrum",
          }}
        />
        <Post
          imageURL={avatarURL}
          index={1}
          data={{
            description: "Um projeto pika",
            lastModification: "2 last years",
            tags: ["react", "typescript"],
            title: "ProjectScrum",
          }}
        />
        <Post
          imageURL={avatarURL}
          index={1}
          data={{
            description: "Um projeto pika",
            lastModification: "2 last years",
            tags: ["react", "typescript"],
            title: "ProjectScrum",
          }}
        />
      </Grid>
    </>
  );
}
