<div
  class="w-full px-32 my-16 h-96 grid grid-cols-2 grid-rows-1 gap-20 items-center justify-items-stretch"
>
  <div class="p-4 col-start-1 col-end-2 row-span-1">
    <div
      class="font-serif font-bold text-7xl leading-tight capitalize text-center"
    >
      simple webrtc
    </div>
    <div class="flex items-center justify-evenly px-8 mb-4">
      <div
        class="bg-gray-200 rounded-2xl px-4 py-2 font-mono font-bold text-xs leading-tight capitalize"
      >
        one to few
      </div>
      <div
        class="bg-gray-200 rounded-2xl px-4 py-2 font-mono font-bold text-xs leading-tight capitalize"
      >
        one to one
      </div>
    </div>
    <p class="px-8 font-sans text-base opacity-80">
      Above depiction shows a screen, having nine people interacting with each
      others. Each user is producing video (with audio), and is concurrently
      consuming other peers videos (with audio).
    </p>
  </div>
  <div class="p-4 col-start-2 col-end-3 row-span-1">
    <div
      class="w-full h-min p-2 border-4 border-gray-200 text-gray-700 rounded-3xl flex flex-col items-center"
    >
      <h1 class="font-serif font-bold text-xl py-2 mb-4 uppercase">
        one on one discussion.
      </h1>
      <div
        class="w-full h-full mx-2 grid grid-cols-2 gap-2 justify-items-center items-center rounded-2xl"
      >
        <div
          class="w-full h-full bg-green-200 border col-start-1 col-end-2 rounded-tl-2xl rounded-bl-2xl overflow-hidden"
        >
          <video
            id="selfVide"
            class="w-full h-full object-cover bg-gray-200"
            autoplay
            muted
          />
        </div>
        <div
          class="w-full h-full border col-start-2 col-end-3 rounded-tr-2xl rounded-br-2xl overflow-hidden"
        >
          <img
            class="w-full h-full object-cover bg-gray-200"
            src="https://media.giphy.com/media/ru4coqSgrPPECM9HEI/giphy.gif"
            alt="giphy"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<style>
</style>
