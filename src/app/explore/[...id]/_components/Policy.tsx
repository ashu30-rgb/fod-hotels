import React from 'react'

function Policy() {
    return (
        <div className='border rounded-xl p-4 space-y-8'>
            <div className='border-b pb-4'>
                <h2 className=" text-2xl font-semibold">Payment Term Policy</h2>
                <ul className='mt-4'>
                    <li className='list-disc list-inside'>
                        100% of the total room booking amount must be paid at the time of confirmation.
                    </li>
                    <li className='list-disc list-inside'>
                        Bookings are confirmed only after full payment is received.
                    </li>
                    <li className='list-disc list-inside'>
                        Prices are subject to change without prior notice until the booking is confirmed.
                    </li>
                </ul>
            </div>
            <div className='border-b pb-4'>
                <h2 className=" text-2xl font-semibold">Cancellation Policy</h2>
                <ul className='mt-4 space-y-2'>
                    <li className='list-disc list-inside'>
                        If cancellation is made 48 hours or more before the check-in date, 30% of the total booking amount will be charged as cancellation fees.
                    </li>
                    <li className='list-disc list-inside'>
                        If cancellation is made within 48 hours of the check-in date, or in case of no-show, the full booking amount will be charged.
                    </li>
                    <li className='list-disc list-inside'>
                        Early check-out after check-in will not be eligible for any refund.
                    </li>
                    <li className='list-disc list-inside'>
                        In case of unforeseen circumstances such as weather conditions, government restrictions, natural calamities, or other events beyond human control, bookings may be modified or rescheduled subject to availability. Cash refunds may not be applicable in such cases.
                    </li>
                </ul>
            </div>
            <div className=' pb-4'>
                <h2 className=" text-2xl font-semibold">Refund Policy</h2>
                <ul className='mt-4 space-y-2'>
                    <li className='list-disc list-inside'>
                        Any eligible refund will be processed within 7-14 working days after approval.
                    </li>
                    <li className='list-disc list-inside'>
                        Refunds, if applicable, will be made through the original mode of payment.
                    </li>
                    <li className='list-disc list-inside'>
                        No refund will be provided for unused services, early departures, or no-shows.
                    </li>
                    <li className='list-disc list-inside'>
                        In case the hotel is unable to honor a confirmed booking due to operational reasons, an alternate accommodation of similar category may be provided or a refund will be processed as per policy.
                    </li>
                    <li className='list-disc list-inside'>
                        All refunds are subject to bank processing timelines and partner agreements.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Policy