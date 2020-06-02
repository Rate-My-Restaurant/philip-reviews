import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    // { duration: '2m', target: 900 },
    { duration: '3m', target: 1000 },
    // { duration: '5m', target: 1000 },
    // { duration: '1m30s', target: 100 },
    // { duration: '20s', target: 10 },
  ],
};

export default function() {
  // let res = http.get('https://httpbin.org/'); can delete later.
  let id = Math.floor(Math.random() * 1400000);
  // let id = 1500000   THIS NUM SHOULDN'T WORK, AS THERE ARE NO RESTAURANTS WITH AN ID > 1.4 MILLION
  let res = http.get(`http://localhost:8080/restaurants/${id}/comments`);

  check(res, { 'status was 200': r => r.status == 200 });
  sleep(1);
}

// k6 scripts for stress tesing 15-20 min

// k6 run generateTrafficK6.js
// 400 users, sleep for 0.1