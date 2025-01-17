import React from "react";

export default function LogoSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="text-center font-serif text-xl text-green-800"
          >
            Logo
          </div>
        ))}
      </div>
    </section>
  );
}
