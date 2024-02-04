import { useState } from 'react';

const Accordion = ({ items }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} className="pb-6 lg:pb-5 lg:me-9">
                    <div className=' border-black border-solid border rounded-[10px] ps-5 pe-6 faq_shadow'>
                        <h2>
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full text-left text-[20px] leading-[30px] pt-[19px] !font-medium text-black font-inter ${expandedIndex ? "pb-[9px]" : "pb-[19px]"}`}
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={expandedIndex === index}
                                aria-controls={`faqs-text-${index}`}
                            >
                                <span className='pe-7'>{item.title}</span>

                                <svg className={`transform origin-center transition duration-200 ease-out ${expandedIndex === index ? 'rotate-180' : ''}`} width="19" height="11.22" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.12953 0.961246C2.47703 0.286246 1.39703 0.286247 0.74453 0.938747C0.0695315 1.61375 0.0695315 2.67125 0.74453 3.32375L8.55202 11.1762C8.86702 11.4913 9.29452 11.6712 9.74452 11.6712C10.1945 11.6712 10.622 11.4913 10.937 11.1762L18.7445 3.32375C19.082 3.00875 19.2395 2.58125 19.2395 2.15375C19.2395 1.70375 19.082 1.27625 18.7445 0.938747C18.0695 0.286247 17.012 0.286246 16.3595 0.961246L9.74452 7.59875L3.12953 0.961246Z" fill="black" />
                                </svg>

                            </button>
                        </h2>
                        <div
                            id={`faqs-text-${index}`}
                            role="region"
                            aria-labelledby={`faqs-title-${index}`}
                            className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                        >
                            <div className="overflow-hidden">
                                <p className="pb-4 text-black opacity-70 font-inter font-normal text-base leading-6 max-w-[572px] pe-8">{item.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
