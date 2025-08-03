import classNames from "classnames";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export const TabMenu = ({ menus }: {
  menus: {
    title: string;
    param: string;
  }[]
}) => {
  const searchParams = useSearchParams();
  const router = useRouter()
  const tabParams = searchParams.get('tab');

  useEffect(() => {
    if (!tabParams) {
      router.push('?tab=all');
    }
  }, [])

  return (
    <div className="flex w-full justify-start border-b border-gray-100">
      {menus.map((item) => {
        const isActive = tabParams === item.param;
        return <Link className={classNames([isActive && 'border-b-2 !border-purple-700 text-purple-700', 'text-gray-500 px-6 py-4 hover:bg-gray-100 transition-all border-b-2 border-transparent'])} key={item.param} href={'?tab=' + item.param}>
          {item.title}
        </Link>
      })}
    </div>
  );
}