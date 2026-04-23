
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className='py-6'>
      <section className="flex items-center justify-center bg-tertiary h-screen w-full bg-gradient-to-r from-neutral via-neutral to-gray-800">
        <div className="">
          <h1 className="text-center mb-5 text-white font-bold text-6xl">The Kinetic Canva for <br />Engineering Teams.</h1>
          <p className={`${styles.textOnSurfaceVariant} text-center mb-8 text-xl leading-relaxed`}>A high-performance workspace designed for the high-velocity <br />developer. Synchronize tasks, architectural diagrams, and code<br /> workflows on a single editorial interface.</p>
          <div className='text-center'>
            <button className={`${styles.primaryGradient} ${styles.borderGhost} ${styles.textOnPrimary} mx-3 px-5 py-3 font-bold text-lg shadow-[0px_12px_32px_rgba(47,46,190,0.3)] hover:scale-105 transition-transform duration-300`}>Get Started For Free</button>
            <button className={`${styles.demoButton} ${styles.borderGhost} mx-4 text-white px-8 py-3 font-bold text-lg hover:scale-105 transition-transform duration-300`}>Watch Demo</button>
          </div>
        </div>
      </section>
      <section className="h-screen w-full">
helo
      </section>
    </div>
  );
}
