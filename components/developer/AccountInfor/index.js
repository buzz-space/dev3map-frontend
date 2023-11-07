import Image from 'next/legacy/image'
import React from 'react'

const AccountInfor = ({ data }) => {
    return (
        <div className='flex items-start gap-[40px]'>
            <img src={data?.avatar} className='rounded-full object-contain w-[48px] h-[48px] md:w-[132px] md:h-[132px] overflow-hidden' />
            <div className='flex flex-col'>
                <h6 className='text-[24px] md:text-[44px] font-[800] text-white uppercase'>{data?.login}</h6>
                {
                    data?.description && <p className='text-[18px] md:text-[24px] font-[400] text-white mt-[8px]'>
                        {data?.description}
                    </p>
                }
                {
                    data?.login && <div className='flex items-center gap-[8px] md:gap-[12px] mt-[16px] md:mt-[22px]'>
                        <div className={'w-[16px] h-[16px] md:w-[24px] md:h-[24px] relative'}>
                            <Image src={'/imgs/github.svg'} layout="fill" objectFit="contain" alt="Github icon" />
                        </div>
                        <a href={`https://github.com/${(data?.login).toLowerCase()}`} className='text-[14px] md:text-[16px] font-[400] text-white no-underline cursor-pointer' target='_blank'>{`https://github.com/${(data?.login)?.toLowerCase()}`}</a>
                    </div>
                }
            </div>
        </div>
    )
}

export default AccountInfor