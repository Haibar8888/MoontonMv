<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use \Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\SubscriptionPlan;

class UserSubscription extends Model
{
    //

    use SoftDeletes, HasFactory;

    protected $fillable = ['user_id', 'subscription_plan_id', 'price', 'expires_date', 'payment_status', 'snapToken'];

    public function subscriptionPlan(): BelongsTo
    {
        return $this->belongsTo(SubscriptionPlan::class);
    }
}
