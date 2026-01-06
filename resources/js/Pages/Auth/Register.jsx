import React, { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Mail, Lock, User, ArrowRight, UserPlus } from 'lucide-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <div className="bg-[#f3f4f6] dark:bg-[#111114] text-gray-900 dark:text-gray-100 font-sans min-h-screen flex flex-col transition-colors duration-300 antialiased selection:bg-[#00c365] selection:text-white">
            <Head title="Register" />

            {/* Navigation */}
            <nav className="w-full py-6 px-8 flex items-center justify-between absolute top-0 left-0 z-10">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#00c365] flex items-center justify-center text-white font-bold">
                        <svg className="transform rotate-45" fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Lead<span className="text-[#00c365]">Journey</span>
                    </span>
                </div>
                <Link href="/" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#00c365] dark:hover:text-[#00c365] transition-colors">
                    Back to Home
                </Link>
            </nav>

            <main className="flex-grow flex items-center justify-center p-4 relative overflow-hidden py-24">
                {/* Background Glows */}
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00c365]/20 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-30"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00c365]/10 rounded-full blur-[100px] pointer-events-none opacity-50 dark:opacity-20"></div>

                <div className="w-full max-w-md bg-white dark:bg-[#1a1a1e] border border-gray-200 dark:border-[#333336] rounded-xl shadow-2xl p-8 relative z-20">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Create Account</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Join us today and start managing your leads.
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-5">
                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="name">Full Name</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <User size={18} />
                                </div>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-[#252529] border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-[#333336]'} rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c365] focus:border-transparent transition-all shadow-sm`}
                                    autoComplete="name"
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="email">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Mail size={18} />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-[#252529] border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-[#333336]'} rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c365] focus:border-transparent transition-all shadow-sm`}
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="password">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Lock size={18} />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-[#252529] border ${errors.password ? 'border-red-500' : 'border-gray-300 dark:border-[#333336]'} rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c365] focus:border-transparent transition-all shadow-sm`}
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5" htmlFor="password_confirmation">Confirm Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <Lock size={18} />
                                </div>
                                <input
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className={`w-full pl-10 pr-4 py-3 bg-white dark:bg-[#252529] border border-gray-300 dark:border-[#333336] rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c365] focus:border-transparent transition-all shadow-sm`}
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            {errors.password_confirmation && <p className="text-red-500 text-xs mt-1">{errors.password_confirmation}</p>}
                        </div>

                        <button 
                            disabled={processing}
                            className="w-full bg-[#00c365] hover:bg-[#00a855] text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-[#00c365]/30 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group disabled:opacity-50" 
                            type="submit"
                        >
                            {processing ? 'Creating Account...' : 'Register'}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-[#333336]"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-[#1a1a1e] text-gray-500 dark:text-gray-400">Already have an account?</span>
                        </div>
                    </div>

                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                        <Link href={route('login')} className="font-medium text-[#00c365] hover:text-[#00a855] hover:underline transition-all flex items-center justify-center gap-1">
                            Sign in instead <ArrowRight size={14} />
                        </Link>
                    </p>
                </div>
            </main>

            <footer className="py-6 text-center text-xs text-gray-500 dark:text-gray-500 z-10">
                <div className="flex justify-center space-x-4 mb-2">
                    <Link className="hover:text-gray-900 dark:hover:text-gray-300" href="#">Privacy Policy</Link>
                    <span>•</span>
                    <Link className="hover:text-gray-900 dark:hover:text-gray-300" href="#">Terms of Service</Link>
                </div>
                <p>© 2024 LeadJourney. All rights reserved.</p>
            </footer>
        </div>
    );
}