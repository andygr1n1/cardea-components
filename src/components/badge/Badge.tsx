import { IBadgeProps } from './Badge.types'
// import styles from './Badge.module.scss'

const Badge: React.FC<IBadgeProps> = ({ count }) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500">
            <div className="mx-auto w-full max-w-lg rounded-lg bg-white px-10 py-8 shadow-xl">
                <div className="mx-auto space-y-6">
                    <img src="https://tailwindcomponents.com/svg/logo-color.svg" className="h-8" />

                    <div className="flex w-full justify-center">
                        <button className="group relative overflow-hidden rounded bg-sky-400 px-2 py-1 font-sans uppercase shadow ring-sky-500 transition-all after:bg-sky-500 active:shadow-md active:ring-2">
                            <p className="text-white transition-all group-active:scale-90">Example</p>
                        </button>
                    </div>

                    <a
                        target="_blank"
                        href="https://tailwindcomponents.com"
                        className="block w-full transform rounded-md bg-teal-400 px-4 py-2 text-center font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                    >
                        {' '}
                        Go Back to Tailwind Components{' '}
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Badge
