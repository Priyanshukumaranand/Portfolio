'use client';
import React, { useState } from 'react';
import "@/styles/header.css";
import { FaAngleDown, FaAngleUp, FaKeyboard, FaBookOpen } from 'react-icons/fa';

const Gaming = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);
    const [showGuide, setShowGuide] = useState(false);

    const instructions = [
        { key: '↑/W', action: 'Move Up' },
        { key: '↓/S', action: 'Move Down' },
        { key: '←/A', action: 'Move Left' },
        { key: '→/D', action: 'Move Right' },
        { key: 'Z', action: 'A Button' },
        { key: 'X', action: 'B Button' },
        { key: 'Enter', action: 'Start' },
        { key: 'Shift', action: 'Select' },
    ];

    const gameGuide = [
        {
            title: "Getting Started",
            content: "Start your journey as a Pokemon trainer in Pallet Town. Choose your starter Pokemon from Professor Oak: Charmander, Squirtle, or Bulbasaur."
        },
        {
            title: "Basic Controls",
            content: "Use arrow keys or WASD to move around. Press Z to interact with objects and people. Press X to cancel or run (while holding)."
        },
        {
            title: "Battle System",
            content: "Battles are turn-based. Select from 4 moves to attack. Catch wild Pokemon by weakening them first, then throwing a Pokeball (select from items)."
        },
        {
            title: "Save Game",
            content: "Press Enter for menu, select Save to store your progress. Remember to save frequently!"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto p-4">
            <h5>Gaming</h5>
            
            {/* Control Buttons */}
            <div className="flex gap-4 mb-4">
                <button 
                    onClick={() => setShowInstructions(!showInstructions)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all"
                >
                    <FaKeyboard />
                    <span>Controls</span>
                </button>

                <button 
                    onClick={() => setShowGuide(!showGuide)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all"
                >
                    <FaBookOpen />
                    <span>Game Guide</span>
                </button>
            </div>

            {/* Written Instructions Modal */}
            {showGuide && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">Pokemon Fire Red Guide</h3>
                            <button 
                                onClick={() => setShowGuide(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="space-y-4">
                            {gameGuide.map((section, index) => (
                                <div key={index} className="bg-gray-700 p-4 rounded-lg">
                                    <h4 className="text-lg font-semibold mb-2 text-primary">{section.title}</h4>
                                    <p className="text-sm md:text-base leading-relaxed text-gray-300">{section.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Instructions Modal */}
            {showInstructions && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">Game Controls</h3>
                            <button 
                                onClick={() => setShowInstructions(false)}
                                className="text-gray-400 hover:text-white"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {instructions.map((instruction, index) => (
                                <div key={index} className="flex flex-col items-center p-2 bg-gray-700 rounded">
                                    <kbd className="px-2 py-1 bg-gray-600 rounded text-sm">{instruction.key}</kbd>
                                    <span className="text-sm mt-1">{instruction.action}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Game Section */}
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full bg-gray-800 p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition-all"
            >
                <div>
                    <h5>Pokemon Fire-red</h5>
                </div>
                {isOpen ? <FaAngleUp size={24} /> : <FaAngleDown size={24} />}
            </div>
            
            <div className={`w-full transition-all duration-300 ease-in-out ${isOpen ? 'h-[600px] opacity-100 mt-4' : 'h-0 opacity-0 overflow-hidden'}`}>
                <iframe
                    srcDoc={`
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="utf-8">
                        <meta name="robots" content="noindex, nofollow">
                        <title>Game Emulator</title>
                        <style>
                            html, body {
                                height: 100%;
                            }
                            body {
                                margin: 0;
                                padding: 0;
                                background-color: rgba(0,0,0,0.5);
                                color: white;
                                overflow-y:hidden;
                                overflow-x:hidden;
                            }
                            #gameDivId {
                                height: 100%;
                            }
                            @keyframes retropulse { from {background-color: #462E6E;} to {background-color: #925FE3;} }
                        </style>
                    </head>
                    <body>
                        <div id="gameDivId"></div>
                        <script>
                            var RetroLoaderConfig = {
                                divId : "gameDivId",
                                sys : "gba",
                                rom : "//static.playemulator.io/uploads/games/202011/pokemon-fire-red.zip",
                                image: "https://images.playemulator.io/uploads/games/202005/pokemon-fire-red-1-164x164.png",
                            };
                        </script>
                        <script src="//load.retroemulator.com/retroLoader.js" type="text/javascript"></script>
                    </body>
                    </html>
                    `}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg"
                ></iframe>
            </div>
        </div>
    )
}

export default Gaming;