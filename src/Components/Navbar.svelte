<script>
  import { user } from "../store";
  let displayName;
  let photoURL;
  let uid;

  user.subscribe((value) => {
    ({ displayName, photoURL, uid } = value);
  });
</script>

<nav
  class="
    fixed
    z-20
    top-0
    inset-x-auto
    w-screen
    bg-gray-800
    text-green-400
    py-4
    px-8
    flex flex-row
    items-center
    justify-between
  "
>
  <div class="">
    <h1 class="text-2xl font-serif font-bold">vide.live</h1>
  </div>

  <div class="">
    <ul
      class="
        text-2xl
        font-serif font-bold
        flex flex-row
        items-center
        justify-evenly
      "
    >
      {#if user}
        <li class="mx-2 hover:underline">
          <a href="/dash">dashboard</a>
        </li>
        <li
          class="mx-2 hover:underline flex flex-row items-center justify-evenly"
        >
          <img
            src={photoURL}
            class="w-10 h-10 text-xxs rounded-full shadow-md ring-1 ring-green-400 mr-4"
            alt="avatar"
          />
        </li>
      {:else}
        <li class="mx-2 hover:underline">
          <a href="#products">products</a>
        </li>
        <li class="mx-2 hover:underline">
          <a href="#pricing">pricing</a>
        </li>
        <li class="mx-2 hover:underline">
          <a href="#login">login</a>
        </li>
      {/if}
    </ul>
  </div>
</nav>
