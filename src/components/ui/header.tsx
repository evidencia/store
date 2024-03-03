"use client"

import { Card } from './card'
import { Button } from './button'
import { Home, ListOrdered, LogIn, LogOut, Menu, Percent, ShoppingCart } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './sheet'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Separator } from './separator'

export function Header() {
  const { status, data } = useSession()

  const handleLoginClick = async () => {
    await signIn()
  }
  const handleLogoutClick = async () => {
    await signOut()
  }
  

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

          { status === 'authenticated' && data?.user && (
            <div className="flex flex-col">
              <div className='flex items-center gap-2 py-4'>
                <Avatar>
                  <AvatarFallback>{data.user.name?.[0].toUpperCase()}</AvatarFallback>
                  
                  {data.user.image && (
                    <AvatarImage src={data.user.image} />
                  )}
                </Avatar>

                <div className="flex-flex-col">
                  <p className='font-medium'>{data.user.name}</p>
                  <p className='text-xs opacity-75'>Boas compras!</p>
                </div>
              </div>

              <Separator />
            </div>
          )}

          <div className="flex flex-col gap-2 mt-4">
            { status === 'unauthenticated' && (
              <Button onClick={handleLoginClick} variant="outline" className='w-full justify-start gap-2'>
                <LogIn  size={16}/>
                Fazer Login
              </Button>
            )}

            { status === 'authenticated' && (
              <Button onClick={handleLogoutClick} variant="outline" className='w-full justify-start gap-2'>
                <LogOut  size={16}/>
                Fazer Logout
              </Button>
            )}

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
