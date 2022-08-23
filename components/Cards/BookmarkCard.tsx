import React from "react";

const BookmarkCard = ({ d }) => {
  return (
    <>
      <li className="block h-24">
        <a href={d.link}>
          <div>
            {/* <img
                    src={d.media[0].link}
                    className=" h-20 w-20 rounded-xl object-contain p-1"
                    alt={d.title}
                  /> */}
            <h5>{d.title}</h5>{" "}
          </div>
          {d.tags.map((s: any, i: number) => (
            <strong key={i}>{s}</strong>
          ))}
        </a>
      </li>
    </>
  );
};

export default BookmarkCard;
