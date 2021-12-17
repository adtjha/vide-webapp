<script>
  import Navbar from "../Components/Navbar.svelte";
  import Many2many from "../Components/home/products/Many2many.svelte";
  import One2many from "../Components/home/products/One2many.svelte";
  import Many2manyAudio from "../Components/home/products/Many2manyAudio.svelte";
  import OnetooneWebrtc from "../Components/home/products/OnetooneWebrtc.svelte";
  import Pricing from "../Components/home/Pricing.svelte";

  import { auth, googleProvider } from "../../firebase";
  import { signInWithPopup } from "firebase/auth";
  import { user } from "../store";
  
  import { authState } from "rxfire/auth";
  const unsubscribe = authState(auth).subscribe((u) => user.set(u));

  function login() {
    signInWithPopup(auth, googleProvider);
  }
</script>

<main
  class="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 text-stone-800 flex flex-col justify-center items-center"
>
  <Navbar {user} />
  <section
    id="main"
    class="w-full pt-16 h-screen flex flex-col justify-center items-center "
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
    class="w-full grid grid-cols-1 grid-rows-4 items-center justify-items-center"
  >
    <Many2many />
    <Many2manyAudio />
    <One2many />
    <OnetooneWebrtc />
  </section>
  <section
    id="pricing"
    class="w-full m-16 h-max grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center items-center border border-gray-200"
  >
    <Pricing />
  </section>
  <section
    class="w-full py-16 h-max grid grid-flow-col grid-cols-1 grid-rows-1 justify-items-center items-center "
  >
    <button
      class="bg-gray-800 text-white px-6 py-2 capitalize font-serif font-bold rounded-lg shadow-md cursor-pointer"
      on:click={login}>Signup Now.</button
    >
  </section>
</main>
