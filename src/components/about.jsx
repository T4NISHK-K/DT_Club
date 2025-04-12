'use client'

import React from 'react'
import CardComponent from './developers'
import { Menu, X, MapPin } from 'lucide-react'
import s2 from '../assets/s2.jpeg'
import a2 from '../assets/a2.png'
import priyanshi from "../assets/images/priyanshi.JPG"
import Akash from "../assets/images/aakash.JPG"
import Sanat from "../assets/images/Sanat.JPG"
import Ankush from "../assets/images/abhay2.JPG"
import rishita from "../assets/images/rishita2.JPG"
import anubhav from "../assets/images/anubhav (2).JPG"
import Palak from "../assets/images/palak (2).JPG"
import swati from "../assets/images/swati.JPG"
import divya from "../assets/images/divya.JPG"
import abhinav from "../assets/images/abhinav (2).JPG"
import siddhi from "../assets/images/siddhi.JPG"
import shakti from "../assets/images/shakti.JPG"
import Palaks from "../assets/images/palaks.JPG"
import nandani from "../assets/images/nandani.JPG"
import saksham from "../assets/images/saksham (2).JPG"
import abhay from "../assets/images/Abhay.JPG"
import mahi from "../assets/images/mahi.png"
import madhvendra from "../assets/images/Madhvendra.JPG"
import ansh from "../assets/images/ansh.jpg"
import { Link } from 'react-router-dom'


const locations = [
  {
    title: 'Cultivate Design Thinking ',
    timings: 'We provide a nurturing environment for members to develop their design thinking skills, from ideation to prototyping and testing.',
    address: '',
  },
  {
    title: 'Promote Social Impact',
    timings: 'Our projects aim to address pressing societal issues, leveraging design thinking to drive meaningful and sustainable change.',
    address: '',
  },
  {
    title: 'Foster Community Engagement ',
    timings: ' We actively collaborate with local organizations, businesses, and community members to create shared value and foster a spirit of collective problem-solving.',
    address: '',
  },
]

const users = [
  {
    name: 'Madhvendra',
    image: madhvendra,
    position: 'President',
  },
  {
    name: 'Mahi',
    image: mahi,
    position: 'Vice President',
  },
  {
    name: 'Priyanshi',
    image: priyanshi,
    position: 'Vice President',
  },
  {
    name: 'Abhay Singh',
    image: abhay,
    position: 'lead',
  },
  {
    name: 'Aakash',
    image: Akash,
    position: 'lead',
  },
  {
    name: 'Abhay trivedi',
    image: Ankush,
    position: 'lead',
  },
  {
    name: 'Rishita Rai',
    image: rishita,
    position: 'Event Management Co-lead',
  },
  {
    name: 'Anubhav Singh',
    image: anubhav,
    position: 'Technical Co-lead',
  },
  {
    name: 'Palak Bhatnagar',
    image: Palak,
    position: 'Technical Co-lead',
  },
  {
    name: 'Swati Jha',
    image: swati,
    position: 'Marketing Co-lead',
  },
  {
    name: 'Divya Pratap',
    image: divya,
    position: 'Marketing Co-lead',
  },
  {
    name: 'Abhinav',
    image: abhinav,
    position: 'Marketing Co-lead',
  },
  {
    name: 'Siddhi Arora',
    image: siddhi,
    position: 'Research Co-lead',
  },
  {
    name: 'Shakti Singh',
    image: shakti,
    position: 'Research Co-lead',
  },
  {
    name: 'Palak Srivastava',
    image: Palaks,
    position: 'Social-media Co-lead',
  },
  {
    name: 'Nandani',
    image: nandani,
    position: 'Social-media Co-lead',
  },
  {
    name: 'Saksham Patel',
    image: saksham,
    position: 'Event Capturing Team',
  },
  {
    name: 'Ansh',
    image: ansh,
    position: 'Event Capturing Team',
  },
].filter(user => user.image);

export function AboutPageOne() {

  return (
    <div>

      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-red-300 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">About the Club</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            <span className='text-red-600'>Welcome</span> to the Design Thinking Club
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            The Design Thinking Club is a vibrant community of innovators, problem-solvers, and visionaries who come together to apply design thinking principles to tackle real-world challenges. Through our collaborative approach, we strive to create positive change and empower our local community.
            or
            The Design Thinking Club is a dynamic hub for creative minds, problem-solvers, and future leaders. We unite to tackle real-world challenges using innovative design thinking. Together, we drive positive change and empower our community through collaboration and bold ideas.

          </p>
        </div>
        <div className="w-full space-y-4">
          <img
            className="h-[100px] w-full rounded-xl object-contain md:h-full"
            src={s2}
            alt=""
          />
        </div>
        <div className="max-w-max rounded-full border bg-red-300 p-1 px-3 my-5">
          <p className="text-xs font-semibold leading-normal md:text-sm">OUR VISION
            AND MISSION</p>
        </div>
        {/* locations */}
        <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
          {locations.map((location) => (
            <div key={location.title} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
              <p className="w-full text-xl font-semibold  text-red-600">{location.title}</p>
              <p className="w-full text-base text-gray-700">{location.timings}</p>
              <p className="text-sm font-medium">{location.address}</p>
            </div>
          ))}
        </div>
        <hr className="mt-20" />
        {/* greetings */}
        <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-red-300 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">Join Us &rarr;</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl"><span className='text-red-600'>Meet</span> our team</p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple—bring together a diverse group of creative thinkers and cultivate a collaborative environment where innovative ideas thrive.
            </p>
            <div></div>
          </div>
        </div>
        {/* TEAM */}
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[300px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">{user.name}</p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div>
        <p className="my-8 text-3xl font-bold text-gray-900 md:text-4xl"><span className='text-red-600'>Technical</span>  Team</p>
        <CardComponent/>
        {/* Hiring Banner */}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base text-red-600"> UPCOMING EVENTS</p>
            <p className="text-3xl font-bold md:text-4xl"><span className='text-red-600'>Explore the World of Computer Science:</span>
              Join Our Interactive Workshop on Diverse Domains</p>
            <p className="text-base text-gray-600 md:text-lg">
              Discover the exciting world of computer science
              through our engaging workshop designed just for
              you! Dive into various domains such as Web
              Development, Artificial Intelligence ,Cybersecurity,
              and more. This is your chance to explore different
              fields, understand what sparks your interest, and
              find the path that best suits your passion and skills.
              Don't miss out on this opportunity to gain valuable
              insights and set the stage for your future career in
              tech!
            </p>
            <Link
              to="https://uc64l098ghp.typeform.com/to/shvofxtd">
              <button
                type="button"
                className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Join Now
              </button>
            </Link>
          </div>
          <div className="md:mt-o mt-10 w-full  object-contain">
            <img
              src={a2}
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />

    </div>
  )
}
