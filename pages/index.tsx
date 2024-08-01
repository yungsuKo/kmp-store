import Image from 'next/image';
import { Input } from '@/components/ui/input';
import CardList from '@/components/CardList';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { createClient } from '@supabase/supabase-js';

export default function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
  const googleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });
  };

  return (
    <>
      <div>
        <Button variant="outline" className="flex gap-2" onClick={googleLogin}>
          <div className="w-8 h-8 relative">
            <Image src={'/vercel.svg'} fill />
          </div>
          <p className="">구글 로그인</p>
        </Button>
      </div>
    </>
  );
}
