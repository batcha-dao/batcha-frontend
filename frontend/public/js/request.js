const NODE = 'http://13.125.135.130:26657';

function submitTxReq() {

  var encoded_tx = "eyJib2R5Ijp7Im1lc3NhZ2VzIjpbeyJAdHlwZSI6Ii90aGFyc2lzLmV2bW9zLmJhdGNoYS5Nc2dTZW5kQmF0Y2hhIiwiY3JlYXRvciI6ImV2bW9zMWZ2OHplZ3kybWphcTZ3enY2cWVkbGNuYTBqN3M2bnZxZW1wZGdlIiwiYWNjb3VudCI6ImEiLCJ0YXJnZXQiOiJiIiwidmFsdWUiOiJjIiwiZGF0YSI6ImQifV0sIm1lbW8iOiIiLCJ0aW1lb3V0X2hlaWdodCI6IjAiLCJleHRlbnNpb25fb3B0aW9ucyI6W10sIm5vbl9jcml0aWNhbF9leHRlbnNpb25fb3B0aW9ucyI6W119LCJhdXRoX2luZm8iOnsic2lnbmVyX2luZm9zIjpbXSwiZmVlIjp7ImFtb3VudCI6W10sImdhc19saW1pdCI6IjIwMDAwMCIsInBheWVyIjoiIiwiZ3JhbnRlciI6IiJ9fSwic2lnbmF0dXJlcyI6W119";
  var querydata = '{"jsonrpc": "2.0", "id": 1, "method": "broadcast_btx_sync", "params": {"tx": "' + encoded_tx + '"}}';
  console.log("Send tx", querydata);
  return $.ajax({
    url: NODE,
    type: 'POST',
    contentType: 'application/json',
    processData: false,
    data: querydata
  });
}
