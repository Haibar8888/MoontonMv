import React from 'react'
import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/Authenticated/Index';
import SubscriptionCard from '@/Components/SubscriptionCard';

export default function SubscriptionPlans() {
    return (
        <>
            <Head>
                <title>Subscription Plan</title>
            </Head>
            <Authenticated>
            <div className="ml-[300px] px-[50px]">
                <div className="flex flex-col items-center">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences from movies.
                    </p>
                    <div class="flex justify-center gap-10 mt-[70px]">
                        <SubscriptionCard name="Basic" price={150000} durationInMonth={3} features={['feature1', 'feature2', 'feature3']} />
                        <SubscriptionCard isPremium={true} name={"Premium"} price={500000} durationInMonth={3} features={['feature1', 'feature2', 'feature3','feature3','feature3','feature3']} />
                    </div>
                </div>
            </div>
            </Authenticated>
        </>

  )
}
