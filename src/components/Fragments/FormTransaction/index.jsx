import { useEffect , useState} from "react"
import TransactionCard from "../Card/Transaction"
import { GetTransaction } from "../../../api/Transaction"

const TransactionForm = () => {
    const defaultLimit = 5
    const [loading, setLoading] = useState(true)
    const [transactions, setTransactions] = useState([])
    const [offset, setOffset] = useState(0)
    useEffect(() => {
        async function getTransaction(){
            const data = await GetTransaction({offset: offset, limit: defaultLimit})
            if(data.status === 0){
                setTransactions(data.data.records)
                setTimeout(() => setLoading(false), 1000);
            }else{
                console.log(data.message)
            }
        }
        getTransaction()
    },[])

    async function showMore(){
        setLoading(true)
        const nowOffset =offset + defaultLimit;
        const data = await GetTransaction({offset: nowOffset, limit: defaultLimit})
        if(data.status === 0){
            setTransactions(data.data.records)
            setOffset(nowOffset)
            setTimeout(() => setLoading(false), 1000);
        }else{
            console.log(data.message)
        }
    }
    
    const TransactionCardLoading = () => {
        return (
            <>
                {[...Array(5)].map((_, index) => (
                    <TransactionCard key={index} loading={loading} />
                ))}
            </>
        )
    }

    if(loading){
        return (
            <div className="container mx-auto p-8">
                <h1 className="text-2xl font-semibold mb-6">Semua Transaksi</h1>
                <TransactionCardLoading/>
            </div>
        )
    }
    return (
        <>
            <div className="container mx-auto p-8">
                <h1 className="text-2xl font-semibold mb-6">Semua Transaksi</h1>
                {
                    transactions && transactions.length ?
                    transactions.map((item, key) => {
                        return <TransactionCard key={key} id={item.id} transaction={item}/>
                    }) :
                    <h1 className="text-xl font-semibold text-center text-gray-400">Tidak ada transaksi</h1>
                }

                {
                    transactions.length >= defaultLimit ?
                    <p className="text-xl text-orange-500 text-center font-semibold py-8 cursor-pointer" onClick={() => showMore()}>Show more</p> : ""}
                
            </div>
        </>
    )
}

export default TransactionForm