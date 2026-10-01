import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import './App.css'

import ProfileCard from './Component/profileCard/ProfileCard'
import ProductCard from './Component/profileCard/ProductCard'
import Badge from './Component/profileCard/Badge'
import Navbar from './Component/profileCard/Navbar'
import CourseCard from './Component/profileCard/CourseCard'
import UserCard from './Component/profileCard/UserCard'
import BlogCard from './Component/profileCard/BlogCard'
import TeamCard from './Component/profileCard/TeamCard'
import Message from './Component/profileCard/Message'
import Footer from './Component/profileCard/Footer'


function App() {

  const menu = ["Home", "About", "Projects", "Contact"]

  const footerLinks = ["Facebook", "Instagram", "LinkedIn"]

  return (
    <>
         <div className="cards-wrap">
          <h1>This is React js Homework</h1>
      <ProfileCard
        name="Halima"
        job="Web Developer"
        image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      />

      <ProductCard
        name="Laptop"
        price="800"
        image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
      />

      <Badge
        text="New"
        type="success"
        size="large"
      />

      <Navbar
        logo="My Website"
        menuItems={menu}
      />

      <CourseCard
        name="React for Beginners"
        instructor="John"
        price="50"
      />

      <UserCard
        name="Sarah"
        location="Kabul"
        image="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
      />

      <BlogCard
        title="Learning React"
        description="React is a JavaScript library for building user interfaces."
        image="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
      />

      <TeamCard
        name="David"
        position="UI Designer"
        image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      />

      <Message
        message="Your registration was successful!"
        type="success"
      />

      <Footer
        company=" Web development"
        links={footerLinks}
      />
      </div>

    </>
  )
}

export default App