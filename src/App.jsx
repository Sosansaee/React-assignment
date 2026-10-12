
import './App.css'

import Navbar from './Component/profileCard/Navbar'
import ProfileCard from './Component/profileCard/ProfileCard'
import ProductCard from './Component/profileCard/ProductCard'
// import Badge from './Component/profileCard/Badge'
import CourseCard from './Component/profileCard/CourseCard'
import UserCard from './Component/profileCard/UserCard'
import BlogCard from './Component/profileCard/BlogCard'
import TeamCard from './Component/profileCard/TeamCard'
// import Message from './Component/profileCard/Message'
import Footer from './Component/profileCard/Footer'

function App() {
  const menu = ['Home', 'About', 'Projects', 'Contact']

  const footerLinks = ['Facebook', 'Instagram', 'LinkedIn']

  return (
    <>
      <Navbar
        logo="My Website"
        menuItems={menu}
      />

      <main>
        <h1 className="page-title">
          This is React js Homework
        </h1>

        <div className="cards-wrap">
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

          {/* <Badge
            text="New"
            type="success"
            size="large"
          /> */}

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
{/* 
          <Message
            message="Your registration was successful!"
            type="success"
          /> */}
        </div>
      </main>

    
        <Footer company="Web Development" links={footerLinks} />
</>
   
  )
}

export default App