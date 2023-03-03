import { Stack, Chip } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { filterParams } from 'data/filter-params';

export default function Filter({ setSearchParams }) {
  return (
    <Stack
      direction="row"
      spacing={1}
      mb={2}
      display={{ xs: 'none', md: 'flex' }}
    >
      <Chip
        label="by price high to low"
        icon={<KeyboardArrowDownRoundedIcon />}
        onClick={() => setSearchParams({ sort: filterParams.byPriceDown })}
      />
      <Chip
        label="by price low to high"
        icon={<KeyboardArrowUpRoundedIcon />}
        onClick={() => setSearchParams({ sort: filterParams.byPriceUp })}
      />
      <Chip
        label="by rating high to low"
        icon={<StarRateRoundedIcon />}
        onClick={() => setSearchParams({ sort: filterParams.byRatingDown })}
      />
      <Chip
        label="by rating low to high"
        icon={<StarOutlineRoundedIcon />}
        onClick={() => setSearchParams({ sort: filterParams.byRatingUp })}
      />
    </Stack>
  );
}
