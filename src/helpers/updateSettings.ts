declare var jQuery: any;
declare var find_my_blocks_globals: any;

export function updateSettings(data: object) {
  const $ = jQuery;
  const { ajax_url, nonce, action } = find_my_blocks_globals;

  const settings = { ...data };

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
      console.log("response", response);
      if (response.type === "success") {
        return;
      } else {
        throw new Error();
      }
    },
  });
}
