import Image from 'next/image';
import { Input } from '@/components/ui/input';
import CardList from '@/components/CardList';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const products = [
    'ddd',
    'aaaa',
    'bbb',
    'ddd',
    'aaaa',
    'bbb',
    'ddd',
    'aaaa',
    'bbb',
    'ddd',
    'aaaa',
    'bbb',
  ];
  return (
    <>
      <SearchBar />
      <CardList products={products} />
    </>
  );
}
