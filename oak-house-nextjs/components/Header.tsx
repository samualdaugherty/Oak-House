'use client';

import Navigation from './Navigation';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage }: HeaderProps) {
  return <Navigation currentPage={currentPage} />;
}

