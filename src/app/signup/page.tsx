

export default function Signup() {
    return (
        <div className="flex justify-center">
            <section className="mb-10 w-96 h-full bg-[rgba(8,36,80,0.6)] backdrop-blur-[20px] p-8 lg:p-12 rounded-[2rem] shadow-[0px_12px_32px_rgba(0,0,0,0.4)] border border-outline-variant/20">
                <div className="mb-10">
                    <h2 className="text-white text-3xl my-2">Create an Account</h2>
                    <p className="leading-relaxed text-[#95abde] my-2">Deploy your teams velocity with a WorkNest account.</p>
                </div>
                <form className="space-y-8">

                    <div className="space-y-2">
                        <label htmlFor="fullName" className="text-xs font-bold text-[#95abde] uppercase tracking-widest ml-1">
                            Full Name
                        </label>
                        <input
                            type="fullName"
                            id="fullName"
                            placeholder="Jhon Doe"
                            className="bg-[#081328] text-white w-full bg-surface-container-low border-b border-outline-variant/20 focus:border-primary focus:ring-0 text-on-surface placeholder:text-on-surface-variant/40 rounded-lg p-3 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold text-[#95abde] uppercase tracking-widest ml-1">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="johnDoe@gmail.com"
                            className="bg-[#081328] text-white w-full border-b focus:border-primary focus:ring-0 text-on-surface placeholder:text-on-surface-variant/40 rounded-lg p-3 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="password" className="text-xs font-bold text-[#95abde] uppercase tracking-widest ml-1">
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            placeholder="Secret Key"
                            className="bg-[#081328] text-white w-full bg-surface-container-low border-b border-outline-variant/20 focus:border-primary focus:ring-0 text-on-surface placeholder:text-on-surface-variant/40 rounded-lg p-3 transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <button className="w-full bg-[linear-gradient(90deg,#c0c1ff_0%,#6a6cff_50%,#2f2ebe_100%)] rounded-xl text-[#2724b8] mx-3 px-5 py-3 shadow-[0px_12px_32px_rgba(47,46,190,0.3)] hover:scale-105 transition-transform duration-300">Create Account</button>
                    </div>

                </form>
                    <p className="my-4 leading-relaxed text-[#95abde]">Already Part of the nest? Login</p>
            </section>
        </div>
    )
}