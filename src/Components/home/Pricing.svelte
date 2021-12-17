<script>
  let pc = 32; // producer count
  let sl = 20; // session length
  let mp = 4; // minimum producers req.
  let msl = 4; // minimum session length
  let uf = 6; // usage frequency
  let uft = "Daily"; // usage frequency type
  let st; // session type
  let rch = 0.05; // room charge

  const nn = (n) => {
    return isNaN(n)
      ? parseInt(n).isSafeInteger
        ? parseInt(n)
        : parseInt(parseInt(n).toFixed(2))
      : n.isSafeInteger
      ? n
      : parseInt(n.toFixed(2));
  }; // normalize number, remove decimal if not required, or concatenate it

  const fn = (n) => {
    return new Intl.NumberFormat("en-UK", {
      maximumSignificantDigits: 3,
    }).format(n);
  }; // format number

  $: tcpu = st === "Audio" ? 1 : 2; // track count per user

  $: pr = tcpu * (pc - 1); // producer tracks count
  $: cc = tcpu * pc * (pc - 1); // consumer tracks count

  $: pcCost = (cc / 2000) * (sl * 60) * tuf * 0.0025; // producer count cost

  $: pm = pc * sl * tuf; // participant-minute
  $: pmct = st === "Audio" ? 0.001 : 0.004; // participant-minute charge type
  $: epm = pm > 2000 ? pm - 2000 : 0; // over-quota participant minute
  $: pmc = pm > 2000 ? nn(epm * pmct) : 0; // participant-minute cost

  $: tuf = uft === "Daily" ? uf * 28 : uf * 4; // total usage frequency in a month
  $: etuf = tuf - 200; // extra total usage frequency in a month
  $: rc = tuf > 200 ? nn(etuf * rch) : 0; // room cost

  $: mc = 9; // monthly costs
  $: tc = nn(mc + pmc + rc); // total monthly costs
</script>

