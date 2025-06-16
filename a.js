// replay.js
const body = $response.body;
const headers = $response.headers;

$done({
  status: "HTTP/1.1 200 OK",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Encoding": "br",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Expose-Headers": "token",
    "s": "iw9DGsIpehPPad10CayoIeJ/f7xHM84/VYb0hjTU8IvJya32JGYGn6Bo8XGSZi53qvcUbaL0zxmk6otmqSyeTtaCRcDgyD7rUlCy+hL+0ryZkt2lG1p9rD9OuProjw2JZTrhB1+q8voDhOTpt1jVihHRaoRRD8K5PkrH7TtaMh8=",
    "ETag": 'W/"3e7-Zo/5n6cA6MjhzU8yvvbL9bfA7Ac"'
  },
  body: `{
    "response": "2iRbpjZUen3w4AyBmUEawu/rXSnYM1Hl2vGBIcA0Giwh02Mx5YPGuCt9evYQN58ifahfvq1dkSFG6eqWBYc0NxNTZCq6FswL8Wa+GJp/h6qRu2MLUSvCb5KTN2vJR1uin7EeubM741DtFQnof++sUmqTQeHaR+HGfkSi4UieqopK65ERDIW08Ft6auef82CtFKas4sTyXqk6Y7c4lXWed7QEMOX5CrUd/G6KRIrW56K3BPXp/Dgi6Sp92SZnX3cXJjDxpdyfmf7oayfpKQ4ibv6Jsi3pP4ttV9XbAZEg4LmJbiLt4YAWzIrqi87oFsulbpsnCsQwWorDq6MYFv3SinmLMWHeE6iQZGEjS+8ZPiba/KX2jL6N9blsAjr6rCiDBVKGGHpWMrlc+R+L39tgMEsl4WfRz5TnrHyGI0QWNRT4YXmxjUPqmyXDcufxNW/nXMi6jiiohvkIDuiE2IHJ33Nqa2vyhNyKE7cuD1x2Ztcsr8fpsmRGsZPrpaCnM9RNvLPXEW1fMoUnyuVq2Q/YZZo32mazNVi+zxjxUnF/JyzohaP3Y36Rs3rFmIvG4re09leOuRl1jEKV7/AMezN5xVhDFN6Gj29LDznPJQ3eSWAitz3jNt8SzQcR5eHiGvtKVEbHLFZGNTQq79sL9W1Te+f3856Zcz8mOL4kO0wAUA1XedzWUfmyFTF4na35UVZHYsUt1qRO4pl13ra2klD+UQt7/ybdffUTX4ZojWBwO/bLMqJtnivPoihId03YTGr7n9Zfu0ejUsIYT8at5XXeqZyLhBGUKXhJjD3FDH6mTVrNGvx/ifPOiZpWIk57C8Z2kFCm30kwSkGUcpJc5gDZVSay4J6vNJtcJiR5bQ0UUpnYLaVYEZngXl9LbP7uVlVrtqCGOojPSZkRnijPbjp+A5Al6wGE+3MH0QcU5ECs16M1D3Ws56iXa9+uEAdv28GTyjvGp3v5+rKg2bbDc52TBwnEvIQnfTyaZdCC6T740oBD5J1wrjy4QPgaq+CXZYm3X1IUVtmQcOGqXBFBdit4I9Zd97pYCB1Z6Q+AM6/aZEFaTr5gfzONzcvXBY0GSGt6+BROozvp1gYI/ytcjI7DPw=="
  }`
});
