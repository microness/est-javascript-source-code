// step01 - HTTP 메서드 동작 테스트

import { createServer } from 'http';

const PORT = 4000;

const server = createServer((req, res) => {

  // 요청 객체에서 메서드, URL, 헤더 정보 추출
  const { method, url, headers } = req;

  // 공통 응답 헤더 (필요 시 테스트용 수정 가능)
  res.setHeader("X-Powered-By", "Node.js Raw HTTP Server");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  // ------------------------------
  // 1. HTTP METHOD 실험용 라우팅
  // ------------------------------
  if (url === "/" && method === "GET") {
    return respondJSON(res, { message: "하이??", method });
  }

  if (url === "/methods/get" && method === "GET") {
    return respondJSON(res, { message: "GET 요청 수신됨", method });
  }

  if (url === "/methods/post" && method === "POST") {
    collectBody(req, body => {
      // 일반적으로 DB에 데이터를 추가하는 로직
      respondJSON(res, { message: "POST 요청 수신됨", method, body });
    });
    return;
  } 

  if (url === "/methods/put" && method === "PUT") {
    collectBody(req, body => {
      respondJSON(res, { message: "PUT 요청 수신됨", method, body });
    });
    return;
  }

  if (url === "/methods/patch" && method === "PATCH") {
    collectBody(req, body => {
      respondJSON(res, { message: "PATCH 요청 수신됨", method, body });
    });
    return;
  }

  if (url === "/methods/delete" && method === "DELETE") {
    return respondJSON(res, { message: "DELETE 요청 수신됨", method });
  }

  // ------------------------------
  // 404 기본 응답
  // ------------------------------
  respondJSON(res, { error: "Not Found", method, url }, 404);
});

// ------------------------------
// 유틸 함수
// ------------------------------
function collectBody(req, callback) {
  let body = "";

  // 데이터 청크 수신
  req.on("data", chunk => {
    body += chunk.toString();
  });

  // 데이터 수신 완료
  req.on("end", () => {
    try {
      const parsed = JSON.parse(body || "{}");
      callback(parsed);
    } catch (e) {
      callback(body); // JSON이 아니면 raw로 전달
    }
  });
}

function respondJSON(res, obj, status = 200) {
  res.statusCode = status;
  res.end(JSON.stringify(obj, null, 2));
}

// ------------------------------
// 서버 시작
// ------------------------------
server.listen(PORT, () => {
  console.log(`Raw Node.js HTTP Server running at http://localhost:${PORT}`);
});
