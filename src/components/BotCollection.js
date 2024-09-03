import React from "react";
import BotCard from "./BotCard";

/**
 * Displays a list of BotCard components.
 *
 * @param {Object} props - Component properties.
 * @param {Array} props.bots - List of bots to display.
 * @param {Function} props.onAddBot - Function to add a bot to the army.
 * @param {Function} props.onViewBot - Function to view details of a bot.
 * @param {Array} props.selectedBots - List of currently selected bots.
 * @param {Function} props.onToggleSelection - Function to toggle bot selection.
 * @returns {JSX.Element} The BotCollection component.
 */
function BotCollection({ bots, onAddBot, onViewBot, selectedBots, onToggleSelection }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onAddBot={() => onAddBot(bot)}
            onViewBot={() => onViewBot(bot)}
            isInArmy={selectedBots.some(selectedBot => selectedBot.id === bot.id)}
            onToggleSelection={onToggleSelection}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
