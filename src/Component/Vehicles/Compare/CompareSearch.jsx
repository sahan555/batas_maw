import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useClickOutside from "../../../Global/Hooks/useClickOutside";

const CompareSearch = ({ data, slug, compare }) => {
  const [compareSelected, setCompareSelected] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const highlightedItemRef = useRef(null);

  const filteredData = useMemo(() => {
    const searchTerms = compareSelected.toLowerCase().split(" ");
    return data.filter(
      (item) =>
        item.title !== slug?.title &&
        searchTerms.every((term) => item.title.toLowerCase().includes(term)),
    );
  }, [data, compareSelected, slug]);

  const handleClickOutside = useCallback(() => {
    if (!filteredData.some((item) => item.title === compareSelected)) {
      setCompareSelected("");
      compare("");
      setHighlightedIndex(-1);
    }
    setShowDropdown(false);
  }, [compareSelected, filteredData, compare]);

  useClickOutside(dropdownRef, handleClickOutside);
  const handleKeyDown = useCallback(
    (e) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setHighlightedIndex((prevIndex) =>
            prevIndex === filteredData.length - 1 ? 0 : prevIndex + 1,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setHighlightedIndex((prevIndex) =>
            prevIndex <= 0 ? filteredData.length - 1 : prevIndex - 1,
          );
          break;
        case "Enter":
          if (highlightedIndex >= 0) {
            const selectedItem = filteredData[highlightedIndex];
            if (selectedItem) {
              setCompareSelected(selectedItem?.title);
              compare(selectedItem);
              setShowDropdown(false);
            }
          }
          break;
        case "Escape":
          setCompareSelected("");
          setShowDropdown(false);
          break;
        default:
          break;
      }
    },
    [highlightedIndex, filteredData, compare],
  );

  const scrollToHighlightedItem = useCallback(() => {
    if (highlightedIndex >= 0) {
      const dropdown = listRef.current;
      const highlightedItem = dropdown.children[highlightedIndex];
      const dropdownRect = dropdown.getBoundingClientRect();
      const highlightedItemRect = highlightedItem.getBoundingClientRect();

      if (highlightedItemRect.bottom > dropdownRect.bottom) {
        dropdown.scrollTop += highlightedItemRect.bottom - dropdownRect.bottom;
      } else if (highlightedItemRect.top < dropdownRect.top) {
        dropdown.scrollTop -= dropdownRect.top - highlightedItemRect.top;
      }
    }
  }, [highlightedIndex]);

  useEffect(() => {
    if (showDropdown) {
      inputRef.current.focus();
    }
  }, [showDropdown]);

  useEffect(() => {
    if (highlightedIndex > -1) {
      scrollToHighlightedItem();
    }
  }, [highlightedIndex, scrollToHighlightedItem]);
  console.log(compareSelected);
  return (
    <section className="compare-search pb-6 pt-10">
      <div className="container mx-auto">
        <div className="max-w-[1000px]">
          <form className="flex gap-6 lg:gap-16">
            <div className="form-group flex w-1/2 flex-wrap items-center gap-3">
              <label>Compare:</label>
              <input
                type="text"
                value={slug?.title}
                disabled
                className="flex-grow border border-gray-300 bg-white py-2 pl-2"
              />
            </div>
            <div className="form-group  flex w-1/2 flex-wrap items-center gap-3">
              <label>Compare with:</label>
              <div
                className="searchable-field relative flex-grow"
                ref={dropdownRef}
              >
                <input
                  type="text"
                  ref={inputRef}
                  onChange={(e) => {
                    setCompareSelected(e.target.value);
                    setShowDropdown(true);
                  }}
                  onClick={() => setShowDropdown(true)}
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
                          setCompareSelected(item?.title);
                          compare(
                            filteredData.find(
                              (all) => all?.title === item?.title,
                            ),
                          );
                          setShowDropdown(false);
                        }}
                        className={`cursor-pointer bg-secondary p-3 duration-300 hover:bg-[#0b4884] ${highlightedIndex === index ? "!bg-[#0b4884]" : ""}`}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        ref={
                          highlightedIndex === index ? highlightedItemRef : null
                        }
                      >
                        {item?.title}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CompareSearch;
