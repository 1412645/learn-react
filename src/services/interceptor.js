(function () {
  const { fetch: origFetch } = window;

  window.fetch = async (...args) => {
    console.log("fetch called with args:", args);
    const response = await origFetch(...args);

    // response
    //   .clone()
    //   .json()
    //   .then((body) => console.log("intercepted response:", body))
    //   .catch((err) => console.error(err));

    // return response;

    return {
      ok: true,
      status: 200,
      json: async () => response,
    };
  };
})();
