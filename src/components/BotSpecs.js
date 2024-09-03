import React from "react";

function BotSpecs({ bot, onGoBack, onEnlist }) {
  return (
    <div className="ui segment">
      <h2>{bot.name}</h2>
      <div className="ui grid">
        <div className="eight wide column">
          <img src={bot.avatar_url} alt={bot.name} />
        </div>
        <div className="eight wide column">
          <p><strong>Health:</strong> {bot.health}</p>
          <p><strong>Damage:</strong> {bot.damage}</p>
          <p><strong>Armor:</strong> {bot.armor}</p>
          <p><strong>Class:</strong> {bot.bot_class}</p>
          <p><strong>Catchphrase:</strong> {bot.catchphrase}</p>
        </div>
      </div>
      <button className="ui button" onClick={onGoBack}>Go Back</button>
      <button className="ui button" onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
}

export default BotSpecs;
