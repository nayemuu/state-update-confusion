import React, { useState } from 'react';

function Button2(props) {
  const [count, setCount] = useState(0);
  // console.log('count = ', count);
  const fetchData = async () => {
    setCount(2);
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
    setCount(3);
  };

  const incrementHandler = () => {
    setCount(1);
    fetchData();
  };

  return (
    <div className="flex justify-center items-center mt-[100px]">
      <div className="bg-[#f2f3f8] p-8 rounded-md flex flex-col justify-center items-center">
        <div className="mb-4 text-xl text-bold">{count}</div>
        <button
          type="button"
          className="px-[22px] md:px-[30px] lg:px-[35px] xl:px-[37px] py-[3px] sm:py-[4px] md:py-[7px] lg:py-[9px] xl:py-[12px] bg-gradient-to-b from-[#D13F96] to-[#833586] text-white rounded-[5px] text-xs md:text-sm lg:text-base xl:text-lg font-bold leading-[21.48px]"
          onClick={incrementHandler}
        >
          onClick increment by 1
        </button>
      </div>
    </div>
  );
}

export default Button2;
