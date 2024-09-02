import React from "react";
import BotCard from "./BotCard"; // Importing BotCard component

function BotCollection({ bots, onAddBot }) { // Added props: bots and onAddBot
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => (
          // Map over the bots array to create a BotCard for each bot
          <BotCard
            key={bot.id} // Unique key for each BotCard to help React identify which items have changed
            bot={bot} 
            onAddBot={() => onAddBot(bot)} // Pass a function to handle adding the bot
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
