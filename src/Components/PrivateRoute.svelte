<script>
  import { Route } from "svelte-navigator";
  import { authState } from "rxfire/auth";
  import { auth } from "../../firebase";
  import Home from "../pages/Home.svelte";

  let user;
  const unsubscribe = authState(auth).subscribe((u) => (user = u));

  export let path;
</script>

<Route {path} let:params let:location let:navigate>
  {#if $user}
    <slot {params} {location} {navigate} />
  {:else}
    <Home />
  {/if}
</Route>
