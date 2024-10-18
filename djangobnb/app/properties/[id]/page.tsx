import Image from 'next/image';
import React from 'react'

type Props = {}

const PropertyDetailPage = (props: Props) => {
    return (
        <main className="max-w-[1500px] mx-auto px-6">
            <div className='w-full h-[64vh] overflow-hidden rounded-xl relative'>
                <Image
                    fill
                    src="/beach_1.jpg"
                    alt='Beach House'
                    // sizes='(max-width:768px) 768px, (max-width:1200px) 768px, 768px'
                    className='object-cover w-full h-full' />
            </div>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-5 gap-4'>
                <div className='py-6 pr-6 col-span-3'>
                    <h1 className='mb-4 text-4xl'>Property name</h1>
                    <span className='mb-6 block text-lg text-gray-600'>4 guests - 2 bedrooms - 1 bathroom</span>
                    <hr />
                    <div className='py-6 flex items-center space-x-4'>
                        <Image 
                            src="/profile_pic_1.jpg"
                            width={50}
                            height={50}
                            className='rounded-full'
                            alt='Landlord pic'
                        />
                        <p><strong>John Doe</strong> is your host</p>
                    </div>
                </div>
                <div>
                    right side
                </div>
            </div>
        </main>
    )
}

export default PropertyDetailPage;