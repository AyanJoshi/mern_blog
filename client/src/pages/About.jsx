import React from "react";
import Typewriter from "typewriter-effect";
import { Avatar, Blockquote, Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen mt-16 flex flex-col gap-4 items-center justify-center">
      <div className="flex items-center">
        <div className="flex-wrap max-w-xl mx-auto p-5 text-center mr-10">
          <img
            src="https://i.imgur.com/8UnjnkS.jpeg"
            alt="user"
            className="rounded-full w-50 h-50 object-cover border-8 border-[lightgray]"
          />
        </div>

        <div className="flex-wrap max-w-2xl mx-auto p-3 text-center">
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
                Welcome to Neeta's Blog! Here you will find multitude of poems
                and my thoughts penned down. Feel free to contribute to this
                blog!
              </p>
              <p>
                We encourage you to leave comments on our posts and engage with
                other readers. You can like other people's comments and reply to
                them as well. We believe that a community of literary
                enthusiasts can help each other grow and improve.
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
                resilience that sears itself into the reader's consciousness
                with its raw honesty and piercing linguistic precision."
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
      {/* <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr> */}
      <div class="flex flex-col">
        <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
        <div className="text-center">
          <h1 className="px-3 inline text-3xl font font-semibold text-center my-7">
            YouTube
          </h1>
          <svg
            class="inline w-[38px] h-[38px] text-gray-800 dark:text-white mb-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="flex mx-auto p-3 text-center mb-5">
          <Card href="#" className="max-w-sm p-3 mx-5">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Maano Ya Na Maano
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              A YouTube channel wherein I share my thoughts and poems. If you
              like what you see, please subscribe to my channel and share it
              with your friends and family. I would love to hear your thoughts
              on my work.
            </p>
            <div className="flex justify-center">
              <a
                className="justify-center"
                href="https://www.youtube.com/@neetaupadhyaya1433"
                target="_blank"
              >
                <Button gradientDuoTone="greenToBlue">
                  Watch Now
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </a>
            </div>
          </Card>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ikWjRx8Od70?si=54seXOFiaKRq-ODZ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>

      </div>      
    </div>
  );
}
