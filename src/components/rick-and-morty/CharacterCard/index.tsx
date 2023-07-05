import { Image } from "@kqhasaki/birdperson";
import { ReactElement, ReactNode } from "react";

import { Character } from "../../../api/rick-and-morty/character";
import { makeStyles } from "../theme";

const useStyles = makeStyles()((theme) => ({
  cardWrapper: {
    borderRadius: 10,
    width: 620,
    height: 240,
    background: theme.palette.background.paper,
    overflow: "hidden",
    display: "flex",
  },
  descWrapper: {
    padding: 16,
    overflowX: "hidden",
    overflowY: "auto",
  },
  characterName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  characterStatus: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  characterStatusIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  characterDescItem: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  characterDescItemLabel: {
    color: theme.palette.text.secondary,
    fontWeight: "bold",
  },
  characterDescItemValue: {},
  characterGender: {
    color: theme.palette.text.secondary,
    marginLeft: 2,
  },
}));

type CharacterCardPropsType = {
  data: Character;
};

export function CharacterCard({ data }: CharacterCardPropsType): ReactElement {
  const character = data;
  const { classes } = useStyles();

  return (
    <article className={classes.cardWrapper}>
      <Image
        src={character.image}
        alt={character.image}
        style={{ height: "100%", width: "none", aspectRatio: "1 / 1" }}
      />
      <div className={classes.descWrapper}>
        <div className={classes.characterName}>{character.name}</div>
        <div className={classes.characterStatus}>
          <div
            className={classes.characterStatusIndicator}
            style={{
              backgroundColor: getStatusIndicatorColor(character.status),
            }}
          ></div>
          {character.status} - {character.species}{" "}
          <span className={classes.characterGender}>({character.gender})</span>
        </div>
        <CharacterDescItem label="From" value={character.origin.name} />
        <CharacterDescItem
          label="Last known location"
          value={character.location.name}
        />
        <CharacterDescItem label="First seen in" value={character.episode[0]} />
      </div>
    </article>
  );
}

function getStatusIndicatorColor(status: Character["status"]): string {
  let exhaustiveCheck: never;
  switch (status) {
    case "Alive":
      return "green";
    case "Dead":
      return "red";
    case "unknown":
      return "grey";
    default:
      exhaustiveCheck = status;
      return exhaustiveCheck;
  }
}

function CharacterDescItem({
  label,
  value,
}: {
  label: ReactNode;
  value: ReactNode;
}): ReactElement {
  const { classes } = useStyles();

  return (
    <div className={classes.characterDescItem}>
      <div className={classes.characterDescItemLabel}>{label}</div>
      <div className={classes.characterDescItemValue}>{value}</div>
    </div>
  );
}
