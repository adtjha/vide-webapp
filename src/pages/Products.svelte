<script>
  import Many2many from "../Components/home/products/Many2many.svelte";
  import Many2manyAudio from "../Components/home/products/Many2manyAudio.svelte";
  import OnetooneWebrtc from "../Components/home/products/OnetooneWebrtc.svelte";

  import { auth } from "../../firebase";
  import { user } from "../store";

  import { authState } from "rxfire/auth";
  import Menu from "../Components/Menu.svelte";
  const unsubscribe = authState(auth).subscribe((u) => user.set(u));

</script>

<main
  class="relative pt-16 snap-y snap-mandatory bg-white text-skin-base flex-initial">
  <Menu {user} />

  <section
    id="products"
    class="w-full snap-center grid grid-cols-1 grid-rows-3 items-center justify-items-center">
    <Many2many />
    <Many2manyAudio />
    <OnetooneWebrtc />
  </section>

</main>
