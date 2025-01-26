const TransactionCard = (props) => {
    const { transaction ,loading } = props


    function ConvertDate(timestamp = '') {
        const arrayMonth = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        const date = new Date(transaction.created_on);
        const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const monthName = arrayMonth[month - 1];
        return `${day} ${monthName} ${year} ${seconds}:${minutes} WIB`;
    }
    return (
        <div className={`flex py-6 px-8 w-full justify-between border border-gray-200 rounded-xl mb-4 ${loading ? "animate-pulse bg-gray-200" : ""}`} >
            <div className="flex flex-col gap-2 flex-1">
                {loading ? <p className="text-3xl w-45 h-8 font-semibold bg-gray-300 animate-pulse"></p> : <p className={`text-3xl font-semibold ${transaction.transaction_type === "TOPUP" ? "text-emerald-500" : "text-orange-500"}`}>+ Rp. {Number(transaction.total_amount).toLocaleString('id-ID')}</p>}
                {loading ? <p className="w-54 h-4 bg-gray-300 font-semibold animate-pulse"></p> : <p className=" text-gray-300 font-semibold">{ConvertDate()}</p>}
            </div>
            <div className={`flex flex-col gap-2 flex-1 ${loading ? "items-end" : ""}`}>
                {loading ? <p className="w-48 h-8 bg-gray-300 font-semibold animate-pulse text-right"></p> : <p className={`font-semibold text-lg text-right text-gray-600`}>{transaction.transaction_type === "TOPUP" ? "Top Up Saldo" : `${transaction.description} Prabayar`}</p>}
            </div>
        </div>
    )
}

export default TransactionCard