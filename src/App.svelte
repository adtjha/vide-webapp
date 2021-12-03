<script>
  import Navbar from "./Navbar.svelte";
  import Many2many from "./Components/home/products/Many2many.svelte";
  import One2many from "./Components/home/products/One2many.svelte";
  import Many2manyAudio from "./Components/home/products/Many2manyAudio.svelte";
  import OnetooneWebrtc from "./Components/home/products/OnetooneWebrtc.svelte";
</script>

<main
  class="relative bg-gradient-to-b from-gray-50 to-gray-200 text-black  flex flex-col justify-center items-center"
>
  <Navbar />
  <section
    id="main"
    class="w-full pt-20 h-screen flex flex-col justify-center items-center border border-black"
  >
    <div class="w-3/4 flex flex-col justify-center items-center">
      <h1 class="font-serif text-6xl font-bold mx-auto text-center">
        Would you do it ?
      </h1>
      <h1
        class="w-2/5 font-serif leading-6 text-xl font-light text-gray-800 mx-auto text-center mt-2"
      >
        If you could add live video/audio to your website with just two lines of
        code.
      </h1>
    </div>
    <div
      class="w-1/2 flex flex-row justify-around items-center my-8 mt-16 cursor-pointer"
    >
      <a
        href="#products"
        class="font-serif text-4xl font-bold mx-auto text-center hover:bg-green-400 h-6"
      >
        Yes
      </a>
      <a
        href="#about"
        class="font-serif text-4xl font-bold mx-auto text-center hover:bg-green-400 h-6"
      >
        No
      </a>
    </div>
  </section>
  <section
    id="products"
    class="w-full pt-36 h-max grid grid-flow-col grid-cols-1 grid-rows-4 justify-items-center items-center border border-black"
  >
    <Many2many />
    <Many2manyAudio />
    <One2many />
    <OnetooneWebrtc />
  </section>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
</style>
