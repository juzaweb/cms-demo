<?php

namespace Juzaweb\Subscription\Events;

use Juzaweb\Subscription\Models\Plan;

class CreatePlanSuccess
{
    public function __construct(public Plan $plan)
    {
        //
    }
}
