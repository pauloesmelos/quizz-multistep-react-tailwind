import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { GlobalContextSlide } from '../GlobalContext/GlobalContextSlide';

const Radio = ({ question, value, setValue }) => {
  const { id, pergunta, options } = question;
  const { slideActive, prevSlide } = React.useContext(GlobalContextSlide);
  const handleChange = ({ target }) => {
    setValue({
      ...value, [target.id]: target.value
    });
  }
  return (
    <div className="w-[50%] shadow-lg bg-white p-10 rounded-lg">
       <div>
        {
          slideActive > 0 ?
          <IoArrowBack 
          className="text-2xl my-5 cursor-pointer hover:text-[#593cfb]"
          onClick={prevSlide}
          />
          :
          <></>
        }
        <h1 className="text-2xl font-medium text-left my-2">
          {pergunta}
          </h1>
       </div>
       {
        options.map((option, index) => (
          <label 
          className="block text-left text-gray-500 text-lg py-2 rounded-lg hover:text-black cursor-pointer"
          key={index * Math.random()}>
            <input
            className="checked:bg-blue-400"
            type="radio"
            id={id}
            value={option}
            onChange={handleChange} 
            checked={option === value[id]}
            />
            {option}
          </label>
        ))
       }
    </div>
  )
}

export default Radio;