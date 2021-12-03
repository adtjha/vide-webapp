<script>
  let imgUrl = () =>
    `https://avatars.dicebear.com/api/adventurer/${(~~(
      Math.random() * 1000000
    )).toString(36)}.svg?r=50&scale=100`;

  let imgHtml = (n) => {
    let str = "";
    while (n > 0) {
      str += `<img
          src=${imgUrl()}
          alt="avataar"
          class="inline-block w-6 h-6 rounded-full object-cover bg-gray-800 ring-2 ring-white"
        />`;
      n = n - 1;
    }
    return str;
  };

  (async function getMedia() {
    let stream = null;
    console.log("Getting media...");
    navigator.getUserMedia(
      { video: true },
      (stream) => {
        /* use the stream */
        console.log(stream);
        document
          .querySelectorAll("#selfVide")
          .forEach((e) => (e.srcObject = stream));
        console.log(document.querySelectorAll("#selfVide"));
      },
      (err) => {
        /* handle the error */
        console.error(err);
        document.getElementById(
          "screen"
        ).innerHTML = `<div class="bg-gray-900 text-green-400 font-serif ">Permission for video not given.</div>`;
      }
    );
  })();
</script>

<div class="w-96 flex flex-col items-center bg-white shadow-lg rounded-xl">
  <div class="outer-class -mb-6">
    <div class="w-80 m-4 p-2 bg-gray-900 rounded-xl">
      <div id="screen" class="h-40 rounded-xl">
        <video
          id="selfVide"
          class="w-full h-full object-cover bg-gray-900 rounded-xl"
          autoplay
          muted
        />
      </div>
      <div
        class="flex flex-row justify-between items-center p-2 pb-0 -space-x-4"
      >
        {@html imgHtml(12)} <span class="pl-3 font-mono text-green-400">200+</span>
      </div>
    </div>
    <div />
  </div>
  <div
    class="w-full p-4 pt-0 pl-8 pr-2 flex flex-col item-center justify-center"
  >
    <div class="font-serif text-2xl">one to many live stream</div>
    <p class="text-sm">
      Host live shows to multiple platforms such as Facebook, Youtube, Twitch,
      Twitter, Reddit, etc using <span class="font-bold font-serif"
        >vide.live</span
      >.
    </p>
  </div>
</div>

<style>
  .outer-class {
    width: 356px;
    height: 260px;
  }
</style>
