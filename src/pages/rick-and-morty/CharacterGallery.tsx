import { ReactElement } from "react";

import {
  Character,
  getPaginatedCharacters,
} from "../../api/rick-and-morty/character";
import { PaginatedResult } from "../../api/rick-and-morty/types";
import { PaginatedGallery } from "../../components/common/PaginatedGallery";
import { CharacterCard } from "../../components/rick-and-morty/CharacterCard";
import { makeStyles } from "../../components/rick-and-morty/theme";

const useStyles = makeStyles()((theme) => ({
  layout: {
    padding: 20,
    [theme.breakpoints.md]: {
      padding: 0,
    },
    "& .paginated-content": {
      display: "flex",
      flexFlow: "row wrap",
      gap: 12,
      marginBottom: 20,
      justifyContent: "center",
    },
  },
}));

export default function CharacterGallery(): ReactElement {
  const { classes } = useStyles();

  return (
    <>
      <PaginatedGallery
        CardComponent={CharacterCard}
        initialPage={1}
        getCardKey={(data) => data.id}
        pageSize={20}
        getDataFromPaginatedResult={(result: PaginatedResult<Character>) =>
          result.results
        }
        getPaginatedResult={getPaginatedCharacters}
        getTotalPage={(_, result) => Math.floor(result.info.pages)}
        className={classes.layout}
      />
    </>
  );
}
