import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4">
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-12 text-center text-3xl font-bold shadow-lg max-w-xl mx-auto">
        Tailwind Cards with Props!
      </h1>
      
      <div className="flex flex-wrap gap-8 justify-center">
        <Card 
          title="The Developer" 
          description="Coding late into the night, fueled by coffee and dreams of an error-free console." 
          imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
        />
        <Card 
          title="The Designer" 
          description="Crafting pixel-perfect layouts and vibrant color palettes that inspire users." 
          imageUrl="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop"
        />
        <Card 
          title="The Product Manager" 
          description="Aligning teams, setting roadmaps, and ensuring the product vision comes to life." 
          imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
        />
      </div>
    </div>
  )
  // props make components resuable

}

export default App
