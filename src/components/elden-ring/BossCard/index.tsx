import { Image } from "@kqhasaki/birdperson";
import { ReactElement } from "react";

import { Boss } from "../../../api/elden-ring/boss";

type BossCardPropsType = {
  data: Boss;
};
export function BossCard({ data }: BossCardPropsType): ReactElement {
  return (
    <div>
      <div>{data.name}</div>
      <Image src={data.image} alt={data.image} />
    </div>
  );
}
