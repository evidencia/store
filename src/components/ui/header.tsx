import React from 'react'
import { Card } from './card'
import { Button } from './button'
import { Home, ListOrdered, LogIn, Menu, Percent, ShoppingCart } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './sheet'

export function Header() {
  return (
    <Card className='flex items-center justify-between p-[1.875rem]'>
      <Sheet >
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className='text-left text-lg font-semibold'>
            Menu
          </SheetHeader>

          <div className="flex flex-col gap-3 mt-2">
            <Button variant="outline" className='w-full justify-start gap-2'>
              <LogIn  size={16}/>
              Fazer Login
            </Button>

            <Button variant="outline" className='w-full justify-start gap-2'>
              <Home size={16} />
              Inicio
            </Button>

            <Button variant="outline" className='w-full justify-start gap-2'>
              <Percent size={16} />
              Ofertas
            </Button>

            <Button variant="outline" className='w-full justify-start gap-2'>
              <ListOrdered size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>

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
