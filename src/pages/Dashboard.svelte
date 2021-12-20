<script>
  import Menu from "../Components/Menu.svelte";

  import { user } from "../store";
  let displayName;
  let photoURL;
  let uid;
  let open = false;

  user.subscribe((value) => {
    ({ displayName, photoURL, uid } = value);
  });
</script>

<div class="relative min-h-full">
  <Menu {user} />
  <header class="pt-12 bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">{displayName} : {uid}</h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
      </div>
      <!-- /End replace -->
    </div>
  </main>
</div>
