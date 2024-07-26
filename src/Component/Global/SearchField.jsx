import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  useClickOutside,
  useScrollToHighlightedItem,
} from "../../Global/utils/SearchFieldUtils";
import { Link, useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";

const SearchField = ({ data, title, placeholder, loading, handleNavbar }) => {
  const [compareSelected, setCompareSelected] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const dropdownRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const highlightedItemRef = useRef(null);
  const navigate = useNavigate();

  const filteredData = useMemo(() => {
    const searchTerms = compareSelected?.toLowerCase().split(" ");
    return data?.filter((item) =>
      // item?.name !== slug&&
      searchTerms.every((term) => item?.name?.toLowerCase().includes(term)),
    );
  }, [data, compareSelected]);

  const handleClickOutside = useCallback(() => {
    if (!filteredData?.some((item) => item?.name === compareSelected)) {
      setCompareSelected("");
      setHighlightedIndex(-1);
    }
    setShowDropdown(false);
  }, [compareSelected, filteredData]);

  useClickOutside(dropdownRef, handleClickOutside);

  const handleKeyDown = useCallback(
    (e) => {
      const { key } = e;
      let updateNeeded = false;
      let newIndex = highlightedIndex;
      let newShowDropdown = showDropdown;
      let newCompareSelected = compareSelected;

      if (filteredData?.length > 0) {
        switch (key) {
          case "ArrowDown":
            e.preventDefault();
            newIndex =
              highlightedIndex < filteredData.length - 1
                ? highlightedIndex + 1
                : 0;
            updateNeeded = true;
            break;
          case "ArrowUp":
            e.preventDefault();
            newIndex =
              highlightedIndex > 0
                ? highlightedIndex - 1
                : filteredData.length - 1;
            updateNeeded = true;
            break;
          case "Enter":
            if (highlightedIndex >= 0) {
              const selectedItem = filteredData[highlightedIndex];
              if (selectedItem) {
                newCompareSelected = "";
                newShowDropdown = false;
                updateNeeded = true;
                navigate(`/vehicles/${selectedItem.slug}`);
                inputRef.current.blur();
              }
            }
            break;
          case "Escape":
            newCompareSelected = "";
            newIndex = 0;
            newShowDropdown = false;
            updateNeeded = true;
            inputRef.current.blur();
            break;
          default:
            break;
        }
      } else {
        switch (key) {
          case "Enter":
          case "Escape":
            newCompareSelected = "";
            newShowDropdown = false;
            newIndex = -1;
            updateNeeded = true;
            inputRef.current.blur();

            break;
          default:
            break;
        }
      }

      if (updateNeeded) {
        setHighlightedIndex(newIndex);
        setCompareSelected(newCompareSelected);
        setShowDropdown(newShowDropdown);
      }
    },
    [highlightedIndex, filteredData, showDropdown, compareSelected, navigate],
  );

  useScrollToHighlightedItem(highlightedIndex, listRef, filteredData?.length);

  useEffect(() => {
    if (showDropdown) {
      inputRef.current.focus();
    }
  }, [showDropdown]);

  return (
    <div
      className={`form-group flex flex-wrap items-center gap-3 ${loading ? "pointer-events-none" : ""}`}
    >
      {title && <label>{title}</label>}
      <div className="searchable-field relative flex-grow" ref={dropdownRef}>
        <div className="input-group relative">
          <input
            type="text"
            ref={inputRef}
            onChange={(e) => {
              setCompareSelected(e.target.value);
              setShowDropdown(true);
            }}
            onClick={() => {
              setShowDropdown(true);
              if (filteredData?.length > 0) {
                setHighlightedIndex(0);
              }
            }}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            value={compareSelected}
            className="w-full border border-gray-300 bg-white py-2 pl-2 outline-0"
          />
          <MdSearch className="absolute right-1.5 top-1.5 text-2xl transition-all hover:text-primary" />
        </div>
        {showDropdown && (
          <ul
            ref={listRef}
            className="vehicle-data-ul absolute inset-x-0 top-full z-10 max-h-[190px] overflow-y-auto text-white"
          >
            {filteredData?.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setCompareSelected("");
                  setShowDropdown(false);
                }}
                className={`cursor-pointer bg-secondary duration-300 hover:bg-[#0b4884] ${highlightedIndex === index ? "!bg-[#0b4884]" : ""}`}
                onMouseEnter={() => setHighlightedIndex(index)}
                ref={highlightedIndex === index ? highlightedItemRef : null}
              >
                <Link
                  className="block p-3"
                  to={`/vehicles/${item?.slug}`}
                  onClick={handleNavbar}
                >
                  {" "}
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchField;
