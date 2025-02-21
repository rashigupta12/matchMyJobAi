'use client'
import React from 'react'
import { useState } from "react";
import { Star, Heart, Calendar, MapPin, DollarSign } from "lucide-react";
import Image from 'next/image';
interface Job {
  imgUrl: string;
  company: string;
  profile: string;
  location: string;
  posted: string;
  type: string;
  mode: string;
  salary: string;
  rating: number;
}

const FeaturedJobs = ({ job }: { job: Job }) => {
    const [saved, setSaved] = useState(false);

  return (
    <div className="border rounded-lg  p-6 flex flex-col gap-2 bg-white  max-xl:w-110 hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
           <Image src={job.imgUrl} alt={job.company} width={60} height={60} className="rounded-md" />
          <div>
            <h4 className="text-green-600 font-semibold">{job.company}</h4>
            <h3 className="text-xl font-bold flex items-center gap-1">
              {job.profile} <span className="text-blue-500">⚡</span>
            </h3>
          </div>
        </div>
        <button onClick={() => setSaved(!saved)} className="text-gray-400 hover:text-red-500">
          <Heart fill={saved ? "red" : "none"} />
        </button>
      </div>
      <div className="text-gray-500 flex items-center gap-3 text-sm">
        <MapPin size={16} />
        {job.location} 
        <Calendar size={16} />
        {job.posted}
      </div>
      <div className="flex gap-2">
        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">{job.type}</span>
        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">{job.mode}</span>
      </div>
      <div className="flex items-center gap-2 font-medium text-lg">
        <DollarSign size={18} />
        {job.salary} / year
      </div>


      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} fill={i < job.rating ? "#FACC15" : "none"} stroke="#FACC15" />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs