import { useState, useEffect, useCallback } from "react";
import { CoinType } from "../../types/coin";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
import Loading from "../Loading";
import Search from "../Search";
import CoinList from "./CoinList";

const CoinTable = () => {
  const [coins, setCoins] = useState<CoinType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  const getCoins = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&price_change_percentage=1h%2C24h%2C7d"
      );
      setCoins(response.data);
      setIsLoading(false);
    } catch (e: any) {
      setError(e.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCoins();
  }, []);

  return (
    <>
      <Search search={search} onSearch={handleChange} />
      <TableContainer>
        <Table variant="unstyled">
          <TableCaption>bilal karakollu</TableCaption>
          <Thead>
            <Tr>
              <Th>Coin</Th>
              <Th>Price</Th>
              <Th>1h</Th>
              <Th>24h</Th>
              <Th>7d</Th>
              <Th>24h Volume</Th>
              <Th>Mkt Cap</Th>
              <Th>Last 7 Days</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Loading loading={isLoading} error={error}>
              <CoinList search={search} coins={coins} />
            </Loading>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CoinTable;
