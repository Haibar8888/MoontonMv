import React from 'react';
import InputError from '@/Components/InputError';
import Label from '@/Components/InputLabel';
import Input from '@/Components/TextInput';
import Button from '@/Components/PrimaryButton';
import { Link,Head,useForm } from '@inertiajs/react';

export default function Register() {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
        <Head title="Sign Up" />
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
            <img
            src="/images/signup-image.png"
            className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
            alt=""
            />
        </div>
        <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
            <div>
            <img src="/images/moonton-white.svg" alt="" />
            <div className="my-[70px]">
                <div className="font-semibold text-[26px] mb-3">Sign Up</div>
                <p className="text-base text-[#767676] leading-7">
                Explore our new movies and get <br />
                the better insight for your life
                </p>
            </div>
            <form className="w-[370px]" onSubmit={submit}>
                <div className="flex flex-col gap-6">
                <div>
                    <Label htmlFor='fullname'>Full Name</Label>
                    <Input type="text" id="fullname" value={data.name} name="fullname" placeholder="Your fullname..." onChange={(e) => setData('name', e.target.value)} required />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input type="text" name="email" id="email" value={data.email} placeholder="Your email..." onChange={(e) => setData('email', e.target.value)} required />
                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div>
                    <Label htmlFor='password'>Password</Label>
                    <Input type="password" id="password" value={data.password} name="password" placeholder="Your password..." onChange={(e) => setData('password', e.target.value)} required />
                    <InputError message={errors.password} className="mt-2" />
                </div>
                <div>
                    <Label htmlFor='password_confirmation'>Confirm Password</Label>
                    <Input type="password" id="password_confirmation" value={data.password_confirmation} name="password" placeholder="Your password..." onChange={(e) => setData('password_confirmation', e.target.value)} required />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>
                </div>
                <div className="grid space-y-[14px] mt-[30px]">
                        {/* <Link href={route('prototype.dashboard')}> */}
                            <Button
                                type="submit"
                                className="rounded-2xl bg-alerange py-[13px] text-center w-full"
                                procesing={processing}
                            >
                                <span className="text-base font-semibold">Sign Up</span>
                            </Button>
                        {/* </Link> */}
                        <Link href={route('prototype.login')}>
                            <Button variant='light-outline' type='button'>
                                <span className="text-base text-white">Sign In to My Account</span>
                            </Button>
                        </Link>
                {/* <a
                    href="sign_in.html"
                    className="rounded-2xl border border-white py-[13px] text-center"
                >
                    <span className="text-base text-white">Sign In to My Account</span>
                </a> */}
                </div>
            </form>
            </div>
        </div>
        </div>
    </>
  );
}
