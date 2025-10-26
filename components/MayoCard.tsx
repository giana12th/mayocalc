// src/components/MayoCard.tsx
'use client';

import React from 'react';

type CardId = 'A' | 'B' ;

type MayonnaiseCardProps = {
  id: CardId;
  amount: number | '';
  price: number | '';
  onChange: (id: CardId, field: 'amount' | 'price', value: number | '') => void;
  isCheapest: boolean;
};

export const MayonnaiseCard: React.FC<MayonnaiseCardProps> = ({
  id,
  amount,
  price,
  onChange,
  isCheapest,
}) => {
  const unitPrice =
    typeof amount === 'number' && amount > 0 && typeof price === 'number'
      ? (price / amount).toFixed(2)
      : '--';

  const handleInputChange = (field: 'amount' | 'price') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsed = parseFloat(value);
    onChange(id, field, isNaN(parsed) ? '' : parsed);
  };

  return (
    <div
      className={`rounded-lg shadow-md p-4 mb-4 ${
        isCheapest ? 'bg-green-100 border-2 border-green-400' : 'bg-white border'
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">商品{id}</h2>
      <div className="mb-2">
        <label className="block text-sm text-gray-600 mb-1">量</label>
        <input
          type="number"
          className="border rounded px-2 py-1 w-full"
          value={amount}
          onChange={handleInputChange('amount')}
          placeholder="例: 400"
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm text-gray-600 mb-1">価格 (円)</label>
        <input
          type="number"
          className="border rounded px-2 py-1 w-full"
          value={price}
          onChange={handleInputChange('price')}
          placeholder="例: 298"
        />
      </div>
      <div className="text-sm text-gray-700 mt-2">
        単価: <span className="font-mono">{unitPrice} 円/量</span>
      </div>
    </div>
  );
};