import { Box, Typography, ImageList, ImageListItem } from '@mui/material';
import { images } from 'data/images';

export default function Gallery() {
  return (
    <Box>
      <Typography variant="h4" textAlign="center" mb={4}>
        Our gallery
      </Typography>
      <Box borderRadius={6} overflow="hidden">
        <ImageList variant="quilted" cols={4} rowHeight={121}>
          {images.map(item => (
            <ImageListItem
              key={item.imgSmall}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                srcSet={`${item.imgSmall} 1x, ${item.imgLarge} 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
