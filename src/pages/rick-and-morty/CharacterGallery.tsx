import { ReactElement, useEffect, useState, useCallback } from "react";
import {
  getPaginatedCharacters,
  Character,
} from "../../api/rick-and-morty/character";
import { PaginatedResult } from "../../api/rick-and-morty/types";
import { CharacterCard } from "../../components/rick-and-morty/CharacterCard";
import { makeStyles } from "../../components/rick-and-morty/theme";
import { Paginator } from "@kqhasaki/birdperson";

const useStyles = makeStyles()(() => ({
  mainWrapper: {
    height: "100%",
    width: "100%",
    overflowX: "hidden",
    overflowY: "auto",
  },
  cardWrapper: {
    display: "flex",
    flexFlow: "row wrap",
    gap: 20,
    padding: "40px 30px",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: 1920,
    margin: "auto",
  },
}));

export default function CharacterGallery(): ReactElement {
  const { classes } = useStyles();
  const [paginatedCharacters, setPagninatedCharacters] =
    useState<PaginatedResult<Character>>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchData = useCallback(async () => {
    if (currentPage == undefined) {
      return;
    }
    const data = await getPaginatedCharacters(currentPage);
    setPagninatedCharacters(data);
  }, [currentPage]);

  const changeCurrentPage = useCallback((page: number) => {
    setCurrentPage(page);
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
