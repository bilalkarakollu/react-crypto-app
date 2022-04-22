import React from 'react';
import { Input, Box } from '@chakra-ui/react';
import { ChangeEvent } from 'react';


interface SearchProps {
    search: string;
    onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = (props:SearchProps) => {
  
  const { search, onSearch } = props;

  return (
    <Box p={5} my={5} borderRadius={10} background={'#1b1b1c'}>
      <Input borderColor={'black'} placeholder={'Search'} value={search} onChange={onSearch}/>
    </Box>
  )
}

export default React.memo(Search);
