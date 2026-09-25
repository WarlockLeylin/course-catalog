'use client';

import { useState } from 'react';

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)}
      className="px-4 py-2 border border-orange-300 rounded-md bg-gray-50 hover:bg-red-100 transition font-medium text-gray-800"
    >
      ❤ {likes}
    </button>
  );
}