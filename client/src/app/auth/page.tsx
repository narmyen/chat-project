'use client'
import React, { useState } from 'react'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import BackgroundCat from '@/app/assets/backgroundCat2.jpg'
import Cat from "@/app/assets/cat.png"
import Image from 'next/image';

function page() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {

  }

  const handleSignUp = async () => {

  }


  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='h-[80vh] w-[80vw] bg-white border-2 border-white text-opacity-90 shadow-2xl  
      md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2 '>
        <div className='flex flex-col gap-10 items-center justify-center'>
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center gap-2">
              <Image src={Cat} alt="Cat" height={50} />
              <h1 className='text-5xl font-bold md:text-6xl mb-2'>Welcome</h1>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <Tabs className='w-3/4'>
              <TabsList className='bg-transparent rounded-none w-full'>
                <TabsTrigger value="login" className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state:active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300'>
                  Login
                </TabsTrigger>
                <TabsTrigger value="signUp" className='data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state:active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300'>
                  Sign up
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login" className='flex flex-col gap-5'>
                <Input
                  placeholder='Email'
                  type='email'
                  className='rounded-full p-6 mt-4'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder='Password'
                  type='password'
                  className='rounded-full p-6'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button className='rounded-full p-6' onClick={handleLogin}>Login</Button>
              </TabsContent>
              <TabsContent value="signUp" className='flex flex-col gap-5'>
                <Input
                  placeholder='Email'
                  type='email'
                  className='rounded-full p-6'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder='Password'
                  type='password'
                  className='rounded-full p-6'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  placeholder='Confirm Password'
                  type='password'
                  className='rounded-full p-6'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button className='rounded-full p-6' onClick={handleSignUp}>Sign up</Button>

              </TabsContent>
            </Tabs>
          </div>
        </div>
        <div className='hidden xl:flex justify-center items-center mr-8 '>
          <Image src={BackgroundCat} alt="background" height={500} />
        </div>
      </div>
    </div>
  )
}

export default page
