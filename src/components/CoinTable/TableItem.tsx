import React from "react";
import { Tr, Td, Image, Flex, Text } from "@chakra-ui/react";
import { CoinType } from "../../types/coin";
import { currencyFormat } from "../../utils/currencyFormat";
import { percentageNumber, percentColor, sparklineURL } from "../../utils/percentageNumber";

interface TableItemProps {
  coin: CoinType;
}

const TableItem = (props: TableItemProps) => {
  const { coin } = props;
    
  return (
    <Tr fontSize={14} borderBottom={'1px solid'} borderColor={'cyan.100'}>
      <Td>
        <Flex alignItems={'center'}>
        <Image mr={2} width={"1.25rem"} src={coin.image} />
          <Text fontWeight={'medium'}>{coin.name}</Text>
          <Text ml={1} fontWeight={'medium'} textTransform={'uppercase'}>({coin.symbol})</Text>
        </Flex>
      </Td>
      <Td>{currencyFormat(coin.current_price)}</Td>
      <Td color={percentColor(coin.price_change_percentage_1h_in_currency)}>{percentageNumber(coin.price_change_percentage_1h_in_currency)}</Td>
      <Td color={percentColor(coin.price_change_percentage_24h_in_currency)}>{percentageNumber(coin.price_change_percentage_24h_in_currency)}</Td>
      <Td color={percentColor(coin.price_change_percentage_7d_in_currency)}>{percentageNumber(coin.price_change_percentage_7d_in_currency)}</Td>
      <Td>{currencyFormat(coin.total_volume)}</Td>
      <Td>{currencyFormat(coin.market_cap)}</Td>
      <Td><Image height={10} src={sparklineURL(coin.image)} /></Td>
    </Tr>
  );
};

export default React.memo(TableItem);
