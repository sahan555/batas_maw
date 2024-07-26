import React, {
  useRef,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { useClickOutside, useScrollToHighlightedItem } from "../../Global/utils/SearchFieldUtils";

const CompareField = ({ data, slug, compare, title }) => {
  const [compareSelected, setCompareSelected] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const highlightedItemRef = useRef(null);

  const filteredData = useMemo(() => {
    const searchTerms = compareSelected?.toLowerCase().split(" ");
    return data?.filter(
      (item) =>
        item?.name !== slug?.name &&
        searchTerms.every((term) => item?.name?.toLowerCase().includes(term)),
    );
  }, [data, compareSelected, slug]);

  const handleClickOutside = useCallback(() => {
    if (!filteredData?.some((item) => item?.name === compareSelected)) {
      setCompareSelected("");
      compare("");
      setHighlightedIndex(-1);
    }
    setShowDropdown(false);
  }, [compareSelected, filteredData, compare]);
  useClickOutside(dropdownRef, handleClickOutside);
  //keyboard friendly
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
            if (
              highlightedIndex >= 0 &&
              filteredData &&
              filteredData.length > 0
            ) {
              const selectedItem = filteredData[highlightedIndex];
              if (selectedItem) {
                newCompareSelected = selectedItem.name;
                compare(selectedItem);
                newShowDropdown = false;
                updateNeeded = true;
              }
            }
            break;

          case "Escape":
            newCompareSelected = "";
            compare("");
            newIndex = 0;
            newShowDropdown = true;
            updateNeeded = true;
            break;
          default:
            break;
        }
      } else {
        switch (key) {
          case "Enter":
          case "Escape":
            newCompareSelected = "";
            compare("");
            newShowDropdown = true;
            newIndex = -1;
            updateNeeded = true;
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
    [highlightedIndex, filteredData, compare, showDropdown, compareSelected],
  );

  //keyboard friendly
  useScrollToHighlightedItem(highlightedIndex, listRef, data?.length);

  useEffect(() => {
    if (showDropdown) {
      inputRef.current.focus();
    }
  }, [showDropdown]);


  return (
    <div className="form-group  flex w-full sm:w-1/2 flex-wrap items-center gap-3">
      {title && <label>{title}</label>}

      <div className="searchable-field relative w-full sm:w-auto flex-grow" ref={dropdownRef}>
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
          onKeyDown={handleKeyDown}
          value={compareSelected}
          className=" w-full border border-gray-300 bg-white py-2 pl-2 outline-0"
        />
        {showDropdown && (
          <ul
            ref={listRef}
            className="vehicle-data-ul absolute inset-x-0 top-full z-10 max-h-[190px] overflow-y-auto text-white"
          >
            {filteredData.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setCompareSelected(item?.name);
                  compare(filteredData.find((all) => all?.name === item?.name));
                  setShowDropdown(false);
                }}
                className={`cursor-pointer bg-secondary p-3 duration-300 hover:bg-[#0b4884] ${highlightedIndex === index ? "!bg-[#0b4884]" : ""}`}
                onMouseEnter={() => setHighlightedIndex(index)}
                ref={highlightedIndex === index ? highlightedItemRef : null}
              >
                {item?.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CompareField;
