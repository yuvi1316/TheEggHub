import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-6">About Our Farm</h1>
          <p className="text-gray-600 mb-4">
            Welcome to EggHub, where we've been providing the highest quality eggs
            to our community for over 20 years. Our commitment to sustainable farming
            practices and animal welfare sets us apart.
          </p>
          <p className="text-gray-600 mb-4">
            Our hens are free to roam in spacious pastures, enjoying natural sunlight
            and fresh air. They're fed with organic feed, ensuring the eggs they produce
            are nutritious and delicious.
          </p>
          <p className="text-gray-600">
            We take pride in delivering fresh eggs directly from our farm to your table,
            maintaining the highest standards of quality and freshness throughout the process.
          </p>
        </div>
        <div>
          <img
            src="https://imgs.search.brave.com/LPDb-IfcCLOW5AFcFaVKjNQz8xX24TtlmWm2cDKVT-E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTQ2/MjEyNjA1L3Bob3Rv/L3Byb3VkLWhlbi1z/aXR0aW5nLW9uLWhl/ci1lZ2cuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUotMVN3/RzZ1Z2J4NzhNQTBU/bkxzZEVkRU9WYllB/TkF1TXA2OWxGQzNo/ZTQ9"
            alt="Our Farm"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;