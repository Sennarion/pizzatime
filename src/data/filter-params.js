import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

export const filterParams = {
  byPriceDown: 'by-price-down',
  byPriceUp: 'by-price-up',
  byRatingDown: 'by-rating-down',
  byRatingUp: 'by-rating-up',
};

export const filters = [
  {
    label: 'by price high to low',
    icon: KeyboardArrowDownRoundedIcon,
    value: filterParams.byPriceDown,
  },
  {
    label: 'by price low to high',
    icon: KeyboardArrowUpRoundedIcon,
    value: filterParams.byPriceUp,
  },
  {
    label: 'by rating high to low',
    icon: StarOutlineRoundedIcon,
    value: filterParams.byRatingDown,
  },
  {
    label: 'by rating low to high',
    icon: StarRateRoundedIcon,
    value: filterParams.byRatingUp,
  },
];
