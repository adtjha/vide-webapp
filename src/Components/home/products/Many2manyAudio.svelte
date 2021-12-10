<script>
  let secondName = [
    "Gross",
    "Francis",
    "Robinson",
    "Coleman",
    "Watkins",
    "Burrows",
    "Stokes",
    "Rhodes",
    "Salvage",
    "Garner",
    "Long",
    "Rehbein",
    "Fox",
    "Castro",
    "Sowle",
  ];

  let type = ["host", "speaker", "listener"];

  let firstName = [
    "Winona",
    "Georgia",
    "Callie",
    "Harmony",
    "Floyd",
    "Danny",
    "Cassandra",
    "Harley",
    "Kevin",
    "Leigh",
    "Hadley",
    "Pansy",
    "Harley",
    "Kemp",
    "Phyllis",
  ];

  let imgUrl = () =>
    `https://avatars.dicebear.com/api/adventurer/${(~~(
      Math.random() * 1000000
    )).toString(36)}.svg?r=50&scale=100`;

  let imgHtml = (n) => {
    let str = "",
      first = n;
    while (n > 0) {
      str += `<div class="flex flex-col items-center justify-center">
        <img
          src=${imgUrl()}
          alt="avataar"
          class="inline-block w-8 h-8 rounded-full object-cover bg-gray-800 ring-1 ring-white"
        />
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-xs font-sans font-bold mt-1 capitalize">${
              secondName[(Math.random() * secondName.length) | 0]
            }</h1>
      <h4 class="-mt-1 text-xxs font-mono opacity-60 inline-flex items-center capitalize">${
        n === first ? type[0] : n > first - 3 ? `📢 ${type[1]}` : type[2]
      }</h4>
            </div>
        </div>`;
      n = n - 1;
    }
    return str;
  };
</script>

<div
  class="w-full px-32 my-16 h-96 grid grid-cols-2 grid-rows-1 gap-20 items-center justify-items-stretch"
>
  <div class="p-4 col-start-1 col-end-2 row-span-1">
    <div class="font-serif font-bold text-8xl leading-tight capitalize text-center">
      only audio
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
      Create something similar to Twitter Spaces, Spotify Greenrooms, clubhouse.
      Add the power audio conversation to your infrastructure. Using audio also
      minimizes the redundant use of video calls, and its costs.
    </p>
  </div>
  <div class="p-4 col-start-2 col-end-3 row-span-1">
    <div
      class="w-full h-min p-2 border-4 border-gray-200 text-gray-700 rounded-3xl flex flex-col items-center"
    >
      <h1 class="font-serif font-bold text-xl py-2 mb-4 uppercase">
        sample discussion.
      </h1>
      <div
        class="w-full h-full mx-2 py-4 bg-gray-200 grid grid-cols-4 gap-2 justify-items-center items-center rounded-2xl"
      >
        {@html imgHtml(12)}
      </div>
    </div>
  </div>
</div>
