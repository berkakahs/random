// Brotli sıkıştırılmış içerik body
let body = {
  "response": "u1PI9B/Y6/z57GWlnUYjRat6ZzL149+2zbgyTlRvvCwyiAUu0RiQ88+ixulk15BvzU5xRi9Fkt8Ky6VvbobRAdm7b2YL4KjMbpA5b4D++mE/QIbe3/LZhbhF8aQH1wjzbOPWhRwcDW4AiqWnTrTAOs40E4D4E4g5Yxes1UP5CI6hg7uitS0khAWpk32feaU2rPYGwIHY27Nyy4F9EdX7SMFR+WTpGP7yr/x/EXRCgmNvhlCZRpzpRMDjhHxu4jwEb4ZcxvoAIdks0A2IvEu526RhiX2iNxj5yXoBKiEpEJ1YmDdu0ZDGOW6k/Brfgsq+tpCvPC8GO8d8pPoSzogBX83QLzVSzOqTte3HxgVI8zQugP/yw7qadiGGpzjvfjX3o6KkknOkA5n09QT00hup9euEVKGoClIjmJhaL823Kx9C8LnQaiuHnuHG/iFMP75rmeNJzf5cC6yKhR3YSIikEfcU/Jh4JkhBbd47fI8U4n5aTfULbpHhQxTQePybvbD4eKcUHjPxmr1Z5znbClWrIFUxBtWD41YL+JFGXiaPOi+yaUhXCCa/Yc5qtod0AqMqQb1p5g8givX5LKYDOmmnV1dSHvhSVgyAb32JwkAdysZf1KPquws2c18HxQ8Rmfr8Vz76ZVcstpXHcQJzBAqvC1W/8Ph3tinsPK+DJpz0xXZgec7OG5uYzxdgir8PhOPNducjlcelsjKwBikQ6UtFme3mUSGoJAQcBEXOnRE56NSw52iYqGBdR1j/cuu2PxbZxJZUGG21gEVX79eaywwN0TFuKExOxWiZeREy7XyG4CtflUvSEG574+eIIRZE2Lg/AC1T2EK1BJ3lcnnLlHyl8F+T3QYAQX2fWR0BY526rlQcb6+4x2KYjvacqxjL3o0tRgjvoXZfA9F4+VwptCDD/u8ERSygSYjy6AbY+aAE7MNhPxuJ9bEWopRkrv+JnM9oFDd6nrzwx4trfr6IN4+/yA=="
};

// Eksik veya farklı olan ORIGINAL header değerlerini ekle
$httpResponseHeader["content-encoding"] = "br";
$httpResponseHeader[":status"] = "200";
$httpResponseHeader["date"] = "Sun, 15 Jun 2025 15:06:20 GMT";
$httpResponseHeader["etag"] = 'W/"3e7-Zo/5n6cA6MjhzU8yvvbL9bfA7Ac"';
$httpResponseHeader["s"] = "iw9DGsIpehPPad10CayoIeJ/f7xHM84/VYb0hjTU8IvJya32JGYGn6Bo8XGSZi53qvcUbaL0zxmk6otmqSyeTtaCRcDgyD7rUlCy+hL+0ryZkt2lG1p9rD9OuProjw2JZTrhB1+q8voDhOTpt1jVihHRaoRRD8K5PkrH7TtaMh8=";
$httpResponseHeader["cf-ray"] = "9502f8837ced9ada-IST";
$httpResponseHeader["server-timing"] = "cfL4;desc=\"?proto=TCP&rtt=14242&min_rtt=7368&rtt_var=8682&sent=21&recv=19&lost=0&retrans=1&sent_bytes=7040&recv_bytes=2315&delivery_rate=444398&cwnd=253&unsent_bytes=0&cid=8ee70ebc934b14b0&ts=5194&x=0\"";
$httpResponseHeader["report-to"] = "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v4?s=%2BQO2O6jL6VHmuG%2FYS1x%2B3yA%2FV05eLfcWp1RS89aGvMY8DX3kew%2F46UNMDf5LvMKlERUoTBceosWQahR5A38LsB0KwSKIkrhycDeUoIMmEUMnxBYYO0mkmq8OpgpRiiFc\"}],\"group\":\"cf-nel\",\"max_age\":604800}";
$httpResponseHeader["nel"] = "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}";

// Yanıt body’sini güncelle
$done({body: JSON.stringify(body)});
