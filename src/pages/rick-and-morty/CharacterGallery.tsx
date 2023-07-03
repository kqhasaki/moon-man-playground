import { Paginator } from "@kqhasaki/birdperson";
import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  Character,
  getPaginatedCharacters,
} from "../../api/rick-and-morty/character";
import { PaginatedResult } from "../../api/rick-and-morty/types";
import { CharacterCard } from "../../components/rick-and-morty/CharacterCard";
import { makeStyles } from "../../components/rick-and-morty/theme";

const useStyles = makeStyles()(() => ({
  mainWrapper: {
    height: "100%",
    width: "100%",
    overflowX: "hidden",
    overflowY: "auto",
    padding: 50,
  },
  cardWrapper: {
    display: "flex",
    flexFlow: "row wrap",
    gap: 20,
    padding: "40px 30px",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 2560,
    margin: "auto",
  },
}));

export default function CharacterGallery(): ReactElement {
  const { classes } = useStyles();
  const [paginatedCharacters, setPagninatedCharacters] =
    useState<PaginatedResult<Character>>();
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
    const data = await getPaginatedCharacters(currentPage);
    setPagninatedCharacters(data);
  }, [currentPage]);

  const changeCurrentPage = useCallback((page: number) => {
    setSearchParams({ page: page.toString() });
  }, []);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  return (
    <main className={classes.mainWrapper}>
      {paginatedCharacters ? (
        <>
          <div className={classes.cardWrapper}>
            {paginatedCharacters.results.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          <Paginator
            total={paginatedCharacters.info.pages}
            current={currentPage}
            onChangePage={changeCurrentPage}
          />
        </>
      ) : (
        "loading..."
      )}
    </main>
  );
}
