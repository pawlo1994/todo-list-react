import React from "react";
import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <header className="section__top">
            <h2>{title}</h2>
            {extraHeaderContent}
        </header>
        {body}
    </section>
);

export default Section;