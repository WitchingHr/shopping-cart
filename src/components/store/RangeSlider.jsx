import React, { useEffect } from "react";
import { Slider, Box } from "@mui/material";

export default function RangeSlider({ value, setValue, deptFilter, setFilter }) {
  
  // Update filter when slider value changes
  useEffect(() => {
    function filterByPrice(min, max) {
      const filtered = deptFilter.filter(product => {
        return product.price >= min && product.price <= max;
      });
      setFilter(filtered);
    }
    filterByPrice(value[0], value[1])
  }, [value]);

  
  // Update value on slider change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 165 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
      />
    </Box>
  );
}