import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';

function Filter() {
  const [value, setValue] = React.useState<Date | null>(new Date());
  const [program, setProgram] = React.useState('');
  const [type, setType] = React.useState('');

  const handleProgramChange = React.useCallback((value: SelectChangeEvent<string>) => setProgram(value.target.value), [value]);
  const handleTypeChange = React.useCallback((value: SelectChangeEvent<string>) => setType(value.target.value), [value]);

  return (
    <Paper sx={{p: 1}}>
      <Typography>Фильтры</Typography>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <StaticDatePicker

          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Направление</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={program}
          label="Направление"
          onChange={handleProgramChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{mt: 2}}>
        <InputLabel id="demo-simple-select-label">Способ участия</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Способ участия"
          onChange={handleTypeChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Paper>
  );
}
export default Filter;
