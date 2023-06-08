import React, { useState } from "react";
import { country } from "./CustomeFile";
import "../App.css";

export default function SearchBar({
  handleCountrySelect,
  searchInput,
  setSearchInput,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterSearch, setFilterSearch] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    setIsOpen(true);
    setSearchInput(e.target.value);
    let data = country.filter((el) =>
      el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    setFilterSearch([...data]);
    if (e.target.value === "") {
      setIsOpen(false);
    }
  };

  const onClickFunction = () => {
    handleCountrySelect(searchInput);
  };

  const onListFunction = (name) => {
    setSearchInput(name);
    setIsOpen(false);
  };

  return (
    <>
      <div class="input-group mb-3">
        <input
          type="text"
          value={searchInput}
          className="form-control input-text"
          placeholder="Search ...."
          onChange={handleChange}
        />
        <div class="input-group-append">
          <button
            onClick={onClickFunction}
            className="btn  btn-lg d-flex justify-content:center align-items:center"
            type="button"
          >
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/ios/50/search--v1.png"
              alt="search--v1"
            />
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          style={{ zIndex: "999999999" }}
          className="position-relative w-100 "
        >
          <ul className="bg-white">
            {filterSearch.map((el, i) => (
              <li
                key={i}
                className="cursor-pointer"
                onClick={(e) => onListFunction(el.name)}
              >
                {el.name}
              </li>
            ))}{" "}
          </ul>
        </div>
      )}
    </>
  );
}
