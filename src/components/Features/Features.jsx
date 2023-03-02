import { Stack, Typography, Paper, Box, Grid } from '@mui/material';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import AirportShuttleRoundedIcon from '@mui/icons-material/AirportShuttleRounded';
import AltRouteRoundedIcon from '@mui/icons-material/AltRouteRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';

const features = [
  {
    title: 'Fresh ingredients',
    icon: HistoryRoundedIcon,
    description:
      'Our pizzas are made with the freshest ingredients to ensure the highest quality and taste',
  },
  {
    title: 'Fast delivery',
    icon: AirportShuttleRoundedIcon,
    description:
      'We offer speedy delivery to ensure that your pizza arrives hot and fresh, right to your door',
  },
  {
    title: 'Customizable options',
    icon: AltRouteRoundedIcon,
    description:
      'With a variety of toppings and crusts to choose from, you can customize your pizza to your liking',
  },
  {
    title: 'Affordable prices',
    icon: AttachMoneyRoundedIcon,
    description:
      'We offer delicious and high-quality pizzas at an affordable price, so you can enjoy a great meal without breaking the bank',
  },
];

export default function Features() {
  return (
    <Box>
      <Typography variant="h4" textAlign="center" mb={4}>
        Our features
      </Typography>
      <Grid container component="ul" spacing={2}>
        {features.map(({ title, icon: Icon, description }) => (
          <Grid item key={title} component="li" xs={12} sm={6} md={3}>
            <Paper>
              <Stack alignItems="center" spacing={2} p={4}>
                <Icon color="primary" sx={{ fontSize: 80 }} />
                <Typography variant="h6">{title}</Typography>
                <Typography>{description}</Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
