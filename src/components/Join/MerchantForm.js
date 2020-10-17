import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { venues } from '../../data/venues';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { weeks } from '../../data/weeks';
import TextField from '@material-ui/core/TextField';

const themes = [...new Set(weeks.map(week => week.theme))];

function MerchantForm({ onVenueChange }) {
  const [theme, setTheme] = useState(undefined);
  const [venue, setVenue] = useState(venues[0]);

  return (
    <>
      <TextField label="Business name" />
      <TextField label="Business description" multiline rows={4} />
      <FormControl>
        <InputLabel>Theme</InputLabel>
        <Select
          value={theme}
          onChange={e => setTheme(e.target.value)}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            themes.map((theme, i) => (
              <MenuItem key={i} value={i}>{theme}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Venue</InputLabel>
        <Select
          value={venues.indexOf(venue)}
          onChange={e => {
            const venueIndex = +e.target.value;
            const venue = venues[venueIndex];
            setVenue(venue);
            onVenueChange(venue);
          }}>
          {
            venues.map((venue, i) => (
              <MenuItem key={i} value={i}>{venue.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
      <TextField label="Email" />
      <InputLabel style={{ marginBottom: '.5rem' }}>Proof of ownership</InputLabel>
      <FormControl style={{ width: '12rem' }}>
        <input accept="application/pdf" style={{ display: 'none' }} id="file" multiple type="file" />
        <label htmlFor="file">
          <div className="button small">
            Upload Documents
          </div>
        </label>
      </FormControl>
      <TextField label="Notes" multiline rows={4} />
    </>
  );
}

export default MerchantForm;
