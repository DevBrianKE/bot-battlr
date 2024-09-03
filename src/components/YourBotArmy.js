import React from "react";
import BotCard from "./BotCard";

/**
 * YourBotArmy component displays the user's selected bots with options to remove or discharge them.
 *
 * @param {Object} props - The props object containing component properties.
 * @param {Array} props.bots - An array of bot objects currently in the user's army.
 * @param {Function} props.onRemoveBot - A function to call when a bot is removed from the army.
 * @param {Function} props.onDischargeBot - A function to call when a bot is discharged.
 * @returns {JSX.Element} The rendered YourBotArmy component.
 */
function YourBotArmy({ bots, onRemoveBot, onDischargeBot }) {
  return (
    <div className="ui segment">
      <h2>Your Bot Army</h2>
      <div className="ui four column grid">
        <div className="row">
          {bots.map(bot => (
            <div className="column" key={bot.id}>
              <BotCard bot={bot} />
              <button 
                className="ui mini red button" 
                onClick={() => onRemoveBot(bot.id)}
              >
                Remove
              </button>
              <button 
                className="ui mini red button" 
                onClick={() => onDischargeBot(bot.id)}
              >
                Discharge
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
