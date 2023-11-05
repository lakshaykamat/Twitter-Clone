import React from 'react'

type Props = {}

const RightSidebar = (props: Props) => {
    return (
        <section className='bg-white hidden pr-28 flex-col border border-r h-screen w-[32%] px-7 xl:flex'>
            <input className='w-[90%] bg-slate-200 px-7 py-2 rounded-3xl focus:bg-inherit mt-2 focus:outline-blue-300' placeholder='Search'></input>
            <div className='bg-slate-100 p-3 mt-4  my-5 rounded-2xl'>
                <h1 className='text-lg font-bold'>Subscribe to Premium</h1>
                <p className='text-sm my-2 font-semibold'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <button className='bg-black text-white rounded-full px-4 text-sm py-2 font-semibold'>Subscribe</button>
            </div>

            <WhatsHappening />
        </section>
    )
}

const WhatsHappening = () => {
    const DATA = [
        {
            title: "São Paulo Grand Prix 2023",
            subTitle: "Formula 1 · November 14, 2022",
            image: "https://pbs.twimg.com/semantic_core_img/1551602387927740416/M-jCRvj8?format=jpg&name=240x240"
        },
        {
            title: "We Support ElvishYadav",
            subTitle: "Trending In India",
            caption: "Trending with #ElvishArmy, #एलविश_नहीं_ये_आंधी_है"
        }, {
            subTitle: "Entertainment · Trending",
            title: "#AttackonTitanFinalSeason",
            caption: "Trending with #shingeki"
        },
        {
            subTitle: "Politics · Trending",
            title: "Air India",
            caption: "19k Post"
        },
        {
            subTitle: "Trending In India",
            title:"SUAVE ABHISHEK MALHAN",
            caption:"397k Post"
        }
    ]

    return (
        <div className='bg-slate-100 py -3 rounded-xl'>
            <h1 className='text-xl font-bold p-3'>What's Happening</h1>
            {
                DATA.slice(0,4).map((post, i) => {
                    return (
                        <div key={i} className='flex justify-between p-3 hover:bg-slate-200'>
                            <div>
                                <span className='text-[.7rem] text-gray-500'>{post.subTitle}</span>
                                <h2 className='text-[.9rem] font-bold'>{post.title}</h2>
                                {post.caption && <span className='text-[.7rem] text-gray-500'>{post.caption}</span>}
                            </div>
                            {
                                post.image &&
                                <div className="flex items-center">
                                    <img
                                        className='w-20 h-14 rounded-xl object-center'
                                        src={post.image}
                                        alt=""
                                    />
                                </div>
                            }
                        </div>
                    )
                })
            }
            <div className='flex justify-between p-3  hover:bg-slate-200'>
                <p className='text-blue-600'>Show more</p>
            </div>
        </div>
    )
}
export default RightSidebar