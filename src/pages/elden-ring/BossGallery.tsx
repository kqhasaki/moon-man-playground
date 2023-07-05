import { ReactElement } from "react";

import { Boss, getPaginatedBosses } from "../../api/elden-ring/boss";
import { PaginatedResult } from "../../api/elden-ring/types";
import { PaginatedGallery } from "../../components/common/PaginatedGallery";
import { BossCard } from "../../components/elden-ring/BossCard";

export default function BossGallery(): ReactElement {
  return (
    <>
      <PaginatedGallery
        CardComponent={BossCard}
        initialPage={1}
        getCardKey={(data) => data.id}
        pageSize={20}
        getDataFromPaginatedResult={(result: PaginatedResult<Boss>) =>
          result.data
        }
        getPaginatedResult={getPaginatedBosses}
        getTotalPage={(pageSize, result) => Math.floor(result.total / pageSize)}
      />
    </>
  );
}
