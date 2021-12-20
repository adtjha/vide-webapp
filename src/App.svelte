<script>
  import { Route, Router } from "svelte-navigator";
  import PrivateRoute from "./Components/PrivateRoute.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Profile from "./pages/Profile.svelte";
  import { user } from "../src/store";

  import { authState } from "rxfire/auth";
  import { auth } from "../firebase";
  import Products from "./pages/Products.svelte";
  import Pricing from "./pages/Pricing.svelte";
  const unsubscribe = authState(auth).subscribe((u) => user.set(u));
</script>

<Router>
  <div>
    <Route path="/pricing">
      <Pricing />
    </Route>
    <Route path="/products">
      <Products />
    </Route>
    <PrivateRoute path="/" let:location>
      <Dashboard />
    </PrivateRoute>
    <PrivateRoute path="/profile" let:location>
      <Profile />
    </PrivateRoute>
  </div>
</Router>
