import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Navbar.module.css";
import { countriesName } from "../../Api";


export default function Navbar({ handleCountryChange }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAllCountries = async () => {
      setCountries(await countriesName());
    };

    fetchAllCountries();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <FormControl className={styles.formControl}>
          <NativeSelect
            defaultValue=""
            onChange={(e) => handleCountryChange(e.target.value)}
          >
            <option value="">Whole World</option>
            {countries[0]
              ? countries.map((country, i) => (
                  <option key={i} value={country}>
                    {country}
                  </option>
                ))
              : ""}
          </NativeSelect>
        </FormControl>
      </div>
    </>
  );
}
