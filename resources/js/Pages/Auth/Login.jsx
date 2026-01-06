import React, { useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="bg-[#f3f4f6] dark:bg-[#111114] text-gray-900 dark:text-gray-100 font-sans min-h-screen flex flex-col transition-colors duration-300 antialiased selection:bg-[#00c365] selection:text-white">
            <Head title="Log in" />

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

            <main className="flex-grow flex items-center justify-center p-4 relative overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00c365]/20 rounded-full blur-[120px] pointer-events-none opacity-50 dark:opacity-30"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#00c365]/10 rounded-full blur-[100px] pointer-events-none opacity-50 dark:opacity-20"></div>

                <div className="w-full max-w-md bg-white dark:bg-[#1a1a1e] border border-gray-200 dark:border-[#333336] rounded-xl shadow-2xl p-8 relative z-20">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Welcome back</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                            Enter your credentials to access your dashboard.
                        </p>
                    </div>

                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                    <form onSubmit={submit} className="space-y-5">
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

                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
                                {canResetPassword && (
                                    <Link href={route('password.request')} className="text-xs font-medium text-[#00c365] hover:text-[#00a855] transition-colors">
                                        Forgot Password?
                                    </Link>
                                )}
                            </div>
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
                                    autoComplete="current-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className="rounded dark:bg-[#252529] border-gray-300 dark:border-[#333336] text-[#00c365] shadow-sm focus:ring-[#00c365]"
                            />
                            <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                        </div>

                        <button 
                            disabled={processing}
                            className="w-full bg-[#00c365] hover:bg-[#00a855] text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-[#00c365]/30 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group disabled:opacity-50" 
                            type="submit"
                        >
                            {processing ? 'Signing In...' : 'Sign In'}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200 dark:border-[#333336]"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-[#1a1a1e] text-gray-500 dark:text-gray-400">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                        <button className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-[#333336] rounded-lg shadow-sm bg-white dark:bg-[#252529] text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" type="button">
                            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"></path>
                            </svg>
                            Google
                        </button>
                        <button className="flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-[#333336] rounded-lg shadow-sm bg-white dark:bg-[#252529] text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" type="button">
                            <svg className="h-5 w-5 mr-2 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                            LinkedIn
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                        Don't have an account? {' '}
                        <Link href={route('register')} className="font-medium text-[#00c365] hover:text-[#00a855] hover:underline transition-all">
                            Sign up
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