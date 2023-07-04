import { ReactElement } from "react";

import { PaginatedResult } from "../../api/elden-ring/types";
import { Weapon, getPaginatedWeapons } from "../../api/elden-ring/weapon";
import { PaginatedGallery } from "../../components/common/PaginatedGallery";
import { WeaponCard } from "../../components/elden-ring/WeaponCard";

export default function WeaponGallery(): ReactElement {
  return (
    <>
      <PaginatedGallery
        CardComponent={WeaponCard}
        initialPage={1}
        getCardKey={(data) => data.id}
        pageSize={40}
        getDataFromPaginatedResult={(result: PaginatedResult<Weapon>) =>
          result.data
        }
        getPaginatedResult={getPaginatedWeapons}
        getTotalPage={(pageSize, result) => Math.floor(result.total / pageSize)}
      />
    </>
  );
}
