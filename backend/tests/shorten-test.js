import { check } from "k6";
import http from "k6/http";

export default function () {
  const res =  http.post(
    "http://localhost:3000/shorten",
     JSON.stringify({ url: "https://www.example.com" }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
  check(res, {
    "is status 200": (r) => r.status === 200,
  });
}