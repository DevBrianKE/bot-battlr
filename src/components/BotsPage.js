import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const BotPage = () => {
  // State to hold the list of bots and the list of selected bots
  const [bots, setBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  // Fetch bots from the server when the component mounts
  useEffect(() => {
    fetch('http://localhost:8002/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  // Add a bot to the selected bots list if it's not already selected
  const handleAddBot = (bot) => {
    if (!selectedBots.some(selectedBot => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  };

  // Remove a bot from the selected bots list
  const handleRemoveBot = (id) => {
    setSelectedBots(selectedBots.filter(bot => bot.id !== id));
  };

  // Discharge a bot by removing it from both the bots list and selected bots list
  const handleDischargeBot = (id) => {
    fetch(`http://localhost:8002/bots/${id}`, { method: 'DELETE' })
      .then(() => {
        setBots(bots.filter(bot => bot.id !== id)); // Update bots list
        setSelectedBots(selectedBots.filter(bot => bot.id !== id)); // Update selected bots list
      });
  };

  return (
    <div>
      {/* Render the BotCollection component with the list of bots and the add handler */}
      <BotCollection bots={bots} onAddBot={handleAddBot} />
      {/* Render the YourBotArmy component with the list of selected bots and handlers */}
      <YourBotArmy
        bots={selectedBots}
        onRemoveBot={handleRemoveBot}
        onDischargeBot={handleDischargeBot}
      />
    </div>
  );
};

export default BotPage;
