import React from 'react'
import { Card } from './card'
import { Button } from './button'
import { Menu, ShoppingCart } from 'lucide-react'

export function Header() {
  return (
    <Card className='flex items-center justify-between p-[1.875rem]'>
      <Button size="icon" variant="outline">
        <Menu />
      </Button>

      <h1 className='font-semibold text-lg'>
        <span className='text-primary'>FSW</span>
        Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCart />
      </Button>
    </Card>
  )
}
