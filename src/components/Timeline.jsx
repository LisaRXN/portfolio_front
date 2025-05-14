import { useEffect, useState } from "react";

const events = [
  {
    id: 1,
    date: "2025",
    name:"Frontend Developer  ",
    description: "at Barnabé, Paris, France.",
    img: "/img/computer.png",
  },
  {
    id: 2,
    date: "2024",
    name:"Student in Computer Programming",
    description: "at Epitech, campus of Barcelona, Spain.",
    img: "/img/computer.png",
  },
  {
    id: 2,
    date: "2020::2024",
    name:"Fonder and director ",
    description: "of the NGO <a href='https://la-escuelita.vercel.app/'>La Escuelita</a>, Lima, Peru.",
    img: "/img/handshake.png",
  },
  {
    id: 3,
    date: "2015::2018",
    name: "Physics Lab Instructor ",
    description:"at Saint-Louis Superior School, Paris, France",
    img: "/img/atom.png",
  },
  {
    id: 4,
    date: "2011::2025",
    name:"Physics Teacher ",
    description:
      "at the French International Schools of Caracas (Venezuela), Lima (Peru), and high schools in Paris (France) ",
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
