import { Stack, Chip } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

export default function Filter() {
  return (
    <Stack direction="row" spacing={1} mb={2}>
      <Chip
        label="by price high to low"
        icon={<KeyboardArrowDownRoundedIcon />}
      />
      <Chip
        label="by price low to high"
        icon={<KeyboardArrowUpRoundedIcon />}
      />
      <Chip label="by rating high to low" icon={<StarRateRoundedIcon />} />
      <Chip label="by rating low to high" icon={<StarOutlineRoundedIcon />} />
    </Stack>
  );
}
