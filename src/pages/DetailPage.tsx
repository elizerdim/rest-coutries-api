import { useLoaderData } from "react-router-dom";
import Country from "../interfaces/Country";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function DetailPage() {
  const country: Country = useLoaderData() as Country;
  console.log(country);

  return (
    <main>
      <div className="container">
        <button className="back-btn bg-accent fs-14-16 text-clr">
          <FontAwesomeIcon className="back-btn-icon" icon={faArrowLeftLong} />
          Back
        </button>
      </div>
    </main>
  );
}
