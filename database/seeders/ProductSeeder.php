<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            [
                'name' => 'B2B Tech Leads',
                'price' => 499.00,
                'description' => 'Verified list of 5,000+ tech decision makers in North America.',
                'stock_quantity' => 50,
                'rating' => 4.9,
                'category' => 'Bundle',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvgC9OFmrSEJeUvrV6OC2piCVkTrhAJce9NcZGN14iOwdNLtYFnFvnfBDT_5qJp_kuMvd7aFLYJ_A6GzlFH0vD8vJmYUzGf2PxKXAitG47qPVUHlmzZ8V-l4mfAlX5vlEAViaUSDaKyljVaTTqt0D_d7hWZrqCmfst-SjQeo-Wd5isNHZ1jHzlDUL4wBcIpXrB-0lCYZAOjsDJqKIihXzyPdLLK3rE7nw8tgC42MctX1x6ms95K67ROJh9GOKtAu6lbHYH5c-Gyd4'
            ],
            [
                'name' => 'Email Tracker',
                'price' => 29.00,
                'description' => 'Real-time open and click tracking plugin for your outreach campaigns.',
                'stock_quantity' => 100,
                'rating' => 4.7,
                'category' => 'Popular',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ73we0AX9gXVi8o-3h7ahOj8_hvp2ahZTTBQgYhn53gKlf8DBb0psYRX01EVyYvDJCYswfUbXKdhxFP6mUtfkZb3NSKp8sXZW5mGrn2CljBFh1B3WOa7DtMjeMO7LekTsrVkNx0obk97ij-fmXAnyV9wznhNtV_9Vt2rrIWZvmzZABL9pvjNW2yOetO_J7j7Xv-5f5l40z3NV8435c8QI1CeNrKE6_F2hI-OmGD137uQsdkexP3IgtVG5DO8BfbuqNYnO4LruzS4'
            ],
            [
                'name' => 'SEO Audit Report',
                'price' => 150.00,
                'description' => 'Comprehensive website analysis to identify ranking opportunities.',
                'stock_quantity' => 25,
                'rating' => 4.5,
                'category' => 'Service',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbrDxIT1tOF593AihKgRIb5XZwrXi9CCgQTPaQWZzhkPnSWoNzrZcYNj5bzl7s2o3DqczvfdOeBWkV62XA_o2dN0W1TbchNR7soczLMqWBqUfmdI0vbzc8I3HgBHEn4xyY6fpIULNxVxKgj_1EBkuryVYzhgUj3UOFvlfsyxI_BGnXKikXx9wgFG-McHxOW_czZhpEBAlS1Q9au8Uh61m_w3CPP0BqMTo6kf3cZvdduBctiqpgZ-FkdAjmJ0c-wZbZfhU3qawxk-0'
            ],
            [
                'name' => 'Premium Analytics',
                'price' => 99.00,
                'description' => 'Unlock advanced filtering and export capabilities for your dashboard.',
                'stock_quantity' => 200,
                'rating' => 4.8,
                'category' => 'Software',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDRSdvRvhQ4y1vFRB4uNqff8OPvAg4hsg4Z2gqfusMRqksfPs_3b2WBn5B4W7ZJb_0oON9ywsSGuTDCVBHIRwYW9HOCYM71LkrF98CFdNwxafQbYLCzd06sZ2L1eBCy-VNF6yu5xpSM5NPJN36pv9BqTTC2TWEpsNCRHWlQAYNwurfABeSqmRdB_968V5vDFSVqmICKK8qHFrV7LBQjbiXRew7Cf382M8RkcF3bMmrlG2uMdTRjHsN5hgTJBuv20SVjn6PLS9gJP4'
            ],
            [
                'name' => 'Auto-Responder Bot',
                'price' => 199.00,
                'description' => 'Automate your initial replies and qualify leads 24/7.',
                'stock_quantity' => 75,
                'rating' => 0,
                'category' => 'Script',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6eYkyKpt1OPlY4NeYsSTe9w0xMqLncWwpL1VEsN9tkXnX8CPnyQvRifTNdAovYRZnAMUHNGoh8c5_zDrNL8m9gLqG-VYJlrD7HIZxIG6UCturn4i97SEjOtYHe1NvPu55JXNr6DikxUZJu9aTc1T5IjXmrVYRBq5Th6tIe7ebfQgW0nPe-3aGV87I5agzUlM23YBUvwUJdd2sh8-PCIUrBipTpPM-dVX4zI6R6IM0wY_t6PSauc-OKWZC5xjfDJyAu8cMTOke7Pw'
            ],
            [
                'name' => 'CRM Connector',
                'price' => 79.00,
                'description' => 'Seamlessly sync data between LeadGen Pro and Salesforce.',
                'stock_quantity' => 150,
                'rating' => 4.6,
                'category' => 'Software',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYNZFgo2GMo6DxCLJwo22tkd6Q5PzUmw_9sVrDgLxmTN_jOEaZvy6EEH9mUiQ_ObI5yj2fNSeUP5Bxj5cHw6bUMy7TDN5F4nSTjaY_cMbpO9e-pBL_6Y3YA0TYRjMkZwH8MD6nxND76r-k68lyNN-0vmr4HzUPxOFG9iv1b0wuC2tVf_vJ8Lel9VpfBgd9J0AbMTJEvLM85_cJMDIzA5xPtl-U1P2Kzn4qXPSDcCRC5rl9dyGNghRGnxdIpfQgfhp-F8h0RMzaGV0'
            ],
            [
                'name' => 'Cold Email Templates',
                'price' => 49.00,
                'description' => '50 high-converting templates for various industries.',
                'stock_quantity' => 500,
                'rating' => 4.9,
                'category' => 'Content',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuC68GFyzWKfRoY4UCtpBPECrKx4tRWVCzAHBa89EdxJFyrjB_7lAi9oCgNwzM2WWynExXRWg8C6WIojETDKeUwk9dq6dYGgi3_FXB3rPHYu3xqHUmWVsbWdFmjpWECkDzsEWwArvw3z3t-f_TmAaEXoSocxuicjutE8wj2Dp9lYrTTyBucuigTnZRvayS4cDeIWXMm7XuWZLfZ2WJSrQ8uX61GtiBOiRKEqQdJ3BtBI66jRP1ET2RY_p4jmPMQh3-SyEukkieJ9p2E'
            ],
            [
                'name' => 'Competitor Spy',
                'price' => 299.00,
                'description' => "Track your competitors' ad spend and keyword strategy.",
                'stock_quantity' => 40,
                'rating' => 4.4,
                'category' => 'Software',
                'image' => 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm81EI7ATNmQfKpL37Gbpr-KHzTihtDqL5-lgnfqTIf9bWfywB2RTkm-dhGDDephyWkvtKIB7GJbHdjLktmmLKYYWrd6tua45o96yf6qBzgajORvIQNAw2fJ7NxEbp5vdNA4dKH5mJwSKRH5hU9-_52hBMSr--Rl6GiuwrrXPVRCS6dqcoyq6UNPPV1QIRlUAYfAP1NTaBNmbOuLUxJAKYZE6DzqsE3Y3A7kTS-xrDaE7mr7RMAEPXG6r1IST_y9NJFhvgyoVv7TY'
            ]
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}