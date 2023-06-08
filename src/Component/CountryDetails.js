import React, { useState } from "react";

export default function CountryDetails({ country }) {
  return (
    <div className="">
      <h2>{country?.name.common}</h2>
      <div className="d-flex h-auto">
        <img
          src={country?.flags?.svg}
          alt={country?.flags?.alt}
          className=""
          width={250}
          height={200}
        />
      </div>
      <p>
        <b>Capital:</b> {country?.capital}
      </p>
      <p>
        <b>Population: </b> {country?.population}
      </p>
      <p>
        <b>Area: </b> {country?.area} km²
      </p>
      <p>
        <b>TimeZone: </b> {country?.timezones[0]}
      </p>
      <p>
        <b>Region: </b> {country?.region}
      </p>
    </div>
  );
}
