import { ReactElement } from "react";

import {
  Character,
  getPaginatedCharacters,
} from "../../api/rick-and-morty/character";
import { PaginatedResult } from "../../api/rick-and-morty/types";
import { PaginatedGallery } from "../../components/common/PaginatedGallery";
import { CharacterCard } from "../../components/rick-and-morty/CharacterCard";

export default function CharacterGallery(): ReactElement {
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
      />
    </>
  );
}
