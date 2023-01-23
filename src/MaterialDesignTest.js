import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

class MaterialDesignTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            country: ''
        }
    }

    onChangeFunc = (e) => {
        console.log(e.target.textContent);
    }

    render() {
        const countries = [
            { code: 'RU', label: 'Russian Federation', phone: '7' },
            { code: 'RW', label: 'Rwanda', phone: '250' },
            { code: 'SA', label: 'Saudi Arabia', phone: '966' },
            { code: 'SB', label: 'Solomon Islands', phone: '677' },
            { code: 'SC', label: 'Seychelles', phone: '248' },
          ];
    
        
    
        return (
            <Autocomplete
              onChange={this.onChangeFunc}
              id="country-select-demo"
              sx={{ width: 300 }}
              options={countries}
              autoHighlight
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
                />
              )}
            />
          );
    }
}

export default MaterialDesignTest;