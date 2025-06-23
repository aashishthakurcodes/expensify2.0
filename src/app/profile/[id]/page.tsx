'use client'
import React from 'react'

interface PageProps {
  params: {
    id: string;
  };
}

export default function page({ params }: PageProps) {
  return (
     <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile PAge</h1>
        <h1 className=''>{params.id}</h1>
      </div>
  )
}

