import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

function RetailSpaceOwnerForm() {
  return (
    <>
      <TextField label="Venue name" />
      <TextField label="Street address" multiline rows={2} />
      <TextField label="City" />
      <TextField label="State" />
      <TextField label="Zip code" />
      <TextField label="Email" />
      <InputLabel  style={{ marginBottom: '.5rem' }}>Proof of ownership</InputLabel>
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

export default RetailSpaceOwnerForm;
