"use client"

import { useCallback } from 'react';
import { Button } from '../ui/button';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';


const TodoFilterButton = ({ filter, children, type }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
  
    const createQueryString = useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
  
        return params.toString();
      },
      [searchParams]
    );
  
    return (
      <Button
        variant={filter === type ? "default" : "secondary"}
        className="flex-1 rounded-none"
        onClick={() => {
          if (type)
            return router.push(
              pathname + "?" + createQueryString("filter", type)
            );
          return router.push(pathname);
        }}
      >
        {children}
      </Button>
    );
  };

export default TodoFilterButton