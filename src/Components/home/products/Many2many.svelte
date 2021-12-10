<script>
  let giphy = [
    "EZICHGrSD5QEFCxMiC",
    "F3BeiZNq6VbDwyxzxF",
    "9hWDaFUX4WUmX9XC7c",
    "zbjB7RUdmK9RgCblQv",
    "",
    "l3ODgW1tAz5acAIN93",
    "qQXEss6reJvyspiMeI",
    "XHepY7R0yKY6jmplaY",
    "ru4coqSgrPPECM9HEI",
  ];

  const printVideos = (n) => {
    let arr = "",
      first = n,
      diff;
    while (n > 0) {
      diff = first - n;
      if (diff === 0) {
        arr += `    
        <div class="w-36 h-24 overflow-hidden bg-gray-200 flex items-center justify-center rounded-tl-2xl">
          <img
            class="w-full h-full object-cover"
            src=https://media.giphy.com/media/${giphy[diff]}/giphy.gif
            alt="giphy"
          />
        </div>`;
      } else if (diff === 2) {
        arr += `    
        <div class="w-36 h-24 overflow-hidden bg-gray-200 flex items-center justify-center rounded-tr-2xl">
          <img
            class="w-full h-full object-cover"
            src=https://media.giphy.com/media/${giphy[diff]}/giphy.gif
            alt="giphy"
          />
        </div>`;
      } else if (diff === 4) {
        arr += `    
        <div class="w-36 h-24 overflow-hidden bg-gray-200 flex items-center justify-center">
          <video
            id="selfVide"
            class="w-full h-full object-cover"
            autoplay
            muted
          />
        </div>`;
      } else if (diff === 6) {
        arr += `    
        <div class="w-36 h-24 overflow-hidden bg-gray-200 flex items-center justify-center rounded-bl-2xl">
          <img
            class="w-full h-full object-cover"
            src=https://media.giphy.com/media/${giphy[diff]}/giphy.gif
            alt="giphy"
          />
        </div>`;
      } else if (diff === 8) {
        arr += `    
        <div class="w-36 h-24 overflow-hidden bg-gray-200 flex items-center justify-center rounded-br-2xl">
          <img
            class="w-full h-full object-cover"
            src=https://media.giphy.com/media/${giphy[diff]}/giphy.gif
            alt="giphy"
          />
        </div>`;
      } else {
        arr += `
        <div class="w-36 h-24 overflow-hidden bg-gray-200 flex items-center justify-center">
          <img
            class="w-full h-full object-cover"
            src="https://media.giphy.com/media/${giphy[diff]}/giphy.gif"
            alt="giphy"
          />
        </div>
        `;
      }
      n -= 1;
    }
    return arr;
  };
</script>

<div
  class="w-full px-32 my-16 h-96 grid grid-cols-2 grid-rows-1 gap-20 items-center justify-items-stretch"
>
  <div class="p-4 col-start-1 col-end-2 row-span-1">
    <div
      class="w-full h-min p-2 border-4 border-gray-400 grid grid-flow-cols grid-cols-3 grid-rows-3 gap-2 items-center justify-items-center rounded-3xl"
    >
      {@html printVideos(9)}
    </div>
  </div>
  <div class="p-4 col-start-2 col-end-3 row-span-1">
    <div class="font-serif font-bold text-8xl leading-tight capitalize text-center">
      live video
    </div>
    <div class="flex items-center justify-between px-8 mb-4">
      <div
        class="bg-gray-200 rounded-2xl px-4 py-2 font-mono font-bold text-xs leading-tight capitalize"
      >
        many to many
      </div>
      <div
        class="bg-gray-200 rounded-2xl px-4 py-2 font-mono font-bold text-xs leading-tight capitalize"
      >
        few to many
      </div>
      <div
        class="bg-gray-200 rounded-2xl px-4 py-2 font-mono font-bold text-xs leading-tight capitalize"
      >
        one to many
      </div>
    </div>
    <p class="px-8 font-sans text-base opacity-80">
      Nine people interacting with each others. Each user is producing video
      (with audio), and is concurrently consuming other peers videos (with
      audio). Current maximum allowed is 200 users in a room producing video.
    </p>
  </div>
</div>
