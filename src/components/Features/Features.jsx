import { Stack, Typography, Paper, Box, Grid } from '@mui/material';
import { features } from 'data/features';

export default function Features() {
  return (
    <Box mb={8}>
      <Typography variant="h4" textAlign="center" mb={4}>
        Our features
      </Typography>
      <Grid container component="ul" spacing={2}>
        {features.map(({ title, icon: Icon, description }) => (
          <Grid item key={title} component="li" xs={12} sm={6} md={3}>
            <Paper sx={{ height: '100%' }}>
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
