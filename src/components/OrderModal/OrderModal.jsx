import { useState } from 'react';
import { Dialog, Stack, TextField, Button, Typography } from '@mui/material';

export default function OrderModal({ isOpen, onClose, onOrder }) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    onOrder();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Stack
        p={4}
        borderRadius={2}
        spacing={2}
        boxShadow={{ sm: 2 }}
        width={{ xs: 340, sm: 400 }}
        bgcolor="common.white"
      >
        <form onSubmit={onSubmit}>
          <Stack spacing={2}>
            <Typography variant="h5" textAlign="center">
              Create order
            </Typography>
            <TextField
              type="text"
              name="name"
              label="Name"
              variant="outlined"
              size="small"
              fullWidth
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <TextField
              type="tel"
              name="number"
              label="Phone Number"
              variant="outlined"
              size="small"
              fullWidth
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Order
            </Button>
            <Button variant="outlined" fullWidth onClick={onClose}>
              Cancel
            </Button>
          </Stack>
        </form>
      </Stack>
    </Dialog>
  );
}
