import { MdOutlineFolder, MdStarOutline } from "react-icons/md";
import { IoMdGitBranch } from "react-icons/io";
import { ProjectArea } from "./styles";
import type { CSSProperties } from "react";

interface IProjectProps {
  data: {
    name: string;
    description: string;
    stars: number;
    branchs: number;
    lenguage: string;
  };
  className?: string;
  style?: CSSProperties;
}

export function Project({ data, className, style }: IProjectProps) {
  return (
    <ProjectArea className={className} style={style}>
      <h3>
        <MdOutlineFolder />
        {data.name}
      </h3>

      <p>{data.description}</p>

      <aside>
        <div className="firstChild">
          <p>
            <MdStarOutline />
            {data.stars}
          </p>

          <p>
            <IoMdGitBranch />
            {data.branchs}
          </p>
        </div>

        <div className="lastChild">
          <span />
          {data.lenguage}
        </div>
      </aside>
    </ProjectArea>
  );
}
