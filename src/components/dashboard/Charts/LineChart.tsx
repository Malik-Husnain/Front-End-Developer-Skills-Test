import { alpha, useTheme } from "@mui/material";

// LineChart component (dummy visualization)
const LineChart = () => {
  const theme = useTheme();

  return (
    <svg width="100%" height="200" viewBox="0 0 600 200">
      <path
        d="M0,150 C100,120 200,180 300,80 C400,10 500,100 600,70"
        fill="none"
        stroke={theme.palette.primary.main}
        strokeWidth="3"
      />
      <path
        d="M0,170 C100,150 200,190 300,100 C400,40 500,130 600,100"
        fill="none"
        stroke={alpha(theme.palette.primary.main, 0.3)}
        strokeWidth="3"
      />
      <path
        d="M0,150 C100,120 200,180 300,80 C400,10 500,100 600,70"
        fill={`url(#${theme.palette.primary.main}Gradient)`}
        fillOpacity="0.2"
        stroke="none"
      />
      <defs>
        <linearGradient
          id={`${theme.palette.primary.main}Gradient`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor={theme.palette.primary.main}
            stopOpacity="0.5"
          />
          <stop
            offset="100%"
            stopColor={theme.palette.primary.main}
            stopOpacity="0"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LineChart;
