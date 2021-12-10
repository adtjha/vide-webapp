<script>
  import { Router, Link, Route } from "svelte-navigator";
  import Dashboard from "./pages/Dashboard.svelte";
  import Home from "./pages/Home.svelte";
  import { user } from "./store";
  let uid;

  user.subscribe((value) => {
    ({ uid } = value);
  });
</script>

<Router>
  <div>
    <Route path="/">
      {#if uid}
        <Dashboard />
      {:else}
        <Home />
      {/if}
    </Route>
  </div>
</Router>
