import { useState, useEffect } from 'react'
import { Banner } from "../../../../api/Information";
const PromoItems = [
    {
        id: 1,
        title: 'Banner 1',
        image: 'Banner 1.png',
        link: '#',
    },
    {
        id: 2,
        title: 'Banner 2',
        image: 'Banner 2.png',
        link: '#',
    },
    {
        id: 3,
        title: 'Banner 3',
        image: 'Banner 3.png',
        link: '#',
    },
    {
        id: 4,
        title: 'Banner 4',
        image: 'Banner 4.png',
        link: '#',
    },
    {
        id: 5,
        title: 'Banner 5',
        image: 'Banner 5.png',
        link: '#',
    }
]
const PromoCardLoading = () => {
    const htmlLoading = []
    for (let i = 0; i < 5; i++) {
        htmlLoading.push(
            (
                <div className="flex-1 min-w-[250px] max-w-[270px] md:w-1/4 h-[120px] rounded-lg bg-gray-200 animate-pulse" key={i}></div>
            )
        )
    }
    return htmlLoading
}
const PromoCard = () => {
    const [promos, setPromos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getPromo() {
            const data = await Banner()
            setPromos(data?.data);
            setTimeout(() => setLoading(false), 1000);
        }
        getPromo();
    }, []);
    if (loading) {
        return (
            <div className="container mx-auto px-8">
                <div className="flex flex-col items-start justify-between mx-auto gap-8 my-20 snap-x snap-mandatory">
                    <h1 className='text-xl font-bold'>Temukan promo menarik</h1>
                    <div className="w-full">
                        <div className='flex gap-6 overflow-x-auto md:min-w-screen md:snap-x md:snap-mandatory'>
                            <PromoCardLoading />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container mx-auto px-8">
            <div className="flex flex-col items-start justify-between mx-auto gap-8 my-20 snap-x snap-mandatory ">
                <h1 className='text-xl font-bold'>Temukan promo menarik</h1>
                <div className="w-full ">
                    <div className='flex gap-6 overflow-x-auto md:min-w-screen md:snap-x md:snap-mandatory'>
                        {
                            (promos !== null) ?
                                promos.map((item) => {
                                    return (
                                        <div className="flex-1 min-w-[250px] max-w-[270px] md:w-1/4 h-[120px] rounded-lg" style={{ backgroundImage: `url('${item.banner_image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} key={`promo-${item.banner_name}`}></div>
                                    )
                                })
                                : PromoItems.map((item) => {
                                    return (
                                        <div className="flex-1 min-w-[250px] max-w-[270px] md:w-1/4 h-[120px] rounded-lg" style={{ backgroundImage: `url('src/assets/${item.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} key={`promo-${item.title}`}></div>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromoCard