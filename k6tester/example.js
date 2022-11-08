import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '50s', target: 100 }, // simulate ramp-up of traffic from 1 to 100 users over 50 second
    { duration: '100s', target: 100 }, // stay at 100 users for 100 second
    { duration: '50s', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    'http_req_duration': ['p(99)<1500'],
  },
};

export default () => {
  http.get('http://127.0.0.1:8000/');
  sleep(1);
};