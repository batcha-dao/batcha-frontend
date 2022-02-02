const PAGES = ['startPage', 'batchPage'];

async function connectMetamask() {
  if (typeof window.ethereum !== 'undefined') {
    // Metamask installed
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    $('.showMetamaskStatus').html(account.substr(0, 6) + '...' + account.substr(account.length-4, 4));
    $('#connectMetamaskButton').attr('data-original-title', account).tooltip('show');
  } else {
    // Metamask not installed
    $('.showMetamaskStatus').html("Error!");
    $('#connectMetamaskButton').attr('data-original-title', "Metamask required").tooltip('show');
  }
}

function movePage(targetIdx) {
  var idx;
  for (idx = 0; idx < PAGES.length; idx++) {
    if ( idx == targetIdx ) $('#'+PAGES[idx]).show();
    else $('#'+PAGES[idx]).hide();
  }
}