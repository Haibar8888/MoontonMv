<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $subscriptionPlan = [
            [
                'name' => 'Basic',
                'price' => 100000,
                'active_period_in_months' => 3,
                'featured' => json_encode([
                    'featured 1',
                    'featured 2',
                    'featured 3',
                ])
            ],
            [
                'name' => 'Premium',
                'price' => 500000,
                'active_period_in_months' => 12,
                'featured' => json_encode([
                    'featured 1',
                    'featured 2',
                    'featured 3',
                    'featured 4',
                    'featured 5',
                    'featured 6',
                ])
            ]
        ];
        SubscriptionPlan::insert($subscriptionPlan);
    }
}
