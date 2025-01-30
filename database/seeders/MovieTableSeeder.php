<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $movie = [
            [
                'name' => 'movie 1',
                'slug' => 'movie-1',
                'category' => 'action',
                'video_url' => 'https://www.youtube.com/watch?v=9bZkp7q19f0', // video url
                'thumbnail' => '/images/featured-1.png',
                'rating' => 4.5,
                'is_featured' => 1
            ],
            [
                'name' => 'movie 2',
                'slug' => 'movie-2',
                'category' => 'action',
                'video_url' => 'https://www.youtube.com/watch?v=9bZkp7q19f0', // video url
                'thumbnail' => '/images/featured-1.png',
                'rating' => 4.5,
                'is_featured' => 0
            ],
            [
                'name' => 'movie 3',
                'slug' => 'movie-3',
                'category' => 'action',
                'video_url' => 'https://www.youtube.com/watch?v=9bZkp7q19f0', // video url
                'thumbnail' => '/images/featured-1.png',
                'rating' => 4.5,
                'is_featured' => 0
            ],
        ];

        Movie::insert($movie);
    }
}
