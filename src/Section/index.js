import React from "react";
import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="section">
        <div className="section__top">
            <h2>{title}</h2>
            {extraHeaderContent}
        </div>
        {body}
    </section>
);

export default Section;