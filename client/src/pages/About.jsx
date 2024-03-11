import React from "react";
import Typewriter from "typewriter-effect";
import { Avatar, Blockquote } from "flowbite-react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <img
          src="../../images/bua.jpeg"
          alt="user"
          className="rounded-full w-50 h-50 object-cover border-8 border-[lightgray]"
        />
      </div>

      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            <Typewriter
              options={{
                strings: ["About Neeta's Blog"],
                autoStart: true,
                loop: true,
                pauseFor: 15000,
              }}
            />
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to Neeta's Blog! Here you will find multitude of poems and
              my thoughts penned down. Feel free to contribute to this blog!
            </p>
            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of literary enthusiasts
              can help each other grow and improve.
            </p>
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <figure className="mx-auto max-w-screen-md text-center">
          <svg
            className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <Blockquote>
            <p className="text-2xl font-medium italic text-gray-900 dark:text-white">
              "Neeta's poetry is a searing exploration of identity, loss and
              resilience that sears itself into the reader's consciousness with
              its raw honesty and piercing linguistic precision."
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center justify-center space-x-3">
            <Avatar
              rounded
              size="xs"
              img="https://content.jdmagicbox.com/comp/mumbai/07/022pk022707/catalogue/the-hindu-regional-office--churchgate-mumbai-newspaper-publishers-109u7cxhhx.jpg"
              alt="TH"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                The Hindu
              </cite>
              {/* <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                CEO at Google
              </cite> */}
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
