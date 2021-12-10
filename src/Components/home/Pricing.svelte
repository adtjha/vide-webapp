<script>
  let pricing = {
    title: ["type", "base", "additional pricing"],
    data: [
      ["Monthly cost", "$9/month", "$49/month"],
      [
        "Included participant-min",
        "2,000",
        [
          '<span class="bg-gray-200 rounded-lg px-4 py-2 mr-2 font-mono font-bold text-xs leading-tight capitalize">video:</span>$0.004/participant-min',
          '<span class="bg-gray-200 rounded-lg px-4 py-2 mr-2 font-mono font-bold text-xs leading-tight capitalize">audio:</span>$0.002/participant-min',
        ],
      ],
      ["Programmatic rooms", "200", "$0.05/room"],
      [
        "Participants in room",
        "100",
        '100 <span class="bg-gray-200 rounded-lg px-4 py-2 mr-2 font-mono font-bold text-xs leading-tight capitalize">Limited</span>',
      ],
    ],
  };

  const pricingHtml = () => {
    let str = "",
      n = 0;
    while (pricing.data.length > n) {
      str += `
      <tr>
        <td
          class="px-4 py-4 text-gray-600 ${
            pricing.data.length - 1 !== n ? "border-b border-white" : ""
          } text-2xl font-serif font-bold"
          >${pricing.data[n][0]}</td
        >
        <td
          class="px-12 py-4 bg-green-200 ${
            pricing.data.length - 1 !== n ? "border-b border-white" : ""
          } text-gray-600 text-2xl font-mono font-bold"
          >${pricing.data[n][1]}</td>
        <td
          class="px-6 py-4 opacity-80 hover:opacity-100 ${
            pricing.data.length - 1 !== n ? "border-b border-white" : ""
          } text-gray-600 bg-green-50 text-2xl font-mono font-bold flex flex-col items-center justify-evenly"
          >${
            typeof pricing.data[n][2] === "object"
              ? pricing.data[n][2]
                  .map(
                    (pricing) =>
                      `<span class="w-full text-sm flex flex-row items-center justify-center">${pricing}</span>`
                  )
                  .join(" ")
              : pricing.data[n][2]
          }</td>
      </tr>
      `;
      n += 1;
    }
    return str;
  };
</script>

<div class="py-8 px-4 rounded-2xl grid justify-items-center items-center">
  <table class="table-auto">
    <thead>
      <tr>
        <th class="w-1/2" />
        <th
          class="w-1/4 px-4 py-2 border-b-2 border-gray-900 bg-green-200 text-gray-600 text-4xl font-serif font-bold text-center"
          >Base</th
        >
        <th
          class="w-1/4 px-4 py-2 border-b-2 border-gray-900 bg-green-50 opacity-90 text-gray-600 text-4xl font-serif font-bold text-center"
          >Add On</th
        >
      </tr>
    </thead>
    <tbody class="text-center">
      {@html pricingHtml()}
    </tbody>
  </table>
</div>
