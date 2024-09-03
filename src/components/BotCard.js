import React from "react";

/**
 * Displays a bot's details and provides action buttons.
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.bot - The bot to display.
 * @param {Function} props.onAddBot - Function to add the bot to the army.
 * @param {Function} props.onViewBot - Function to view bot details.
 * @param {boolean} props.isInArmy - True if the bot is in the army.
 * @param {Function} props.onToggleSelection - Function to toggle the bot's selection status.
 * @returns {JSX.Element} The BotCard component.
 */
function BotCard({ bot, onAddBot, onViewBot, isInArmy, onToggleSelection }) {
  return (
    <div className="ui card">
      <div className="image">
        <img src={bot.avatar_url} alt={bot.name} />
      </div>
      <div className="content">
        <div className="header">{bot.name}</div>
        <div className="meta">
          <span className="date">{bot.bot_class}</span>
        </div>
        <div className="description">
          {bot.catchphrase}
        </div>
      </div>
      <div className="extra content">
        <button className="ui button fluid" onClick={onViewBot}>
          View Details
        </button>
        <button 
          className="ui button fluid" 
          onClick={() => onToggleSelection(bot)}
          disabled={isInArmy}
        >
          {isInArmy ? "In Army" : "Add to Army"}
        </button>
      </div>
    </div>
  );
}

export default BotCard;
