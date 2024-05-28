import { Dispatch, SetStateAction, useContext, useState } from "react";
import Select, { AriaOnFocus } from "react-select";
import RegionOption from "../types/RegionOption";
import { ColorModeContext } from "../context/ColorModeContext";

const options: RegionOption[] = [
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
    setAriaFocusMessage(msg);
    return msg;
  };

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  return (
    // TODO: remove form tags both from here and from SearchBar and put one form element to the wrapper component you will create as their parent
    // TODO: Add an option for default - going back to all countries
    // TODO: (bonus) Add multiselect to see countries from multiple selections
    <form>
      <div className="container">
        <label className="sr-only" id="aria-label" htmlFor="region-select">
          Filter by Region
        </label>
        {!!ariaFocusMessage && !!isMenuOpen && (
          <blockquote className="sr-only">"{ariaFocusMessage}"</blockquote>
        )}
        <Select
          className="select-container fs-12-14 text-clr"
          classNamePrefix="select"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: darkMode ? '#1759af' : '#deebff',
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
    </form>
  );
}
