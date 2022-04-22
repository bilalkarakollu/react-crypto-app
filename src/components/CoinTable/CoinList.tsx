import React from "react";
import { CoinType } from "../../types/coin";
import TableItem from "./TableItem";

interface CoinListProps {
    coins: CoinType[];
    search: string;
}

const CoinList = (props:CoinListProps) => {
    const { coins, search } = props;
  return (
    <>
      {coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase())).map(coin => (
          <TableItem key={coin.id} coin={coin} />
        ))}
    </>
  );
};

export default React.memo(CoinList);
