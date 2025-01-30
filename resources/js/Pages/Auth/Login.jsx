import Input from '@/Components/TextInput'
import Label from '@/Components/InputLabel'
import Button from '@/Components/PrimaryButton'
import { Link, Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
export default function Login()
{
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
        <Head title="Sign In" />
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
            <img src="/images/signup-image.png"
                className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
        </div>
        <div className="py-8 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
            <div>
                <img src="/images/moonton-white.svg" alt=""/>
                <div className="my-[40px]">
                    <div className="font-semibold text-[26px] mb-3">
                        Welcome Back
                    </div>
                    <p className="text-base text-[#767676] leading-7">
                        Explore our new movies and get <br/>
                        the better insight for your life
                    </p>
                </div>
                <form className="w-[370px]" onSubmit={submit}>
                    <div className="flex flex-col gap-6">
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" value={data.email} onChange={(e) => setData('email', e.target.value)} name="email" placeholder="Email Address" />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" value={data.password} onChange={(e) => setData('password', e.target.value)} name="password" placeholder="Password" />
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                    </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                            {/* <Link href={route('prototype.dashboard') }> */}
                                <Button type="submit" procesing={processing}>
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                                </Button>
                            {/* </Link> */}

                            <Link href={route('register')}>
                                <Button type="button" variant='light-outline'>
                                    <span className="text-base text-white">
                                        Create New Account
                                    </span>
                                </Button>
                            </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
        </>
    );
}
