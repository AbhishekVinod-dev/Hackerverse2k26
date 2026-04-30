import { useState, useCallback } from 'react';

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    document.body.classList.toggle('overflow-hidden');
    setIsOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => {
    document.body.classList.remove('overflow-hidden');
    setIsOpen(false);
  }, []);

  return { isOpen, toggle, close };
}

export default useMobileMenu;