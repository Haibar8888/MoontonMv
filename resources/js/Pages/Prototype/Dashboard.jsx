import React from 'react';
import { Head } from '@inertiajs/react'; // Adjust the import based on your setup
import Authenticated from '@/Layouts/Authenticated/Index';// Adjust the import based on your setup
import Featured from '@/Layouts/Authenticated/Featured';// Ensure this is the correct path to your Featured component
import Flickity from 'react-flickity-component'; // Ensure this is the correct import for Flickity
import MovieCard from '@/Components/MovieCard';

function Dashboard() {
    const flickityOption = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1"
    };

    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Authenticated>
                {/* Start feature */}
                <div classNameName="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity classNameName="absolute gap-[30px]" options={flickityOption}>
                    {
                        [1, 2, 3, 4, 5, 6].map((index) => (
                            <Featured key={index}  slug={`the batman the dark knight ${index}`} name="the-batman-dark-night" category="heroes" rating={index + 1} thumbnail="/images/featured-2.png"/>
                        ))
                    }
                </Flickity>
                {/* End feature */}

                {/*start browse */}
                <div className='mt-[50px]'>
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    <Flickity className="gap-3" options={flickityOption}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                            <MovieCard thumbnail="/images/browse-1.png" name="Mother father Fucking cat" slug={`mother-father-fucking-cat-${index}`} category="segs" key={index}/>
                        ))}
                    </Flickity>
                </div>
                {/* end browse */}
            </Authenticated>
        </>
    );
}

export default Dashboard
