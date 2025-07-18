import React from "react";
import { PlusIcon } from "lucide-react"; 

interface AddToTeamButtonProps {
  addToTeam: () => void;
}

const AddToTeamButton: React.FC<AddToTeamButtonProps> = ({ addToTeam }) => {
  return (
    <button
      onClick={addToTeam}
      className="w-full px-4 py-3 bg-green-600 border border-black  text-white rounded-lg shadow-black shadow-lg hover:bg-indigo-700 focus:outline-none flex items-center justify-center space-x-2 cursor-pointer"
    >
      <PlusIcon className="w-5 h-5" />
      <span>Add to Team</span>
    </button>
  );
};

export default AddToTeamButton;
