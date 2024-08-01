import Image from 'next/image';

export default function CardItem() {
  return (
    <div className="border-2 border-slate-400 rounded-xl p-4">
      <div className="w-36 h-36 relative">
        <Image src="/next.svg" fill />
      </div>
      <div>
        <p>title</p>
        <p>description</p>
      </div>
    </div>
  );
}
