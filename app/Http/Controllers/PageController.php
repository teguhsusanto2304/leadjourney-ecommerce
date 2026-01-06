<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'seo' => [
                'title' => 'LeadJourney.io - Performance Marketing Tracking Software',
                'description' => 'Track all ad platforms in one dashboard...',
                'ogImage' => 'https://leadjourney.io/wp-content/uploads/2024/09/img-37-1.png'
            ]
        ]);
    }
}
