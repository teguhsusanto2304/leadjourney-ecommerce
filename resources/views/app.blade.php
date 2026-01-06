<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'LeadJourney') }}</title>

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
        
        <script async src="https://a.leadjourney.io/4189nvnkuwqxt.js?5nw1k8=..."></script>
    </head>
    <body class="font-sans antialiased bg-[#0a0a0c] text-white">
        @inertia
    </body>
</html>