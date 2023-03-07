import React, { useState, useEffect } from "react";
import { Slider, Box } from "@mui/material";

export default function RangeSlider({ value, setValue, filter, setFilter }) {
  
  useEffect(() => {
    function filterByPrice(min, max) {
      const filtered = filter.filter(product => {
        return product.price >= min && product.price <= max;
      });
      setFilter(filtered);
    }

    filterByPrice(value[0], value[1])
  }, [value]);

  
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