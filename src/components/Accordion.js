import React from "react";
import "./Accordion.css";
import AccordionBar from "./AccordionBar";

const Accordion = () => {
  return (
    <div className="accordion">
      <div className="wrapA">
        <h1>Frequently Asked Questions</h1>
        <AccordionBar
          title="What is Netflix"
          para={`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`}
          id="0"
        />
        <AccordionBar
          title="How much does Netflix cost?"
          para={`Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`}
          id="1"
        />
        <AccordionBar
          title="Where can I watch?"
          para={`Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`}
          id="2"
        />
        <AccordionBar
          title="How do I cancel?"
          para={
            "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
          }
          id="3"
        />
        <AccordionBar
          title="What can I watch on Netflix?"
          para={`Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`}
          id="4"
        />
        <AccordionBar
          title="Is Netflix good for kids?"
          para={`The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`}
          id="5"
        />
      </div>
    </div>
  );
};

export default Accordion;
