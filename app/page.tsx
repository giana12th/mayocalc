'use client';

import { useState } from 'react';
import { MayonnaiseCard } from '@/components/MayoCard';

type CardId = 'A' | 'B';

type CardState = {
  amount: number | '';
  price: number | '';
};


export default function Home() {

  const [cards, setCards] = useState<Record<CardId, CardState>>({
    A: { amount: '', price: '' },
    B: { amount: '', price: '' },
  });

  const handleChange = (id: CardId, field: 'amount' | 'price', value: number | '') => {
    setCards(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const getUnitPrice = (card: CardState) => {
    const { amount, price } = card;
    return typeof amount === 'number' && amount > 0 && typeof price === 'number'
      ? price / amount
      : null;
  };

  const unitPriceA = getUnitPrice(cards.A);
  const unitPriceB = getUnitPrice(cards.B);

  const isCheapest = {
    A: unitPriceA !== null && unitPriceB !== null && unitPriceA < unitPriceB,
    B: unitPriceA !== null && unitPriceB !== null && unitPriceB < unitPriceA,
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-md mx-auto flex flex-col items-center justify-between px-6 bg-white dark:bg-black">

        <div className="flex flex-col items-center gap-6 sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            mayocalc
          </h1>

          <div className="max-w-md mx-auto">
            <MayonnaiseCard
              id="A"
              amount={cards.A.amount}
              price={cards.A.price}
              onChange={handleChange}
              isCheapest={isCheapest.A}
            />
            <MayonnaiseCard
              id="B"
              amount={cards.B.amount}
              price={cards.B.price}
              onChange={handleChange}
              isCheapest={isCheapest.B}
            />
          </div>



        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            400g298円のマヨネーズと550g398円のマヨネーズどっちが安いか計算するアプリ

          </p>
        </div>
      </main>
    </div>
  );
}
