import CardItem from './CardItem';

export default function CardList({ products }) {
  return (
    <div className="flex gap-4 flex-wrap pt-8">
      {products.map((product) => (
        <CardItem />
      ))}
    </div>
  );
}
