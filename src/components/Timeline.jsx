import { useEffect, useState } from "react";

const events = [
  {
    id: 1,
    date: "2024",
    name:"Student at Epitech ",
    description: "in the Coding Academy, Barcelona, Spain.",
    img: "/img/computer.png",
  },
  {
    id: 2,
    date: "2020::2024",
    name:"Fonder and director ",
    description: "of the NGO <a href='https://laescuelita-lima.org'>La Escuelita</a>, Lima, Peru.",
    img: "/img/handshake.png",
  },
  {
    id: 3,
    date: "2018::2024",
    name:"Physics Teacher ",
    description: "at the French High School of Lima, Peru",
    img: "/img/book.png",
  },
  {
    id: 4,
    date: "2015::2028",
    name: "Head of Physics Laboratory ",
    description:"at Saint-Louis School, Paris, France",
    img: "/img/atom.png",
  },
  {
    id: 5,
    date: "2014",
    name:"Physics Teacher ",
    description:
      "at the french Highschool of Caracas, Venezuela",
    img: "/img/book.png",
  },
  {
    id: 6,
    date: "2011::2014",
    name:"Physics Teacher ",
    description:
      "at various French High Schools in Paris, France",
    img: "/img/book.png",
  },
];

export function Timeline() {
  const [visibleItems, setVisibleItems] = useState([]);

  const handleScroll = () => {
    const items = document.querySelectorAll(".timeline-item");
    const newVisibleItems = [];

    items.forEach((item, index) => {
      console.log(item);
      const rect = item.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 100) {
        newVisibleItems.push(index);
      }
    });

    setVisibleItems(newVisibleItems);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline">
      <div className="timeline-line"></div>

      {events.map((event, index) => (
        <div
          key={event.id}
          className={`timeline-item ${
            visibleItems.includes(index) ? "visible" : ""
          }`}
        >
          <div className="timeline-content-icon">
            <img className="timeline-icon" src={event.img}></img>
          </div>

          <div className="timeline-content">
            <span className="timeline-date">{event.date}</span>
            <p><span className="timeline-name">{event.name}</span> <span dangerouslySetInnerHTML={{ __html: event.description }}/></p>
          </div>
        </div>
      ))}
    </div>
  );
}
