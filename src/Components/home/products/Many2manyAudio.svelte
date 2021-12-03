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
            <h1 class="text-xxs font-sans font-bold mt-1 capitalize">${
          secondName[(Math.random() * secondName.length) | 0]
        }</h1>
      <h4 class="-mt-1 text-xxxs font-mono opacity-60 inline-flex items-center capitalize">${
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
  class="w-96 my-4 flex flex-col items-center justify-center bg-white shadow-lg rounded-xl"
>
  <div class="p-4 flex items-center justify-center">
    <div
      class="w-64 h-72 border-2 border-gray-200 bg-gray-900 text-green-400 rounded-xl flex flex-col items-center"
    >
      <h1 class="font-sans font-bold py-2 uppercase">grammy discussion.</h1>
      <div
        class="w-full h-full px-4 py-2 grid grid-cols-3 gap-2 justify-items-center items-center"
      >
        {@html imgHtml(9)}
      </div>
    </div>
  </div>
  <div
    class="w-full p-4 pt-0 pl-8 pr-2 flex flex-col item-center justify-center"
  >
    <div class="font-serif text-2xl ">many to many live audio stream</div>
    <p class="text-sm">
      Host something like Twitter Spaces, or create an app like clubhouse.
    </p>
  </div>
</div>
