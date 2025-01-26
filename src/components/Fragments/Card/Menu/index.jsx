import { useEffect, useState } from 'react'
import { Services } from '../../../../api/Information'
import { Link } from 'react-router-dom'
const MenuCardLoading = () => {
    const htmlLoading = []
    for (let i = 0; i < 12; i++) {
        htmlLoading.push(
            (
                <div className='flex flex-col gap-4 items-center justify-center' key={i}>
                    <div className={`w-24 h-24 rounded-md flex flex-col gap-4 items-center justify-center bg-gray-200 animate-pulse`} >

                    </div>
                    <span className=" bg-gray-100 text-center h-6 w-full"></span>
                </div>
            )
        )
    }
    return htmlLoading
}

const MenuCard = () => {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function getServices() {
            const data = await Services()
            setServices(data?.data)
            setTimeout(() => setLoading(false), 1000);
        }
        getServices();
    }, []);
    if (loading) {
        return (
            <div className="container mx-auto py-8 px-8">
                <div className="flex items-start justify-between mx-auto gap-8 my-4 " >
                    <MenuCardLoading />
                </div>
            </div>
        )
    }
    return (
        <div className="container mx-auto py-8 px-8">
            <div className="flex items-start justify-between mx-auto gap-8 my-4 ">
                {
                    services.map((item) => {
                        return (
                            <Link to={`/payment/${item.service_code}`} key={item.service_code} >
                                <div className={`w-24 h-24 rounded-full flex flex-col gap-4 items-center justify-center`} >
                                    <img src={item.service_icon} alt={item.service_name} />
                                    <span className=" text-center h-6">{item.service_name}</span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MenuCard