import React from 'react';
import Slider from './Slider';
import Button from './Button';
import Stack from '@mui/material/Stack';

export const Header = () => {
  return (
    <Stack spacing={2} direction="row">
      <Slider />
      <Button />
    </Stack>
  );
};