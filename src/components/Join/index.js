import React, { useState } from 'react';
import './stylesheet.scss';
import Blueprint3D from '../Blueprint3D';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import MerchantForm from './MerchantForm';
import RetailSpaceOwnerForm from './RetailSpaceOwnerForm';
import { Link } from 'react-router-dom';
import { venues } from '../../data/venues';

const TYPE_MERCHANT = 0;
const TYPE_VENUE = 1;

function Join() {
  const [type, setType] = useState(TYPE_MERCHANT);
  const [submitted, setSubmitted] = useState(false);
  const [venue, setVenue] = useState(venues[0]);

  return (
    <div className="Join">
      <div className="content">
        {
          submitted ? (
            <div className="form">
              <Link to="/" className="logo" />
              <div className="thanks">
                Thank you for your interest in joining us as {type === 0 ? 'an online merchant' : 'a retail space owner'}. We will review your application and reach out to you within 5 business days.
              </div>
            </div>
          ) : (
            <div className="form">
              <Link to="/" className="logo" />
              <div className="title">
                Join us
              </div>
              <FormControl component="fieldset">
                <RadioGroup value={type} onChange={e => setType(+e.target.value)}>
                  <FormControlLabel value={TYPE_MERCHANT} control={<Radio />} label="As an online merchant." />
                  <FormControlLabel value={TYPE_VENUE} control={<Radio />} label="As a retail space owner." />
                </RadioGroup>
              </FormControl>
              {
                ~type ? (
                  type === TYPE_MERCHANT
                    ? <MerchantForm onVenueChange={setVenue} />
                    : <RetailSpaceOwnerForm />
                ) : null
              }
              {
                ~type ? (
                  <button onClick={() => setSubmitted(true)}>Submit application</button>
                ) : null
              }
            </div>
          )
        }
      </div>
      <Blueprint3D floor={type} key={venue.name} />
    </div>
  );
}

export default Join;
