import { useState } from 'react';
import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  Box,
  MenuItem,
  Chip,
} from '@mui/material';
import { filters } from 'data/filter-params';

export default function Filter({ setSearchParams }) {
  const [value, setValue] = useState('');

  const onSelectChange = e => {
    setValue(e.target.value);
    setSearchParams({ sort: e.target.value });
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        mb={2}
        display={{ xs: 'none', md: 'flex' }}
      >
        {filters.map(({ label, icon: Icon, value }) => (
          <Chip
            key={label}
            label={label}
            icon={<Icon />}
            onClick={() => setSearchParams({ sort: value })}
          />
        ))}
      </Stack>
      <Box display={{ xs: 'block', md: 'none' }} marginY={2}>
        <FormControl fullWidth>
          <InputLabel id="select-label">Sort by</InputLabel>
          <Select
            labelId="select-label"
            value={value}
            label="Sort by"
            onChange={onSelectChange}
          >
            {filters.map(({ label, value }) => (
              <MenuItem key={label} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
