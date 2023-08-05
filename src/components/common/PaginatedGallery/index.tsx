import { Paginator } from "@kqhasaki/birdperson";
import {
  ReactElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";

export type PaginatedGalleryPropsType<T, S> = {
  initialPage?: number;
  pageSize: number;
  getTotalPage: (pageSize: number, result: T) => number;
  getPaginatedResult: (page: number, pageSize: number) => Promise<T>;
  getDataFromPaginatedResult: (paginatedResult: T) => S[];
  CardComponent: (props: { data: S }) => ReactElement;
  getCardKey?: (data: S) => string | number;
  className?: string;
};

export function PaginatedGallery<T, S>({
  pageSize,
  initialPage = 0,
  getTotalPage,
  getPaginatedResult,
  CardComponent,
  getDataFromPaginatedResult,
  getCardKey,
  className,
}: PaginatedGalleryPropsType<T, S>): ReactElement {
  const [paginatedData, setPaginatedData] = useState<T>();
  const [searchParams, setSearchParams] = useSearchParams();
  const mainWrapper = useRef<HTMLElement>(null);

  const currentPage = useMemo(() => {
    const page = searchParams.get("page");
    if (page == undefined || isNaN(parseInt(page))) {
      return initialPage;
    } else {
      return parseInt(page);
    }
  }, [searchParams, initialPage]);

  useLayoutEffect(() => {
    mainWrapper.current!.scrollTop = 0;
  }, [currentPage]);

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
      ref={mainWrapper}
      className={className}
      style={{
        height: "100%",
        width: "100%",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {paginatedData ? (
        <>
          <div className="paginated-content">
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
