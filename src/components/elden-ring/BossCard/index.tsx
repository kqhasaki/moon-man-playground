import { ReactElement } from "react";

import { Boss } from "../../../api/elden-ring/boss";

type BossCardPropsType = {
  boss: Boss;
};
export function BossCard({ boss }: BossCardPropsType): ReactElement {
  return (
    <div>
      <div>{boss.name}</div>
      <img src={boss.image} alt={boss.image}></img>
    </div>
  );
}
