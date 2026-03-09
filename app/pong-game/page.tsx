import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PongGame() {
  const technologies = [
    "Python",
    "Turtle Module",
    "Object-Oriented Programming",
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 transition-colors duration-500'>
      {/* Back Button */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8'>
        <Link
          href='/#projects'
          className='inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8'
        >
          <ArrowLeft className='h-4 w-4' />
          Back to Portfolio
        </Link>
      </div>

      {/* Main Content */}
      <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Video Section */}
        <div className='mb-12'>
          <div className='relative w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded overflow-hidden shadow-2xl'>
            {/* Replace with actual video or embedded content */}
            <video
              className='w-full h-full object-cover'
              controls
              poster='/placeholder.svg' // Optional: Add a poster image
            >
              <source src='/path-to-your-video.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
            {/* Temporary placeholder - remove when you add actual video */}
            <div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br'>
              <p className='text-white text-lg font-medium'>Project Video</p>
            </div>
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
            A classic Pong game implementation featuring smooth gameplay,
            responsive controls, and an AI opponent.
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

        {/* Long Description / Detailed Explanation */}
        <div className='bg-white dark:bg-slate-800 rounded-lg p-8 shadow-lg border border-slate-200 dark:border-slate-700'>
          <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
            About This Project
          </h2>

          <div className='space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed'>
            <p>
              This Pong game is a recreation of the classic arcade game,
              developed using Python and the Pygame library. The project
              demonstrates fundamental game development concepts including game
              loops, collision detection, and AI implementation.
            </p>

            <h3 className='text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3'>
              Key Features
            </h3>
            <ul className='list-disc list-inside space-y-2 ml-4'>
              <li>Smooth 60 FPS gameplay with responsive controls</li>
              <li>AI opponent with adjustable difficulty levels</li>
              <li>Score tracking and game state management</li>
              <li>Sound effects and visual feedback</li>
              <li>Clean, object-oriented code architecture</li>
            </ul>

            <h3 className='text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3'>
              Technical Implementation
            </h3>
            <p>
              The game utilizes Pygame's event handling system for player input
              and implements custom collision detection algorithms. The AI
              opponent uses a prediction-based movement system that calculates
              the ball's trajectory to determine optimal paddle positioning.
            </p>

            <p>
              Object-oriented programming principles were applied throughout the
              project, with separate classes for the paddles, ball, and game
              manager. This modular approach makes the code maintainable and
              easily extensible for future features.
            </p>

            <h3 className='text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3'>
              Learning Outcomes
            </h3>
            <p>
              Through this project, I gained hands-on experience with game
              development fundamentals, improved my understanding of Python's
              class-based programming, and learned how to optimize code for
              performance in real-time applications.
            </p>
          </div>

          {/* Optional: Add links */}
          <div className='mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 flex gap-4'>
            <a
              href='#'
              className='inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors'
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
