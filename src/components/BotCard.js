import React from "react";

// Mapping of bot types to corresponding icon classes
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, onAddBot }) {
  return (
    <div className="ui column">
      {/* Card container for each bot */}
      <div
        className="ui card"
        key={bot.id} // Unique key for each card (can be omitted here as it's already used in parent)
        onClick={onAddBot} // Event handler for clicking the card
      >
        <div className="image">
          <img alt="Bot Avatar" src={bot.avatar_url} /> {/* Image of the bot */}
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} /> {/* Icon for bot type */}
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small> {/* Catchphrase of the bot */}
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" /> {/* Health icon */}
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" /> {/* Damage icon */}
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" /> {/* Armor icon */}
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents click event from bubbling up
                  onAddBot(); // Calls the function to add the bot
                }}
              >
                x {/* Button to remove or add the bot */}
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
