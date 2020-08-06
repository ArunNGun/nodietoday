import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [index, setIndex] = useState(0);

  const data = [
    "We would miss you.",

    "It's not worth the regret. Either by yourself if you failed or just simply left scars, or the regret everyone else feels by not doing enough to help you. ",

    "It does get better. Believe it or not it will eventually get better. Sometimes you have to go through the storm to get to the rainbow.",

    "There's so much you would miss out on doing. ",
    "There is always a reason to live. It might not be clear right now, but it is always there.",
    "So many people care, and it would hurt them if you hurt yourself.",
    "You ARE worth it. Don't let anyone, especially yourself, tell you otherwise. ",
    "You are amazing",
    "A time will come, once you've battled the toughest times of your life and are in ease once again, where you will be so glad that you decided to keep on living. You will emerge stronger from this all, and won't regret your choice to carry on with life. Because things always get better.",
    " What about all the things you've always wanted to do? What about the things you've planned, but never got around to doing? You can't do them when you're dead.",
    "I love you. Even if only one person loves you, that's still a reason to stay alive. ",
    "You won't be able to listen to music if you die.",
    "Killing yourself is never worth it. You'll hurt both yourself and all the people you care about.",
    "There are so many people that would miss you, including me.",
    "You're preventing a future generation, YOUR KIDS, from even being born.",
    "How do you think your family would feel? Would it improve their lives if you died?",
    "You're gorgeous, amazing, and to someone you are perfect.",
    "Think about your favourite music artist, you'll never hear their voice again...",
    "You'll never have the feeling of walking into a warm building on a cold day",
    "Listening to incredibly loud music",
    "Being alive is just really good.",
    "Not being alive is really bad.",
    "Finding your soulmate.",
    "Red pandas",
    "Going to diners at three in the morning.",
    "Really soft pillows.",
    "Eating pizza in New Delhi.",
    "Proving people wrong with your success.",
    "Watching the jerks that doubted you fail at life.",
    "Seeing someone trip over a garbage can.",
    "Being able to help other people.",
    "Bonfires.",
    "Sitting on rooftops.",
    "Seeing every single country in the world.",
    "Going on roadtrips.",
    "You might win the lottery someday.",
    "Listening to music on a record player.",
    "Going to the top of the Eiffel Tower. ",
    "Taking really cool pictures.",
    "Literally meeting thousands of new people.",
    "Hearing crazy stories.",
    "Telling crazy stories.",
    "Eating ice cream on a hot day.",
    "More Harry Potter books could come out, you never know.",
    "Travelling to another planet someday.",
    "Having an underwater house.",
    "Randomly running into your hero on the street",
    "Having your own room at a fancy hotel.",
    "Trampolines.",
    "Think about your favourite movie, you'll never watch it again.",
    "Think about the feeling of laughing out loud in a public place because your best friend has just sent you an inside joke",
    "Your survival will make the world better, even if it's for just one person or 20 or 100 or more.",
    "People do care.",
    "Treehouses.",
    "Hanging out with your soul mate in a treehouse",
    "Snorting when you laugh and not caring who sees",
    "I don't even know you and I love you.",
    "I don't even know you and I care about you.",
    "Because nobody is going to be like you ever, so embrace your uniqueness!",
    "You won't be here to experience the first cat world emperor.",
    "WHAT ABOUT FOOD?! YOU'LL MISS CHOCOLATE AND ALL THE OTHER NOM THINGS!",
    "Starbucks.",
    "Hugs.",
    "Stargazing.",
    "You have a purpose, and it's up to you to find out what it is.",
    "You've changed somebody's life.",
    "Now you could change the world.",
    "You will meet the person that's perfect for you.",
    "No matter how much or how little, you have your life ahead of you.You have the chance to save somebody's life.",
    "If you end your life, you're stopping yourself from achieving great things.",
    "Making snow angels.",
    "Making snowmen.",
    "Snowball fights. ",
    "Life is what you make of it.",
    "Everybody has a talent.",
    "Laughing until you cry.",
    "Having the ability to be sad means you have the ability to be happy.",
    "The world would not be the same if you didn't exist.",
    "Its possible to turn frowns, upside down ",
    "Be yourself, don't take anyone's shit, and never let them take you alive. ",
    "Heroes are ordinary people who make themselves extraordinary. Be your own hero.",
    " Being happy doesn't mean that everything is perfect. It means that you've decided to look beyond the imperfections.",
    "One day your smile will be real.",
    "Having a really hot, relaxing bath after a stressful day.",
    "Lying on grass and laughing at the clouds.",
    " Getting completely smashed with your best friends.",
    "Eating crazy food.",
    "Staying up all night watching your favourite films with a loved one.",
    "Sleeping in all day.",
    "Creating something you're proud of.",
    "You can look back on yourself 70 years later and being proud you didn't commit.",
    "Being able to meet your Internet friends.",
    "Tea / Coffee / Hot Chocolate.",
    "The new season of Sherlock",
    "Cuddling under the stars.",
    "Being stupid in public because you just can.",
    "If you are reading this then you are alive! Is there any more reason to smile? ",
    "being able to hug that one person you havent seen in years.",
    "People care enough about you and your future to come up with 100 reasons for you not to do this.",
    "being able to experience life. Because even if your life doesn't seem so great right now, literally anything could happen",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let temp_index = Math.floor(0 + Math.random() * (100 - 0));
      setIndex((index) => temp_index);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App bg">
      <Navbar />
      <header className="App-header ">
        {
          //<p>reason {index}</p>
        }
        <span className="brooks">
          <TextTransition text={data[index]} springCoonfig={presets.wobbly} />
        </span>
      </header>
    </div>
  );
}

export default App;
