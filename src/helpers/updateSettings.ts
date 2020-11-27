declare var jQuery: any;
declare var find_my_blocks_globals: any;

export function updateSettings(data: any) {
  const $ = jQuery;
  const { ajax_url, nonce, action } = find_my_blocks_globals;

  const settings = {
    include_drafts: data.includeDrafts,
  };

  console.log(settings);

  $.ajax({
    type: "post",
    dataType: "json",
    async: false,
    url: ajax_url,
    data: {
      action,
      _ajax_nonce: nonce,
      settings,
    },
    success: (response: any) => {
      if (response.type === "success") {
        return;
      } else {
        throw new Error();
      }
    },
  });
}
