'use client';

import {
  BellIcon,
  Cookie,
  CreditCard,
  Inbox,
  MessageSquare,
  Settings,
  User,
} from 'lucide-react';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './ui/command';
import Link from 'next/link';

import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();
  console.log(router);
  return (
    <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div className="grow">
        <Command style={{ overflow: 'visible' }}>
          <CommandList style={{ overflow: 'visible' }}>
            <CommandGroup heading="구매">
              <Link href={'/buyer/products'}>
                <CommandItem
                  className={`cursor-pointer ${
                    router.pathname === '/buyer/products'
                      ? 'text-black	bg-slate-200 '
                      : ''
                  }`}
                >
                  등록된 상품 조회
                </CommandItem>
              </Link>
              <Link href={'/buyer/purchase'}>
                <CommandItem
                  className={`cursor-pointer ${
                    router.pathname === '/buyer/purchase'
                      ? 'text-black	bg-slate-200 '
                      : ''
                  }`}
                >
                  구매 요청
                </CommandItem>
              </Link>
              <Link href={'/buyer/orders'}>
                <CommandItem
                  className={`cursor-pointer ${
                    router.pathname === '/buyer/orders'
                      ? 'text-black	bg-slate-200 '
                      : ''
                  }`}
                >
                  구매 내역 조회
                </CommandItem>
              </Link>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="판매">
              <Link href={'/seller/products'}>
                <CommandItem
                  className={`cursor-pointer ${
                    router.pathname === '/seller/products'
                      ? 'text-black	bg-slate-200 '
                      : ''
                  }`}
                >
                  등록한 상품 조회
                </CommandItem>
              </Link>
              <Link href={'/seller/contracts'}>
                <CommandItem
                  className={`cursor-pointer ${
                    router.pathname === '/seller/contracts'
                      ? 'text-black	bg-slate-200 '
                      : ''
                  }`}
                >
                  계약 관리
                </CommandItem>
              </Link>
              <Link href={'/seller/orders'}>
                <CommandItem
                  className={`cursor-pointer ${
                    router.pathname === '/seller/orders'
                      ? 'text-black	bg-slate-200 '
                      : ''
                  }`}
                >
                  주문 내역 조회
                </CommandItem>
              </Link>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="관리">
              <Link href={'/admin/users'}>
                <CommandItem
                  className={`cursor-pointer ${
                    router.pathname === '/admin/users'
                      ? 'text-black	bg-slate-200 '
                      : ''
                  }`}
                >
                  사용자 관리
                </CommandItem>
              </Link>
              <Link href={'/admin/contracts'}>
                <CommandItem
                  className={`cursor-pointer ${
                    router.pathname === '/admin/contracts'
                      ? 'text-black	bg-slate-200 '
                      : ''
                  }`}
                >
                  계약 관리
                </CommandItem>
              </Link>
            </CommandGroup>
          </CommandList>
        </Command>
      </div>
      <div>Settings / Notifications</div>
    </div>
  );
}
