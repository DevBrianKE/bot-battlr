import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./BotSpecs";
import SortBar from "./SortBar";
import FilterBar from "./FilterBar";

function BotPage() {
  const [bots, setBots] = useState([]); // State for all bots
  const [selectedBots, setSelectedBots] = useState([]); // State for selected bots
  const [currentBot, setCurrentBot] = useState(null); // State for currently viewed bot
  const [sortBy, setSortBy] = useState(null); // State for sorting criteria
  const [selectedClasses, setSelectedClasses] = useState([]); // State for filter by bot class

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  // Handle sorting bots
  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  // Handle filtering bots by class
  const handleFilterChange = (cls, isChecked) => {
    setSelectedClasses(
      isChecked
        ? [...selectedClasses, cls]
        : selectedClasses.filter(c => c !== cls)
    );
  };

  // Filter bots based on selected classes
  const filteredBots = bots.filter(bot => selectedClasses.length === 0 || selectedClasses.includes(bot.bot_class));

  // Sort bots based on criteria
  const sortedBots = sortBy ? [...filteredBots].sort((a, b) => b[sortBy] - a[sortBy]) : filteredBots;

  // Add a bot to the army if it doesn't already exist
  const handleAddBot = (bot) => {
    const isClassTaken = selectedBots.some(b => b.bot_class === bot.bot_class);
    if (!isClassTaken && !selectedBots.some(selectedBot => selectedBot.id === bot.id)) {
      setSelectedBots([...selectedBots, bot]);
    }
  };

  // Remove a bot from the army
  const handleRemoveBot = (id) => {
    setSelectedBots(selectedBots.filter(bot => bot.id !== id));
  };

  // Discharge a bot from the service
  const handleDischargeBot = (id) => {
    fetch(`http://localhost:8002/bots/${id}`, { method: 'DELETE' })
      .then(() => {
        setBots(bots.filter(bot => bot.id !== id));
        setSelectedBots(selectedBots.filter(bot => bot.id !== id));
      });
  };

  // Toggle selection of a bot
  const handleToggleSelection = (bot) => {
    const isSelected = selectedBots.some(selectedBot => selectedBot.id === bot.id);
    if (isSelected) {
      handleRemoveBot(bot.id);
    } else {
      handleAddBot(bot);
    }
  };

  // View detailed bot information
  const handleViewBot = (bot) => {
    setCurrentBot(bot);
  };

  // Go back to bot collection view
  const handleGoBack = () => {
    setCurrentBot(null);
  };

  return (
    <div>
      {currentBot ? (
        <BotSpecs 
          bot={currentBot} 
          onGoBack={handleGoBack} 
          onEnlist={handleAddBot} 
        />
      ) : (
        <>
          <SortBar onSort={handleSort} />
          <FilterBar selectedClasses={selectedClasses} onFilterChange={handleFilterChange} />
          <BotCollection 
            bots={sortedBots} 
            onAddBot={handleAddBot} 
            onViewBot={handleViewBot} 
            selectedBots={selectedBots}
            onToggleSelection={handleToggleSelection}
          />
          <YourBotArmy 
            bots={selectedBots} 
            onRemoveBot={handleRemoveBot} 
            onDischargeBot={handleDischargeBot} 
          />
        </>
      )}
    </div>
  );
}

export default BotPage;
