"use client"
import React, { useState } from 'react';

const InputField = ({ id, label, type = "text", placeholder }) => (
    <div className="block relative mb-4">
        <label
            htmlFor={id}
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
        >
            {label}
        </label>
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
        />
    </div>
);

const Form = ({ title, subtitle, buttonText, linkText, linkHref, onSubmit, children, onToggle }) => (
    <div className=" relative flex flex-col  rounded-md text-black bg-white w-[25rem] p-10">
        <h2 className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
            {title} <span className="text-[#7747ff]">App</span>
        </h2>
        <p className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">{subtitle}</p>
        <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            {children}
            <button
                type="submit"
                className="bg-[#7747ff] w-full m-auto px-6 py-2 rounded text-white text-sm font-normal hover:bg-[#5e36cc]"
            >
                {buttonText}
            </button>
        </form>
        <p className="text-sm text-center mt-4">
            {linkText} <a className="text-sm text-[#7747ff]" href={linkHref} onClick={onToggle}>Sign up for free!</a>
        </p>
    </div>
);

export function Login({ onToggle }) {
    return (
        <Form
            title="Welcome back to"
            subtitle="Log in to your account"
            buttonText="Login"
            linkText="Don’t have an account yet?"
            linkHref="#register"
            onToggle={onToggle}
        >
            <InputField id="email" label="Email" type="email" placeholder="Enter your email" />
            <InputField id="password" label="Password" type="password" placeholder="Enter your password" />
            <a className="text-sm text-[#7747ff] text-center mb-4" href="#">Forgot your password?</a>
        </Form>
    );
}

export function Register({ onToggle }) {
    return (
        <Form
            title="My Ecommerce"
            subtitle="Create your account"
            buttonText="Register"
            linkText="Already have an account?"
            linkHref="#login"
            onToggle={onToggle}
        >
            <InputField id="email" label="Email" type="email" placeholder="Enter your email" />
            <InputField id="password" label="Password" type="password" placeholder="Create a password" />
            <InputField
                id="confirm-password"
                label="Confirm Password"
                type="password"
                placeholder="Re-enter your password"
            />
        </Form>
    );
}

export default function Page() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="py-16 flex justify-center items-center bg-gray-100 min-h-screen">
            {
                toggle ? <Login onToggle={() => { setToggle(!toggle) }} /> : <Register onToggle={() => { setToggle(!toggle) }} />
            }
        </div>
    );
}
