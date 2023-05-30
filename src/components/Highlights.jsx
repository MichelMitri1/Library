import React from "react";
import Highlight from "./ui/Highlight";
import BoltIcon from '@mui/icons-material/Bolt';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import TagIcon from '@mui/icons-material/Tag';

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<BoltIcon />}
              title="Easy and Quick"
              para="Get access to the book you purchased online instantly."
            />
            <Highlight
              icon={<ImportContactsIcon />}
              title="10,000+ Books"
              para="Library has books in all your favourite categories."
            />
            <Highlight
              icon={<TagIcon />}
              title="Affordable"
              para="Get your hands on popular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;