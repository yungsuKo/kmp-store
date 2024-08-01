import { Button } from './ui/button';
import { Input } from './ui/input';

export default function SearchBar() {
  return (
    <div className="flex gap-4">
      <Input />
      <Button>검색</Button>
    </div>
  );
}
