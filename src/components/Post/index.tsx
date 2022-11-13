import { PostArea } from "./styles";

interface IPostProps {
  index: number;
  imageURL: string;

  data: {
    title: string;
    lastModification: string;
    description: string;
    tags: string[];
  };
}

export function Post({ index, imageURL, data }: IPostProps) {
  return (
    <PostArea className="blockComponent">
      <img src={imageURL} alt="uma imagem" />

      <div>
        <div>
          <h4>{data.title}</h4>
          <span>{data.lastModification}</span>
        </div>

        <div>
          <p>{data.description}</p>
          <p className="lastChild">
            {data.tags.map((item) => (
              <span>{"#" + item}</span>
            ))}
          </p>
        </div>
      </div>
    </PostArea>
  );
}
