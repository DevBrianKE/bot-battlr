import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

const BotPage = () => {
  // State to store all bots
  const [bots, setBots] = useState([]);
  // State to store selected bots
  const [selectedBots, setSelectedBots] = useState([]);

  // Fetch bots data when component mounts
  useEffect(() => {
    fetch('http://localhost:8002/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  // Function to add a bot to the army
  const handleAddBot = (bot) => {
    // Add bot if not already selected
    if (!selectedBots.some(selectedBot => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  };

  // Function to remove a bot from the army
  const handleRemoveBot = (id) => {
    setSelectedBots(selectedBots.filter(bot => bot.id !== id));
  };

  // Function to discharge a bot (delete from backend and remove from state)
  const handleDischargeBot = (id) => {
    fetch(`http://localhost:8002/bots/${id}`, { method: 'DELETE' })
      .then(() => {
        // Remove bot from state
        setBots(bots.filter(bot => bot.id !== id));
        setSelectedBots(selectedBots.filter(bot => bot.id !== id));
      });
  };

  return (
    <div>
      <BotCollection bots={bots} onAddBot={handleAddBot} />
      <YourBotArmy bots={selectedBots} onRemoveBot={handleRemoveBot} onDischargeBot={handleDischargeBot} />
    </div>
  );
};

export default BotPage;
