import { Paginator } from "@kqhasaki/birdperson";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

export type PaginatedGalleryPropsType<T, S> = {
  initialPage?: number;
  pageSize: number;
  getTotalPage: (pageSize: number, result: T) => number;
  getPaginatedResult: (page: number, pageSize: number) => Promise<T>;
  getDataFromPaginatedResult: (paginatedResult: T) => S[];
  CardComponent: (props: { data: S }) => ReactElement;
  getCardKey?: (data: S) => string | number;
};

export function PaginatedGallery<T, S>({
  pageSize,
  initialPage = 0,
  getTotalPage,
  getPaginatedResult,
  CardComponent,
  getDataFromPaginatedResult,
  getCardKey,
}: PaginatedGalleryPropsType<T, S>): ReactElement {
  const [paginatedData, setPaginatedData] = useState<T>();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = useMemo(() => {
    const page = searchParams.get("page");
    if (page == undefined || isNaN(parseInt(page))) {
      return initialPage;
    } else {
      return parseInt(page);
    }
  }, [searchParams, initialPage]);

  const fetchData = useCallback(async () => {
    const data = await getPaginatedResult(currentPage, pageSize);
    setPaginatedData(data);
  }, [currentPage, getPaginatedResult, pageSize]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const changeCurrentPage = useCallback(
    (page: number) => {
      setSearchParams({
        page: page.toString(),
      });
    },
    [setSearchParams]
  );

  return (
    <main
      style={{
        height: "100%",
        width: "100%",
        minHeight: "500px",
        minWidth: "500px",
        overflowY: "auto",
        overflowX: "hidden",
        paddingBottom: "60px",
      }}
    >
      {paginatedData ? (
        <>
          <div
            style={{
              display: "flex",
              maxWidth: 2560,
              margin: "auto",
              flexFlow: "row wrap",
              padding: "40px 30px",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
            }}
          >
            {getDataFromPaginatedResult(paginatedData).map((data, idx) => (
              <CardComponent key={getCardKey?.(data) ?? idx} data={data} />
            ))}
          </div>
          <Paginator
            current={currentPage}
            total={getTotalPage(pageSize, paginatedData)}
            onChangePage={changeCurrentPage}
          />
        </>
      ) : (
        "loading..."
      )}
    </main>
  );
}
