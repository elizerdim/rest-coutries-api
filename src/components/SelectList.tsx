import { Dispatch, SetStateAction, useContext, useState } from "react";
import Select, { AriaOnFocus } from "react-select";
import RegionOption from "../types/RegionOption";
import { ColorModeContext } from "../context/ColorModeContext";

const options: RegionOption[] = [
  { value: "all", label: "All" },
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

type SelectListProps = {
  onChange: Dispatch<SetStateAction<RegionOption | null>>;
};

export default function SelectList({ onChange }: SelectListProps) {
  const { darkMode } = useContext(ColorModeContext);
  const [ariaFocusMessage, setAriaFocusMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onFocus: AriaOnFocus<RegionOption> = ({ focused, isDisabled }) => {
    const msg = `You are currently focused on option ${focused.label}${
      isDisabled ? ", disabled" : ""
    }`;
    
    // setTimeout is added to remove the error 
    // "Cannot update a component (`SelectList`) while rendering a different component (`LiveRegion2`). 
    // To locate the bad setState() call inside `LiveRegion2`, follow the stack trace" 
    setTimeout(() => setAriaFocusMessage(msg), 0);

    return msg;
  };

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  return (
    // TODO: (bonus) Add multiselect to see countries from multiple selections
    <div>
      <label className="sr-only" id="aria-label" htmlFor="region-select">
        Filter by Region
      </label>
      {!!ariaFocusMessage && !!isMenuOpen && (
        <blockquote className="sr-only">"{ariaFocusMessage}"</blockquote>
      )}
      <Select
        className="select-container fs-12-14"
        classNamePrefix="select"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: darkMode ? "#1759af" : "#deebff",
          },
        })}
        options={options}
        onChange={onChange}
        placeholder="Filter by Region"
        isSearchable={false}
        aria-labelledby="aria-label"
        ariaLiveMessages={{
          onFocus,
        }}
        inputId="region-select"
        name="aria-live-region"
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
      />
    </div>
  );
}
