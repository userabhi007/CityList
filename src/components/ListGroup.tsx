import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

interface Props {
  cities: string[];
  heading: string;
  onSelectCity: (city: string) => void;
}

export default function ListGroup({ cities, heading, onSelectCity }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div>
      <h2>{heading}</h2>
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectCity(city);
            }}
          >
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}
