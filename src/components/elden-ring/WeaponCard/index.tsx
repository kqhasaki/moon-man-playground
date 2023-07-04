import { Image } from "@kqhasaki/birdperson";
import { ReactElement } from "react";

import { Weapon } from "../../../api/elden-ring/weapon";

type WeaponCardPropsType = {
  data: Weapon;
};

export function WeaponCard({ data }: WeaponCardPropsType): ReactElement {
  return <Image src={data.image} alt={data.image} />;
}