<div
  class="w-4/5 py-8 px-4 rounded-2xl grid justify-items-center items-center gap-36">
  <table class="table-auto">
    <thead>
      <tr>
        <th class="w-1/2" />
        <th
          class="w-1/4 px-4 py-2 border-b-2 border-gray-900 bg-green-200 text-gray-600 text-4xl font-serif font-bold text-center"
          >Base</th>
        <th
          class="w-1/4 px-4 py-2 border-b-2 border-gray-900 bg-green-50 opacity-90 text-gray-600 text-4xl font-serif font-bold text-center"
          >Add On</th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr>
        <td
          class="px-4 py-4 text-gray-600 border-b border-white text-2xl font-serif font-bold"
          >Monthly cost</td>
        <td
          class="px-12 py-4 bg-green-200 border-b border-white text-gray-600 text-2xl font-mono font-bold"
          >$9/month</td>
        <td
          class="px-6 py-4 opacity-80 hover:opacity-100 border-b border-white text-gray-600 bg-green-50 text-2xl font-mono font-bold flex flex-col items-center justify-evenly"
          >$49/month</td>
      </tr>

      <tr>
        <td
          class="px-4 py-4 text-gray-600 border-b border-white text-2xl font-serif font-bold"
          >Included participant-min</td>
        <td
          class="px-12 py-4 bg-green-200 border-b border-white text-gray-600 text-2xl font-mono font-bold"
          >2,000</td>
        <td
          class="px-6 py-4 opacity-80 hover:opacity-100 border-b border-white text-gray-600 bg-green-50 text-2xl font-mono font-bold flex flex-col items-center justify-evenly"
          ><span
            class="w-full text-sm flex flex-row items-center justify-center"
            ><span
              class="bg-gray-200 rounded-lg px-4 py-2 mr-2 font-mono font-bold text-xs leading-tight capitalize"
              >video:</span
            >$0.004/participant-min</span>
          <span class="w-full text-sm flex flex-row items-center justify-center"
            ><span
              class="bg-gray-200 rounded-lg px-4 py-2 mr-2 font-mono font-bold text-xs leading-tight capitalize"
              >audio:</span
            >$0.002/participant-min</span
          ></td>
      </tr>

      <tr>
        <td
          class="px-4 py-4 text-gray-600 border-b border-white text-2xl font-serif font-bold"
          >Programmatic rooms</td>
        <td
          class="px-12 py-4 bg-green-200 border-b border-white text-gray-600 text-2xl font-mono font-bold"
          >200</td>
        <td
          class="px-6 py-4 opacity-80 hover:opacity-100 border-b border-white text-gray-600 bg-green-50 text-2xl font-mono font-bold flex flex-col items-center justify-evenly"
          >$0.05/room</td>
      </tr>

      <tr>
        <td class="px-4 py-4 text-gray-600  text-2xl font-serif font-bold"
          >Participants in room</td>
        <td
          class="px-12 py-4 bg-green-200  text-gray-600 text-2xl font-mono font-bold"
          >125</td>
        <td
          class="px-6 py-4 opacity-80 hover:opacity-100  text-gray-600 bg-green-50 text-2xl font-mono font-bold flex flex-col items-center justify-evenly"
          >125 <span
            class="bg-gray-200 rounded-lg px-4 py-2 mr-2 font-mono font-bold text-xs leading-tight capitalize"
            >Limited</span
          ></td>
      </tr>
    </tbody>
  </table>

  <div class="grid grid-cols-3 items-start justify-items-stretch">
    <table class="table-auto col-span-2">
      <thead>
        <tr>
          <th class="w-1/4" />
          <th
            class="w-1/2 px-4 py-2 border-b-2 border-gray-900 bg-green-50 text-gray-600 text-4xl font-serif font-bold text-center"
            >Usage</th>
        </tr></thead>
      <tbody class="text-center">
        <tr>
          <td
            class="px-4 py-4 text-gray-600 border-b border-white text-2xl font-serif font-bold"
            >Average room session length</td>
          <td
            class="px-4 py-4 bg-green-50 border-b border-white text-gray-600 text-2xl font-mono font-bold">
            <div class="w-full grid grid-cols-2 gap-4 justify-items-stretch">
              <div class="w-full flex flex-col items-start justify-center">
                <span class="text-gray-400 text-sm -mt-2">Session Length</span>
                <input
                  type="range"
                  min="0"
                  max="240"
                  class="mt-2 block w-full h-0.5 appearance-none rounded-md bg-gray-400 border-transparent accent-green-400 focus:border-gray-500 focus:bg-gray-500 focus:ring-0"
                  bind:value={sl}
                  on:input={(e) => e.target.value < msl && (sl = msl)} />
              </div>
              <div class="w-full flex flex-col items-start justify-evenly">
                <h1 class="text-2xl">
                  <span class="px-2" bind:innerHTML={sl} contenteditable
                    >{sl}</span> minutes
                </h1>
                <span
                  class="font-sans font-normal text-gray-400 text-xs text-left">
                  <span class="text-gray-600 text-md font-mono"
                    >{fn(sl * 60)}</span>
                  seconds,
                  <span class="text-gray-600 text-md font-mono">
                    {sl / 60 > 0 ? (sl / 60).toFixed(2) : 0}
                  </span>
                  hours.
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            class="px-4 py-4 text-gray-600 border-b border-white text-2xl font-serif font-bold"
            >Participants in a session</td>
          <td
            class="p-4 bg-green-50 border-b border-white text-gray-600 font-mono font-bold ">
            <div class="w-full grid grid-cols-2 gap-4 justify-items-stretch">
              <div class="w-full flex flex-col items-start justify-center">
                <select
                  bind:value={st}
                  class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  ">
                  <option>Video</option>
                  <option>Audio</option>
                </select>
                <input
                  type="range"
                  min="0"
                  max="125"
                  class="my-4 block w-full h-0.5 appearance-none rounded-md bg-gray-400 border-transparent accent-green-400 focus:border-gray-500 focus:bg-gray-500 focus:ring-0"
                  bind:value={pc}
                  on:input={(e) => e.target.value < mp && (pc = mp)} />
              </div>
              <div class="w-full flex flex-col items-start justify-evenly">
                <h1 class="text-2xl">
                  <span class="px-2" bind:innerHTML={pc} contenteditable
                    >{pc}</span> users
                </h1>
                <span
                  class="font-sans font-normal text-gray-400 text-xs text-left"
                  >{" "}each user recieves
                  <span class="text-gray-600 text-md font-mono"
                    >{st === "Audio" ? "no" : pr / 2}</span>
                  video and
                  <span class="text-gray-600 text-md font-mono"
                    >{st === "Audio" ? pr : pr / 2}</span>
                  audio tracks, and a total of
                  <span class="text-gray-600 text-md font-mono">{fn(cc)}</span> tracks
                  are handled.</span>
                <span>
                  Costs: <span class="text-gray-600 text-md font-mono"
                    >{`$${fn(pcCost)}`}</span>
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td class="px-4 py-4 text-gray-600  text-2xl font-serif font-bold"
            >Room Usage Frequency</td>
          <td
            class="px-4 py-4 bg-green-50  text-gray-600 text-2xl font-mono font-bold">
            <div class="w-full grid grid-cols-2 gap-4 justify-items-stretch">
              <div class="w-full flex flex-col items-start justify-center">
                <select
                  bind:value={uft}
                  class="
                    block
                    w-full
                    mt-1
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  ">
                  <option>Weekly</option>
                  <option>Daily</option>
                </select>
                <input
                  type="range"
                  min="2"
                  max="240"
                  class="mt-2 block w-full h-0.5 appearance-none rounded-md bg-gray-400 border-transparent accent-green-400 focus:border-gray-500 focus:bg-gray-500 focus:ring-0"
                  bind:value={uf} />
              </div>
              <div class="w-full flex flex-col items-start justify-evenly">
                <h1 class="text-2xl">
                  <span class="px-2" bind:innerHTML={uf} contenteditable
                    >{uf}</span> rooms
                </h1>
                <span
                  class="font-sans font-normal text-gray-400 text-xs text-left">
                  <span class="text-gray-600 text-md font-mono">{tuf}</span>
                  rooms each month.
                </span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td
            class="px-4 py-4 text-gray-600 border-b border-white text-2xl font-serif font-bold"
            >Monthly Cost</td>
          <td
            class="px-12 py-4 bg-green-50 border-b border-white text-gray-600 text-2xl font-mono font-bold" />
        </tr>
      </tbody>
    </table>
    <div
      class="h-full mx-8  border-4 border-dotted border-gray-300 rounded-2xl">
      <div
        class="row-span-1 px-4 py-2 text-gray-600 text-4xl font-serif font-bold text-center bg-green-200">
        Charges
      </div>
      <div
        class="grid grid-rows-4 items-stretch justify-items-stretch divide-y">
        <div class="row-span-1 py-1 flex flex-col items-center justify-center ">
          <h1 class="text-gray-700 font-serif font-bold text-4xl">
            {pmc === 0 ? "-" : `$ ${fn(pmc)}`}
          </h1>
          <h1 class="font-sans font-normal text-gray-400 text-xs">
            <span class="text-base text-gray-500">{fn(pm)}</span> participant-min
          </h1>
        </div>
        <div class="row-span-1 py-1 flex flex-col items-center justify-center ">
          <h1 class="text-gray-700 font-serif font-bold text-4xl">
            {rc === 0 ? "-" : `$ ${fn(rc)}`}
          </h1>
          <h1 class="font-sans font-normal text-gray-400 text-xs">
            <span class="text-base text-gray-500">{fn(tuf)}</span> rooms
          </h1>
        </div>
        <div class="row-span-1 py-1 flex flex-col items-center justify-center ">
          <h1 class="text-gray-700 font-serif font-bold text-4xl">
            ${fn(mc)}
          </h1>
        </div>
        <div class="row-span-1 py-1 flex flex-col items-center justify-center ">
          <h1 class="text-gray-700 font-serif font-bold text-4xl">
            ${fn(tc)}
          </h1>
        </div>
      </div>
    </div>
  </div>
</div>
