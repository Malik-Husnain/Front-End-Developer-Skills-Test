import React from 'react';
import { Box, useTheme } from '@mui/material';

interface WaveBackgroundProps {
  children?: React.ReactNode;
}

const WaveBackground: React.FC<WaveBackgroundProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '300px',
        backgroundColor: theme.palette.primary.main,
        overflow: 'hidden',
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.2) 0, transparent 70%)`,
        },
        '&::before': {
          top: '30%',
          height: '140%',
          borderRadius: '100%',
        },
        '&::after': {
          bottom: '-70%',
          height: '100%',
          borderRadius: '100%',
        },
      }}
    >
      {/* Multiple wave-like effects with SVG */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '50%',
          opacity: 0.5,
        }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
      >
        <defs>
          <path
            id="wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g>
          <use xlinkHref="#wave" x="50" y="0" fill="rgba(255,255,255,0.2)" />
        </g>
      </svg>
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '30%',
          opacity: 0.3,
        }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
      >
        <defs>
          <path
            id="wave2"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g>
          <use xlinkHref="#wave2" x="0" y="3" fill="rgba(255,255,255,0.2)" />
        </g>
      </svg>
      {children}
    </Box>
  );
};

export default WaveBackground; 