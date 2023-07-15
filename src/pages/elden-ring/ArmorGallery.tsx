import { ReactElement } from "react";

import { Armor, getPaginatedArmors } from "../../api/elden-ring/armor";
import { PaginatedResult } from "../../api/elden-ring/types";
import { PaginatedGallery } from "../../components/common/PaginatedGallery";
import { ArmorCard } from "../../components/elden-ring/ArmorCard";
import { makeStyles } from "../../components/elden-ring/theme";

const useStyles = makeStyles()(() => ({
  wrapper: {
    height: "100%",
    width: "100%",
    overflowY: "auto",
  },
}));

export default function ArmorGallery(): ReactElement {
  const { classes } = useStyles();

  return (
    <main className={classes.wrapper}>
      <PaginatedGallery
        CardComponent={ArmorCard}
        initialPage={1}
        getCardKey={(data) => data.id}
        pageSize={40}
        getDataFromPaginatedResult={(result: PaginatedResult<Armor>) =>
          result.data
        }
        getPaginatedResult={getPaginatedArmors}
        getTotalPage={(pageSize, result) => Math.floor(result.total / pageSize)}
      />
    </main>
  );
}
