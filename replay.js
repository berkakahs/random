// surge.conf içinde: 
// [Script]
// my_static_response = type=http-response,pattern=^https:\/\/example\.com\/path,script-path=my_static_response.js

// 🔽 Bu dosya: my_static_response.js

let body = {
  response: "qvR36Lh5bLwIotp4PDQH7R/jRT2doCinJPONpIamytb8rSUDT9/8WFmrF/CZgoT/Qdv+IpFvuYwwLHhzwpV94Lp8dxqSEP1Bc13qG54O6oWdNK5kO48TrHGYKp7k/Du7XWW8+yBCrNwWSH22XDVCMRV7g2LrSdLpTMSbDkXuhzFaIFeeyaKjTEtaIuRhnboBZplV6r2TZXTw2nlzfa+U+P+NhW0vyzak0KfWWwNqbKUs0tK9eKPqUsrbQZlWVrKv3U9Dv5P0xqqMSSvIiBhXL5WH41KMVhV3HwUQe3SFnFHw4BIxdNkuuX9t9FJaNd5VP7QdXxB+O15sdZfuKBIKw7QX42yRzfaztGkNjJz6uCJ8Go0I5zvQ8I5pVzkIcy0J70SEqPFlo2QVH4lqB2Eyzpk7ITmoihoUJjpJ2gXMq7Dodfi2LFlu+ZnQPCWctRC1pOQmCc3TGm2ooP7eU0y+/ESlPBNjzX+4fRo9PeYTrEeonR+RlBbOBjCuMi6nQaqCPusUmEpRurPzI3EMxLxxnpqZugNSms6Rr3NlR9CYH7m66FFY3aq8EYhqHydU1vpigjfKjtVIFVorBQZb1XWHRTwT6zkl7AmvuKAHkohtr/PDM0FJj0t3yP/GFsqJO0vqOsR4v355rG3x8ZNmYhBliYgn4p+SMn0WQz76kNecUzzv1NT2MLIiZaj21KjUjQg4TkXS/dCw7qDzE6idvfJgHtnl5g6/k6xEpRZ80MDMy5rSrxrLf7cUrK2aPObvU82PdWAhXrBTddwMUaYqRJJT2sKNWq31aQWrKM3uesU2FhtaKYQW2lSzH6nuWjO9lZdnPI0cO1yPnDVlixxj5K1IqtSWNWmX50/4F2CxaDISO1zNBIKfHN49b5VZ08/GygYXb+kuzvB67og1r0sAkCBae9OLHLdz3alve0VyAVVKyb20kx9/PbHWjLxOmse/tzA02I+dQ3YIqpAkXw9ZArVpBg=="
};

$done({
  status: "HTTP/1.1 200 OK",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "S": "VThoEi6ncojLMtkRQQ5jaEJS4+8M3dqLJ33p68gJtoZoU0FFMlFe2oXxQlbIX2VFPvV6+SFvAD2n/xdNDXyhHAZkhkz2lkFZaOqfnfnb4vf06Z9ZM0WrAcd1hRkuHMWLo9W2yizXyZNEguOriN9ASFSHcA+DpO6oKw5jEz6EnhU="
  },
  body: JSON.stringify(body)
});