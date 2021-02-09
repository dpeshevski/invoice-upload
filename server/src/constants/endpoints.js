/***
 * Enum for route endpoints
 * @readonly
 * @enum {{path: string}}
 */

const InvoiceAPI = {
  GET: { path: "/invoice" },
  POST: { path: "/invoice" }
};

export default {
  invoiceAPI: Object.freeze(InvoiceAPI)
};
