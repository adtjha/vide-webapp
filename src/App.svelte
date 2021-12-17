<script>
  import { Router } from "svelte-navigator";
  import PrivateRoute from "./Components/PrivateRoute.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Profile from "./pages/Profile.svelte";
  import { user } from "../src/store";

  import { authState } from "rxfire/auth";
  import { auth } from "../firebase";
  const unsubscribe = authState(auth).subscribe((u) => user.set(u));
</script>

<Router>
  <div>
    <PrivateRoute path="/" let:location>
      <Dashboard />
    </PrivateRoute>
    <PrivateRoute path="/profile" let:location>
      <Profile />
    </PrivateRoute>
  </div>
</Router>
