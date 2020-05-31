import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { HeaderWrapper } from "./Header.css";

// Components
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  select: {
    width: "80%",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <HeaderWrapper>
      <Grid container>
        <Grid item xs={3}>
          <Select
            className={classes.select}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            placeholder="Campo 1"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={3}>
          <Select
            className={classes.select}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            placeholder="Campo 2"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </HeaderWrapper>
  );
};

export default Header;
