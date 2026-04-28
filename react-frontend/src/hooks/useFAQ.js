import { useState } from 'react';

export function useFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return { openIndex, toggle };
}

export default useFAQ;