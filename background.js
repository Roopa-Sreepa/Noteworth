chrome.extension.onRequest.addListener(function(request, sender)
{localStorage.setItem("dom",request.message);});

