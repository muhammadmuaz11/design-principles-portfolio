import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function PongGame() {
  const technologies = [
    "Python",
    "Turtle Graphics",
    "Winsound",
    "AABB Collision Detection",
    "OOP",
    "Game Loop Architecture",
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 mt-8 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-500'>
      {/* Main Content */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Video Section */}
        <div className='mb-12'>
          <div className='relative w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded overflow-hidden shadow-2xl'>
            <Image
              src='/pong_game_poster.JPG'
              alt='Pong Game Demo'
              fill
              className='object-cover'
            />
          </div>
        </div>

        {/* Title, Description & Tech Stack */}
        <div className='mb-12'>
          {/* Title */}
          <h1 className='text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4'>
            Pong Game
          </h1>

          {/* Short Description */}
          <p className='text-xl text-slate-600 dark:text-slate-400 mb-6 leading-relaxed'>
            A redesigned version of the classic Atari Pong (1972) built in
            Python — featuring a custom dynamic difficulty mechanic where each
            conceded goal shrinks the losing player&apos;s paddle, creating an
            intense and self-resolving competitive experience.
          </p>

          {/* Technologies Used */}
          <div className='mb-6'>
            <h3 className='text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide'>
              Technologies Used
            </h3>
            <div className='flex flex-wrap gap-2'>
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant='secondary'
                  className='bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors text-sm px-4 py-1'
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Main Detail Card */}
        <div className='bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg border border-slate-200 dark:border-slate-700 space-y-10'>
          {/* What I Built */}
          <div>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
              What I Built
            </h2>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              I built a fully playable two-player Pong game from scratch using
              Python&apos;s Turtle graphics module — no game engine, no external
              libraries. The game runs on a custom game loop, handles real-time
              keyboard input for two players simultaneously, detects collisions
              using AABB logic, plays audio feedback via the Winsound library,
              and tracks live scores on screen.
            </p>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed mt-3'>
              On top of the base game, I designed and implemented a custom
              mechanic: every time a player concedes a goal, their paddle
              permanently shrinks by one unit. This keeps growing the pressure
              on the losing player and guarantees the game always reaches a
              definitive end — no draws, no stalemates.
            </p>
          </div>

          {/* The Problem I Solved */}
          <div>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
              The Problem I Solved
            </h2>
            <p className='text-slate-600 dark:text-slate-400 leading-relaxed'>
              The original Pong (Atari, 1972) has a well-known flaw: evenly
              matched players can rally indefinitely with no natural resolution.
              I identified this as the core design problem and engineered a
              solution — a{" "}
              <strong className='text-slate-800 dark:text-slate-200'>
                positive feedback loop
              </strong>{" "}
              that uses a diminishing resource (paddle size) to force a
              conclusive outcome. The longer you lose, the harder it gets to
              defend — adding strategic tension to every single point.
            </p>
          </div>

          {/* How It Works */}
          <div>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
              How It Works
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
              <div className='bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5'>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Game Physics
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                  Collision detection is handled with Axis-Aligned Bounding Box
                  (AABB) logic. Wall hits reverse the ball&apos;s vertical
                  vector (dy); paddle hits reverse the horizontal vector (dx).
                  No physics engine required.
                </p>
              </div>
              <div className='bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5'>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Dynamic Paddle Sizing
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                  Each paddle starts at stretch-width 8. On every goal, the
                  conceding player&apos;s size variable decrements by 1. A
                  conditional guard prevents it from going below 1 to avoid a
                  runtime crash.
                </p>
              </div>
              <div className='bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5'>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Win Conditions
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                  A player wins by either reaching{" "}
                  <strong className='text-slate-700 dark:text-slate-200'>
                    10 points
                  </strong>{" "}
                  or triggering{" "}
                  <strong className='text-slate-700 dark:text-slate-200'>
                    Sudden Death
                  </strong>{" "}
                  — when the opponent&apos;s paddle reaches size 0, making
                  defense impossible.
                </p>
              </div>
              <div className='bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5'>
                <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
                  Controls
                </h3>
                <p className='text-sm text-slate-600 dark:text-slate-400 leading-relaxed'>
                  Player A uses{" "}
                  <strong className='text-slate-700 dark:text-slate-200'>
                    W / S
                  </strong>{" "}
                  keys. Player B uses{" "}
                  <strong className='text-slate-700 dark:text-slate-200'>
                    ↑ / ↓
                  </strong>{" "}
                  arrow keys. Both are bound via screen.listen() with boundary
                  checks to keep paddles on-screen.
                </p>
              </div>
            </div>
          </div>

          {/* What I Learned */}
          <div>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
              What I Learned
            </h2>
            <ul className='space-y-3 text-slate-600 dark:text-slate-400'>
              <li className='flex items-start gap-3'>
                <span className='mt-1 h-2 w-2 rounded-full bg-blue-500 shrink-0'></span>
                <span>
                  <strong className='text-slate-800 dark:text-slate-200'>
                    Game loop architecture:
                  </strong>{" "}
                  How to structure a real-time loop that handles input, updates
                  state, and redraws the screen efficiently on every frame.
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1 h-2 w-2 rounded-full bg-blue-500 shrink-0'></span>
                <span>
                  <strong className='text-slate-800 dark:text-slate-200'>
                    Collision detection from scratch:
                  </strong>{" "}
                  Implementing AABB logic without relying on a physics engine
                  gave me a deeper understanding of how 2D collision math
                  actually works.
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1 h-2 w-2 rounded-full bg-blue-500 shrink-0'></span>
                <span>
                  <strong className='text-slate-800 dark:text-slate-200'>
                    State-driven object properties:
                  </strong>{" "}
                  Dynamically modifying object attributes (shapesize) at runtime
                  using conditional logic and state variables.
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1 h-2 w-2 rounded-full bg-blue-500 shrink-0'></span>
                <span>
                  <strong className='text-slate-800 dark:text-slate-200'>
                    Game design thinking:
                  </strong>{" "}
                  Identifying a real flaw in an existing game and engineering a
                  mechanic to fix it — not just coding a feature, but justifying
                  the design decision.
                </span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='mt-1 h-2 w-2 rounded-full bg-blue-500 shrink-0'></span>
                <span>
                  <strong className='text-slate-800 dark:text-slate-200'>
                    Edge case handling:
                  </strong>{" "}
                  Guarding against runtime crashes (e.g. paddle size reaching
                  zero) before they happen rather than after.
                </span>
              </li>
            </ul>
          </div>

          {/* GitHub Link */}
          <div className='pt-6 border-t border-slate-200 dark:border-slate-700 flex gap-4'>
            <a
              href='https://github.com/muhammadmuaz11/intro-to-computing-assignment'
              className='inline-flex items-center px-6 py-3 bg-indigo-600 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors'
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
