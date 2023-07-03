import { Paginator } from "@kqhasaki/birdperson";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Boss, getPaginatedBosses } from "../../api/elden-ring/boss";
import { PaginatedResult } from "../../api/elden-ring/types";
import { BossCard } from "../../components/elden-ring/BossCard";

export default function BossGallery(): ReactElement {
  const [paginatedBosses, setPaginatedBosses] =
    useState<PaginatedResult<Boss>>();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = useMemo(() => {
    const page = searchParams.get("page");
    if (page == undefined || isNaN(parseInt(page))) {
      return 1;
    } else {
      return parseInt(page);
    }
  }, [searchParams]);

  const fetchData = useCallback(async () => {
    if (currentPage == undefined) {
      return;
    }
    const data = await getPaginatedBosses({ page: currentPage });
    setPaginatedBosses(data);
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const changeCurrentPage = useCallback((page: number) => {
    setSearchParams({ page: page.toString() });
  }, []);

  return (
    <main>
      {paginatedBosses ? (
        <>
          <div>
            {paginatedBosses.data.map((boss) => (
              <BossCard key={boss.id} boss={boss} />
            ))}
          </div>
          <Paginator
            total={paginatedBosses.count / 20}
            current={currentPage}
            onChangePage={changeCurrentPage}
          />
        </>
      ) : (
        "Loading..."
      )}
    </main>
  );
}
