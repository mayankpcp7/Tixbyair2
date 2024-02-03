import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Accordion = ({ items, defaultOpenIndex }) => {
    const [activeIndex, setActiveIndex] = useState(defaultOpenIndex);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className='lg:me-8'>
            {items.map((item, index) => (
                <div key={index} style={{ border: '1px solid #000', marginBottom: '19px', maxWidth: '617px', width: '100%', borderRadius: '10px', boxShadow: "6px 6px 0px 0px #000", transition: "all 3s ease- out", }}>
                    <div onClick={() => handleClick(index)} style={{ cursor: 'pointer', paddingLeft: '20px', paddingRight: '25px', paddingTop: '19px', paddingBottom: '10px', }}>
                        <h3 className='font-inter font-medium text-[20px] leading-[30px]'>{item.title}</h3>
                    </div>
                    {activeIndex === index && (
                        <div style={{ paddingLeft: '20px', paddingRight: '25px', paddingBottom: '15.8px' }}>
                            <p className='font-inter font-normal text-base leading-6 text-black opacity-70 max-w-[572px] pe-6'>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
