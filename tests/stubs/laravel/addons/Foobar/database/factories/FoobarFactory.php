<?php

use Addons\Foobar\Models\Foobar;
use Faker\Generator as Faker;

$factory->define(Foobar::class, function (Faker $faker) {
    return [
        'name'        => ($name = $faker->unique()->word),
        'handle'      => str_handle($name),
        'description' => $faker->sentence,
        'status'      => true,
    ];
});
