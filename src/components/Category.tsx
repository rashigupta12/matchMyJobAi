import React from "react";

interface CategoryProps {
  A: string;
}

const Category: React.FC<CategoryProps> = ({ A }) => {
  return (
    <div className="job-category-box rounded-lg bg-white p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:bg-gray-800 hover:text-white hover:shadow-lg max-xl:w-110 max-xl:h-110">
      <h3 className="text-xl font-semibold">
        <a href="#">{A}</a>
      </h3>
      <p className="text-gray-600">120 Jobs available</p>
    </div>
  );
};

export default Category;
