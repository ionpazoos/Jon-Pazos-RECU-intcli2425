import React from 'react';

type Props = {
    onFilterChange: (filterName: string, value: string) => void; // Callback para manejar cambios en los filtros
};

const FiltersBox: React.FC<Props> = ({ onFilterChange }) => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl text-white font-serif mb-4 uppercase tracking-wider">
                Filters
            </h2>
            <div className="space-y-4">
                {/* Filtro por Rarity */}
                <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Rarity
                    </label>
                    <select
                        onChange={(e) => onFilterChange('rarity', e.target.value)}
                        className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    >
                        <option value="">All</option>
                        <option value="Common">Common</option>
                        <option value="Uncommon">Uncommon</option>
                        <option value="Rare">Rare</option>
                        <option value="Epic">Epic</option>
                        <option value="Legendary">Legendary</option>
                    </select>
                </div>

                {/* Filtro por Drop Chance */}
                <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Minimum Drop Chance (%)
                    </label>
                    <input
                        type="number"
                        onChange={(e) => onFilterChange('dropChance', e.target.value)}
                        placeholder="Enter a percentage"
                        className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    />
                </div>

                {/* Filtro por Boss */}
                <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">
                        Dropped By (Boss Name)
                    </label>
                    <input
                        type="text"
                        onChange={(e) => onFilterChange('boss', e.target.value)}
                        placeholder="Enter boss name"
                        className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-800 text-gray-300 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                    />
                </div>

                {/* Botón de reinicio de filtros */}
                <div className="text-center">
                    <button
                        onClick={() => onFilterChange('reset', '')}
                        className="px-6 py-2 rounded-md bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors duration-200"
                    >
                        Reset Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FiltersBox;