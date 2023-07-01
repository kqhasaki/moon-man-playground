import { ReactElement, useEffect, useState } from "react";
import {
  getPaginatedCharacters,
  Character,
} from "../../api/rick-and-morty/character";
import { PaginatedResult } from "../../api/rick-and-morty/types";
import { CharacterCard } from "../../components/rick-and-morty/CharacterCard";
import { makeStyles } from "../../components/rick-and-morty/theme";

const useStyles = makeStyles()((theme) => ({
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

  useEffect(() => {
    void getPaginatedCharacters(10).then((data) =>
      setPagninatedCharacters(data)
    );
  }, []);

  return (
    <main className={classes.mainWrapper}>
      {paginatedCharacters ? (
        <div className={classes.cardWrapper}>
          {paginatedCharacters.results.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      ) : (
        "loading..."
      )}
    </main>
  );
}
