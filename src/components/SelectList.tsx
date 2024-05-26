import { Dispatch, SetStateAction, useState } from "react";
import Select, { AriaOnFocus } from "react-select";
import RegionOption from "../types/RegionOption";

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
    <form>
      <div className="container">
        <label className="sr-only" id="aria-label" htmlFor="region-select">
          Filter by Region
        </label>
        {!!ariaFocusMessage && !!isMenuOpen && (
          <blockquote className="sr-only">"{ariaFocusMessage}"</blockquote>
        )}
        <Select
          unstyled
          className="select-container fs-12-14"
          classNamePrefix="select"
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
