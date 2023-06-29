import React from 'react'

export const metadata = {
  title: "Not-Found",
  description: "Pagge is not founded",
};

export default function NotFound() {
  return (
    <main className="container m-auto">
      <div className="w-auto flex justify-center">
        <img src='/404.png' className='w-2/3 h-1/2 object-cover '/>

      </div>
    </main>
  );
}
